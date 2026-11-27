package io.github.horroraesthetic;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.widget.RemoteViews;

import java.io.InputStream;

public final class YokaiWidget extends AppWidgetProvider {
    @Override public void onUpdate(Context context, AppWidgetManager manager, int[] ids) {
        refresh(context);
    }

    static void refresh(Context context) {
        AppWidgetManager manager = AppWidgetManager.getInstance(context);
        ComponentName provider = new ComponentName(context, YokaiWidget.class);
        if (manager.getAppWidgetIds(provider).length == 0) return;

        boolean ru = NightData.russian(context);
        RemoteViews view = new RemoteViews(context.getPackageName(), R.layout.yokai_widget);
        view.setTextViewText(R.id.widget_label, ru ? "Ёкай дня" : "Yōkai of the day");
        try {
            var data = NightData.data(context);
            var yokai = data.getJSONArray("yokai");
            var atlas = data.getJSONObject("atlas");
            int slot = NightData.yokaiSlot(yokai);
            int tile = atlas.getInt("tile"), columns = atlas.getInt("columns");
            view.setTextViewText(R.id.widget_yokai, yokai.getJSONArray(slot).getString(ru ? 1 : 2));
            try (InputStream in = context.getAssets().open("yokai.webp")) {
                Bitmap sheet = BitmapFactory.decodeStream(in);
                if (sheet != null) {
                    Bitmap icon = Bitmap.createBitmap(sheet, (slot % columns) * tile, (slot / columns) * tile, tile, tile);
                    view.setImageViewBitmap(R.id.widget_image, icon);
                }
            }
        } catch (Exception error) {
            android.util.Log.w("YokaiWidget", "Could not load the daily yōkai artwork", error);
        }
        Intent open = new Intent(context, MainActivity.class)
                .setData(Uri.parse(NightData.APP_URL + "#yokai"))
                .addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        view.setOnClickPendingIntent(R.id.widget_content, PendingIntent.getActivity(context, 3102, open,
                PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_UPDATE_CURRENT));
        manager.updateAppWidget(provider, view);
    }
}
