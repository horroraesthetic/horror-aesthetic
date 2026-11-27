package io.github.horroraesthetic;

import android.app.AlarmManager;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.widget.RemoteViews;

import java.util.Calendar;

public final class NightReminder extends BroadcastReceiver {
    private static final String ALARM = "io.github.horroraesthetic.FILM_NIGHT";
    private static final String CHANNEL = "film_of_the_night";
    private static final int REQUEST = 3101;

    static boolean allowed(Context context) {
        return context.getSystemService(NotificationManager.class).areNotificationsEnabled();
    }

    static boolean enabled(Context context) {
        return NightData.prefs(context).getBoolean("notify", false) && allowed(context);
    }

    static void enable(Context context, boolean value) {
        NightData.prefs(context).edit().putBoolean("notify", value).apply();
        schedule(context);
    }

    static void schedule(Context context) {
        AlarmManager alarms = context.getSystemService(AlarmManager.class);
        PendingIntent alarm = PendingIntent.getBroadcast(context, REQUEST,
                new Intent(context, NightReminder.class).setAction(ALARM), PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_UPDATE_CURRENT);
        if (!enabled(context)) {
            alarms.cancel(alarm);
            return;
        }
        Calendar next = Calendar.getInstance();
        next.set(Calendar.HOUR_OF_DAY, 21);
        next.set(Calendar.MINUTE, 0);
        next.set(Calendar.SECOND, 0);
        next.set(Calendar.MILLISECOND, 0);
        if (next.getTimeInMillis() <= System.currentTimeMillis()) next.add(Calendar.DAY_OF_YEAR, 1);
        alarms.setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, next.getTimeInMillis(), alarm);
    }

    @Override public void onReceive(Context context, Intent intent) {
        if (ALARM.equals(intent.getAction())) {
            if (enabled(context)) notifyTonight(context);
        } else {
            YokaiWidget.refresh(context);
        }
        schedule(context);
    }

    private static void notifyTonight(Context context) {
        try {
            long date = NightData.today();
            if (NightData.prefs(context).getLong("lastNight", Long.MIN_VALUE) == date) return;
            var film = NightData.tonight(context);
            var manager = context.getSystemService(NotificationManager.class);
            boolean ru = NightData.russian(context);
            String title = ru ? "Фильм ночи" : "Film of the night";
            if (Build.VERSION.SDK_INT >= 26) {
                manager.createNotificationChannel(new NotificationChannel(CHANNEL, title, NotificationManager.IMPORTANCE_DEFAULT));
            }
            Intent open = new Intent(context, MainActivity.class)
                    .setData(Uri.parse(NightData.APP_URL + "#film/" + film.getString(0)))
                    .addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
            PendingIntent click = PendingIntent.getActivity(context, REQUEST, open, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
            Notification.Builder notice = Build.VERSION.SDK_INT >= 26 ? new Notification.Builder(context, CHANNEL) : new Notification.Builder(context);
            String filmTitle = film.getString(ru ? 2 : 1);
            RemoteViews card = new RemoteViews(context.getPackageName(), R.layout.night_notice);
            card.setTextViewText(R.id.notice_title, title);
            card.setTextViewText(R.id.notice_film, filmTitle);
            manager.notify(REQUEST, notice.setSmallIcon(R.drawable.ic_night_notice).setColor(Color.rgb(174, 24, 52))
                    .setContentTitle(title).setContentText(filmTitle).setCustomContentView(card)
                    .setStyle(new Notification.DecoratedCustomViewStyle())
                    .setContentIntent(click).setAutoCancel(true).build());
            NightData.prefs(context).edit().putLong("lastNight", date).apply();
        } catch (Exception error) {
            android.util.Log.w("NightReminder", "Could not show film reminder", error);
        }
    }
}
