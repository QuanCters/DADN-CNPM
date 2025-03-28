"use strict";
const DeviceService = require("../service/device.service");

class DeviceController {
  getAllDevices = async (req, res) => {
    const response = await DeviceService.getAllDevices(req.params);
    return res.status(200).json(response);
  };

  getAllDevicesHave = async (req, res) => {
    const response = await DeviceService.getAllDevicesHave(req.params);
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
  turnOnDevice = async (req, res) => {
    const { value } = req.body; // Lấy giá trị từ body
    const device_id = Number(req.params.id);
    if (value === undefined) {
      return res.status(400).json({ message: "Missing value in request body" });
    }
    // const response = await DeviceService.turnOnDevice({ device_id: Number(req.params.id) });
    const response = await DeviceService.turnOnDevice({ device_id, value });
    return res.status(200).json(response);
  };
  turnOffDevice = async (req, res) => {
    const response = await DeviceService.turnOffDevice({ device_id: Number(req.params.id) });
    return res.status(200).json(response);
  };
}

module.exports = new DeviceController();
