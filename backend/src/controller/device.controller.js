"use strict";
const DeviceService = require("../service/device.service");

class DeviceController {
  getAllDevices = async (req, res) => {
    const response = await DeviceService.getAllDevices(req.params);
    return res.status(200).json(response);
  };

  getDevicesByUserId = async (req, res) => {
    const response = await DeviceService.getDevicesByUserId(req.params);
    return res.status(200).json(response);
  };

  updateDeviceStatus = async (req, res) => {
    const response = await DeviceService.updateDeviceStatus(req.body);
    return res.status(200).json(response);
  };
}

module.exports = new DeviceController();
