"use strict";

const {
  createNotification,
  getAllNotificationsByDeviceId,
} = require("../../repositories/notification.repo");

const {
  getDeviceById,
  getAllNotifications,
} = require("../../repositories/device.repo");
const { NotFoundError } = require("../../core/error.response");

const { getRedisClient } = require("../../database/init.redis");

class NotificationService {
  /**
   * 1 - Tạo một thông báo mới
   * 2 - Trả về kết quả tạo thông báo
   */
  static createNotification = async ({ content, device_id }) => {
    const newNotification = await createNotification({ device_id, content });

    return {
      message: "Notification created successfully",
      metadata: newNotification,
    };
  };

  static getAllNotificationsByDeviceId = async ({
    page = 1,
    limit = 10,
    device_id,
  }) => {
    const notifications = await getAllNotificationsByDeviceId(
      page,
      limit,
      device_id
    );
    if (!notifications) {
      throw new NotFoundError("No notifications found");
    }

    return {
      message: "Get notifications successfully",
      metadata: notifications,
    };
  };

  static saveFCMToken = async ({ token, userId }) => {
    const redisClient = await getRedisClient();
    await redisClient.setEx(`user:${userId}:fcm_token`, 3600, token);
    return {
      status: 200,
      message: "save token successfully",
    };
  };
}

module.exports = NotificationService;
