"use strict";

const {
  createNotification,
  getAllNotifications,
} = require("../dbs/repositories/notification.repo");

const { getDeviceById } = require("../dbs/repositories/device.repo");
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

  /**
   * 1 - Gửi thông báo đến danh sách người dùng
   * 2 - Xác nhận thông báo đã được gửi thành công
   */
  static sendNotification = async ({ notification_id, list_user }) => {
    if (!list_user || list_user.length === 0) {
      throw new ConflictRequestError("No users provided for notification");
    }

    // Cần thảo luận cách gửi.....
    console.log(
      `Sending notification ID ${notification_id} to users:`,
      list_user
    );

    return {
      message: "Notification sent successfully",
    };
  };

  /**
   * 1 - Lấy danh sách thông báo theo `device_id`
   * 2 - Trả về danh sách thông báo hoặc lỗi nếu không tìm thấy
   */
  static getNotificationByDevice = async ({ device_id }) => {
    const device = await getDeviceById(device_id);
    if (!device) {
      throw new NotFoundError("Device not found");
    }
    const notifications = await prisma.device_have_notification.findMany({
      where: { device_id },
      include: { notification: true }, // Lấy thông tin chi tiết từ bảng `notification`
    });

    if (!notifications || notifications.length === 0) {
      throw new NotFoundError("No notifications found for this device");
    }

    return {
      message: "Get notifications successfully",
      metadata: notifications.map((n) => n.notification),
    };
  };

  static getAllNotifications = async ({ page = 1, limit = 5 }) => {
    const notifications = await getAllNotifications(page, limit);
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
