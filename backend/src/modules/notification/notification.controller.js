"use strict";
const NotificationService = require("./notification.service");

class NotificationController {
  createNotification = async (req, res) => {
    const device_id = req.params.deviceId;
    console.log(req.params);
    const response = await NotificationService.createNotification({
      ...req.body,
      device_id,
    });
    return res.status(201).json(response);
  };

  getAllNotificationsByDeviceId = async (req, res) => {
    const device_id = req.params.deviceId;
    const response = await NotificationService.getAllNotificationsByDeviceId({
      device_id: device_id,
    });
    return res.status(200).json(response);
  };

  saveFCMToken = async (req, res) => {
    const userId = req.params.userId;
    const response = await NotificationService.saveFCMToken({
      ...req.body,
      userId,
    });
    return res.status(200).json(response);
  };
}

module.exports = new NotificationController();
