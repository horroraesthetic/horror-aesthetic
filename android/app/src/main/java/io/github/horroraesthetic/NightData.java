package io.github.horroraesthetic;

import android.content.Context;
import android.content.SharedPreferences;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.Calendar;
import java.util.TimeZone;

import org.json.JSONArray;
import org.json.JSONObject;

final class NightData {
    private static final long DAY = 86400000L;
    static final String APP_URL = "https://horroraesthetic.github.io/horror-aesthetic/app/";
    private static JSONObject data;

    private NightData() {}

    static SharedPreferences prefs(Context context) {
        return context.getSharedPreferences("night_archive", Context.MODE_PRIVATE);
    }

    static boolean russian(Context context) {
        var system = context.getResources().getConfiguration().getLocales().get(0).getLanguage();
        return "ru".equals(prefs(context).getString("lang", system));
    }

    static synchronized JSONObject data(Context context) throws Exception {
        if (data == null) {
            try (InputStream in = context.getAssets().open("rituals.json");
                 ByteArrayOutputStream out = new ByteArrayOutputStream()) {
                byte[] buffer = new byte[4096];
                int bytes;
                while ((bytes = in.read(buffer)) != -1) out.write(buffer, 0, bytes);
                data = new JSONObject(new String(out.toByteArray(), StandardCharsets.UTF_8));
            }
        }
        return data;
    }

    static long today() {
        Calendar local = Calendar.getInstance();
        Calendar utc = Calendar.getInstance(TimeZone.getTimeZone("UTC"));
        utc.clear();
        utc.set(local.get(Calendar.YEAR), local.get(Calendar.MONTH), local.get(Calendar.DAY_OF_MONTH));
        return utc.getTimeInMillis() / DAY;
    }

    static int yokaiSlot(JSONArray yokai) {
        return (int) Math.floorMod(today(), (long) yokai.length());
    }

    static JSONArray tonight(Context context) throws Exception {
        JSONArray films = data(context).getJSONArray("films");
        long index = ((today() * 2654435761L) & 0xffffffffL) % films.length();
        return films.getJSONArray((int) index);
    }
}
