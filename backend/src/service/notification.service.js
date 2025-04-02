"use strict";

const {
  createNotification,
  getAllNotificationsByDeviceId,
} = require("../dbs/repositories/notification.repo");

const {
  getDeviceById,
  getAllNotifications,
} = require("../dbs/repositories/device.repo");
const {
  NotFoundError,
  ConflictRequestError,
} = require("../core/error.response");

class NotificationService {
  /**
   * 1 - Tạo một thông báo mới
   * 2 - Trả về kết quả tạo thông báo
   */
  static createNotification = async ({ content }) => {
    const newNotification = await createNotification({ content });

    return {
      message: "Notification created successfully",
      metadata: newNotification,
    };
  };

  static getAllNotifications = async ({ page = 1, limit = 5, device_id }) => {
    const notifications = await getAllNotificationsByDeviceId(
      page,
      limit,
      device_id
    );
    if (!notifications || notifications.length === 0) {
      throw new NotFoundError("No notifications found");
    }

    return {
      message: "Get notifications successfully",
      metadata: notifications,
    };
  };
}

module.exports = NotificationService;
