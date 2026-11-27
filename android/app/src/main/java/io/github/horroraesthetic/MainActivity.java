package io.github.horroraesthetic;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.ImageView;

public class MainActivity extends Activity {
    private static final String HOST = "horroraesthetic.github.io";
    private WebView web;
    private NightBridge nightBridge;

    private static boolean ownUrl(Uri uri) {
        return uri != null && "https".equals(uri.getScheme()) && HOST.equals(uri.getHost()) &&
                uri.getPath() != null && uri.getPath().startsWith("/horror-aesthetic/");
    }

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        web = new WebView(this);
        web.setBackgroundColor(Color.parseColor("#0A0606"));
        FrameLayout content = new FrameLayout(this);
        content.addView(web, new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
        ImageView startup = state == null ? new ImageView(this) : null;
        if (startup != null) {
            startup.setBackgroundResource(R.color.bg);
            startup.setImageResource(R.drawable.startup_illustration);
            startup.setScaleType(ImageView.ScaleType.FIT_CENTER);
            startup.setImportantForAccessibility(View.IMPORTANT_FOR_ACCESSIBILITY_NO);
            content.addView(startup, new FrameLayout.LayoutParams(
                    FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
        }
        setContentView(content);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(true);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(false);
        s.setUserAgentString(s.getUserAgentString() + " HorrorAestheticApp/1");

        nightBridge = new NightBridge(this, web);
        YokaiWidget.refresh(this);

        web.setWebChromeClient(new WebChromeClient());
        web.setWebViewClient(new WebViewClient() {
            private void dismissStartup() {
                if (startup != null && startup.getParent() == content) {
                    content.removeView(startup);
                    startup.setImageDrawable(null);
                }
            }

            @Override
            public void onPageCommitVisible(WebView view, String url) {
                dismissStartup();
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                if (request.isForMainFrame()) dismissStartup();
                super.onReceivedError(view, request, error);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri u = request.getUrl();
                if (ownUrl(u)) return false;
                try {
                    startActivity(new Intent(Intent.ACTION_VIEW, u));
                } catch (Exception ignored) { }
                return true;
            }
        });

        if (state != null) {
            web.restoreState(state);
        } else {
            Uri data = getIntent() != null ? getIntent().getData() : null;
            web.loadUrl(ownUrl(data) ? data.toString() : NightData.APP_URL);
        }
    }

    @Override
    protected void onSaveInstanceState(Bundle out) {
        super.onSaveInstanceState(out);
        web.saveState(out);
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        Uri data = intent.getData();
        if (ownUrl(data)) web.loadUrl(data.toString());
    }

    @Override
    public void onRequestPermissionsResult(int request, String[] permissions, int[] results) {
        super.onRequestPermissionsResult(request, permissions, results);
        if (request == NightBridge.NOTIFICATION_PERMISSION && nightBridge != null) {
            nightBridge.notificationPermissionResult();
        }
    }

    @Override
    public void onBackPressed() {
        if (web.canGoBack()) web.goBack();
        else super.onBackPressed();
    }

    @Override
    protected void onPause() { super.onPause(); web.onPause(); }

    @Override
    protected void onResume() { super.onResume(); web.onResume(); }
}
