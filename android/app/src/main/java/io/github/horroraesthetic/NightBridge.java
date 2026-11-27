package io.github.horroraesthetic;

import android.Manifest;
import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.ClipData;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.util.Base64;
import android.webkit.WebView;

import androidx.core.content.FileProvider;
import androidx.webkit.JavaScriptReplyProxy;
import androidx.webkit.WebViewCompat;
import androidx.webkit.WebViewFeature;

import org.json.JSONObject;

import java.io.File;
import java.io.FileOutputStream;
import java.util.Collections;

final class NightBridge {
    static final int NOTIFICATION_PERMISSION = 3103;
    private static final int MAX_PNG = 8 * 1024 * 1024;
    private final Activity activity;
    private JavaScriptReplyProxy permissionsReply;

    NightBridge(Activity activity, WebView web) {
        this.activity = activity;
        if (WebViewFeature.isFeatureSupported(WebViewFeature.WEB_MESSAGE_LISTENER)) {
            WebViewCompat.addWebMessageListener(web, "HANative", Collections.singleton("https://horroraesthetic.github.io"),
                    (view, message, origin, mainFrame, reply) -> {
                        Uri url = view.getUrl() == null ? null : Uri.parse(view.getUrl());
                        if (!mainFrame || !ownedApp(url)) return;
                        String value = message.getData();
                        if (value != null && value.length() <= MAX_PNG * 2) receive(value, reply);
                    });
        }
    }

    private static boolean ownedApp(Uri url) {
        if (url == null || !"https".equals(url.getScheme()) || !"horroraesthetic.github.io".equals(url.getHost())) return false;
        return "/horror-aesthetic/app/".equals(url.getPath()) || "/horror-aesthetic/app/index.html".equals(url.getPath());
    }

    private void receive(String request, JavaScriptReplyProxy reply) {
        try {
            var data = new JSONObject(request);
            switch (data.optString("action")) {
                case "status":
                    String lang = data.optString("lang");
                    if (("ru".equals(lang) || "en".equals(lang)) &&
                            !lang.equals(NightData.prefs(activity).getString("lang", ""))) {
                        NightData.prefs(activity).edit().putString("lang", lang).apply();
                        YokaiWidget.refresh(activity);
                    }
                    reply(reply, null);
                    break;
                case "notify":
                    notificationRequest(data.optBoolean("enabled"), reply);
                    break;
                case "share-image":
                    share(data.optString("png"), reply);
                    break;
                default:
                    break;
            }
        } catch (Exception error) {
            android.util.Log.w("NightBridge", "Could not handle the app action", error);
        }
    }

    private void notificationRequest(boolean enable, JavaScriptReplyProxy reply) {
        if (enable && Build.VERSION.SDK_INT >= 33 &&
                activity.checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
            permissionsReply = reply;
            activity.requestPermissions(new String[] { Manifest.permission.POST_NOTIFICATIONS }, NOTIFICATION_PERMISSION);
            return;
        }
        NightReminder.enable(activity, enable && NightReminder.allowed(activity));
        reply(reply, enable && !NightReminder.allowed(activity) ? "permission" : null);
    }

    void notificationPermissionResult() {
        boolean allowed = NightReminder.allowed(activity) &&
                (Build.VERSION.SDK_INT < 33 || activity.checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) == PackageManager.PERMISSION_GRANTED);
        NightReminder.enable(activity, allowed);
        if (permissionsReply != null) reply(permissionsReply, allowed ? null : "permission");
        permissionsReply = null;
    }

    private void share(String encoded, JavaScriptReplyProxy reply) {
        try {
            if (encoded.length() > ((MAX_PNG + 2) / 3) * 4) throw new IllegalArgumentException("Image too large");
            byte[] png = Base64.decode(encoded, Base64.NO_WRAP);
            if (png.length < 24 || png.length > MAX_PNG || png[0] != (byte) 0x89 ||
                    png[1] != 'P' || png[2] != 'N' || png[3] != 'G') throw new IllegalArgumentException("Expected PNG");
            File directory = new File(activity.getCacheDir(), "wrapped");
            if (!directory.exists() && !directory.mkdirs()) throw new IllegalStateException("Missing share directory");
            File[] expired = directory.listFiles((dir, name) -> name.startsWith("wrapped-") && name.endsWith(".png"));
            long cutoff = System.currentTimeMillis() - 3L * 86400000L;
            if (expired != null) for (File file : expired) if (file.lastModified() < cutoff) file.delete();
            File image = File.createTempFile("wrapped-", ".png", directory);
            try (FileOutputStream out = new FileOutputStream(image)) { out.write(png); }
            Uri uri = FileProvider.getUriForFile(activity, activity.getPackageName() + ".wrapped", image, "horror-aesthetic-wrapped.png");
            Intent send = new Intent(Intent.ACTION_SEND).setType("image/png").putExtra(Intent.EXTRA_STREAM, uri)
                    .addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
            send.setClipData(ClipData.newRawUri("Horror Wrapped", uri));
            activity.startActivity(Intent.createChooser(send, "Horror Wrapped"));
        } catch (Exception error) {
            if (!(error instanceof ActivityNotFoundException)) android.util.Log.w("NightBridge", "Could not share Wrapped", error);
            reply(reply, "share");
        }
    }

    private void reply(JavaScriptReplyProxy proxy, String error) {
        try {
            var message = new JSONObject().put("enabled", NightReminder.enabled(activity));
            if (error != null) message.put("error", error);
            proxy.postMessage(message.toString());
        } catch (Exception failure) {
            android.util.Log.d("NightBridge", "App page no longer available", failure);
        }
    }
}
