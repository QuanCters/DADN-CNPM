import messaging from "@react-native-firebase/messaging";
import { PermissionsAndroid } from "react-native";
import { showLocalNotification } from "./notification.service";

class FCMService {
  currentToken: null | string;
  constructor() {
    this.currentToken = null;
  }

  async init(userId: Number) {
    await this._requestPermission();
    await this._registerToken(userId);
    this._setupListener();
  }

  async _requestPermission() {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    );
  }

  async _registerToken(userId: Number) {
    try {
      this.currentToken = await messaging().getToken();
      console.log(this.currentToken);
    } catch (error) {
      console.error("Lỗi đăng ký FCM Token:", error);
    }
  }

  _setupListener() {
    messaging().onMessage(async (remoteMessage) => {
      console.log(remoteMessage);
      await showLocalNotification(remoteMessage);
    });

    messaging().onNotificationOpenedApp((remoteMessage) => {
      this._handleNotificationClick(remoteMessage);
    });

    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) this._handleNotificationClick(remoteMessage);
      });
  }

  _handleNotificationClick = (remoteMessage: any) => {
    console.log("Notification Clicked:", remoteMessage);
    if (remoteMessage.data.deviceId) {
      console.log(remoteMessage);
    }
  };
}

export default new FCMService();
