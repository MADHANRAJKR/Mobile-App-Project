import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

/*
 Configure notification behavior
*/
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

/*
 Request notification permission
*/
export const requestNotificationPermission = async () => {
  const { status } = await Notifications.requestPermissionsAsync();

  if (status !== "granted") {
    alert("Permission for notifications was denied");
    return false;
  }

  return true;
};

/*
 Send a test notification
*/
export const sendTestNotification = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Mobile App Project",
      body: "This is a test notification!",
    },
    trigger: null,
  });
};
