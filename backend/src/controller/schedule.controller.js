"use strict";
const ScheduleService = require("../service/schedule.service");

class ScheduleController {
  createSchedule = async (req, res) => {
    const device_id = Number(req.params.device_id);
    const { action_time, action_day, action, value } = req.body;
    const response = await ScheduleService.createSchedule({
      device_id,
      action_time,
      action_day,
      action,
      value,
    });
    return res.status(201).json(response);
  };
  createScheduleFull = async (req, res) => {
    const device_id = Number(req.params.device_id);
    const { time_on, time_off, value } = req.body;
    const response = await ScheduleService.createScheduleFull({
      device_id,
      time_on,
      time_off,
      value,
    });
    return res.status(201).json(response);
  };
  getSchedules = async (req, res) => {
    const response = await ScheduleService.getSchedules(req.body);
    return res.status(200).json(response);
  };
  getAllSchedule = async (req, res) => {
    const response = await ScheduleService.getAllSchedule();
    return res.status(200).json(response);
  };
  getScheduleByDevice = async (req, res) => {
    const response = await ScheduleService.getScheduleByDevice({
      device_id: Number(req.params.device_id),
    });
    return res.status(200).json(response);
  };
  deleteScheduleByDevice = async (req, res) => {
    const { action_time, action_day } = req.body;
    const device_id = Number(req.params.device_id);
    const response = await ScheduleService.deleteScheduleByDevice({
      device_id,
      action_time,
      action_day,
    });
    return res.status(200).json(response);
  };
  updateDeviceSchedule = async (req, res) => {
    const {
      action_day_old,
      action_day,
      action_time_old,
      action_time,
      action,
      value,
    } = req.body;
    const device_id = Number(req.params.device_id);
    const response = await ScheduleService.updateSchedule({
      action_day_old,
      action_day,
      device_id,
      action_time,
      action,
      action_time_old,
      value,
    });
    return res.status(200).json(response);
  };
  // deleteAllSchedule = async (req, res) => {
  //   const response = await ScheduleService.deleteAllSchedule();
  //   return res.status(200).json(response);
  // };
}

module.exports = new ScheduleController();
