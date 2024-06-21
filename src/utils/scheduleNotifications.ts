import { LocalNotifications } from '@capacitor/local-notifications';

export async function scheduleNotification() {
  const permission = await LocalNotifications.requestPermissions();
  if (permission.display === 'granted') {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: "Regar plantas",
          body: "OYE CTM REGA LAS PLANTAS",
          id: 1,
          schedule: { at: new Date(Date.now() + 1000 * 10) },
          sound: undefined,
          attachments: undefined,
          actionTypeId: "",
          extra: null
        }
      ]
    });
  }
}

