"use strict";
const DeviceService = require("./device.service");
const MeasurementService = require("../measurement/measurement.service");

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

  getDeviceMeasurement = async (req, res) => {
    const device_id = req.params.deviceId;
    const response = await MeasurementService.getMeasurementByDevice({
      device_id: device_id,
      ...req.body,
    });
    return res.status(200).json(response);
  };
}

module.exports = new DeviceController();
