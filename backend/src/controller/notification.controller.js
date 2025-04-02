"use strict";
const NotificationService = require("../service/notification.service");

class NotificationController {
  createNotification = async (req, res) => {
    const response = await NotificationService.createNotification(req.params);
    return res.status(201).json(response);
  };

  getAllNotifications = async (req, res) => {
    const response = await NotificationService.getAllNotifications(req.params);
    return res.status(200).json(response);
  };
}

module.exports = new NotificationController();
