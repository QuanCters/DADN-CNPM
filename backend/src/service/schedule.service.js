"use strict";

const {
  createSchedule,
  getSchedule,
  getScheduleByDevice,
  updateSchedule,
  deleteSchedule,
  getSchedulesInTimeRange,
} = require("../dbs/repositories/schedule.repo");

const {
  getDeviceById,
} = reqquire("../dbs/repositories/device.repo");
const { OK, CREATED } = require("../core/success.response");
const { NotFoundError, ConflictRequestError } = require("../core/error.response");

class ScheduleService {
  static createSchedule = async ({ device_id, time_action, action }) => {
    const device = await getDeviceById(device_id);
    if (!device) throw new NotFoundError("Device not found");

    const schedule = await createSchedule({ device_id, time_action, action });
    if(!schedule) throw new ConflictRequestError("Failed to create schedule");

    return ({
      message: "Schedule created successfully",
      metadata: schedule,
    });
  };

  static getSchedule = async ({ device_id, action_time }) => {
    device = await getDeviceById(device_id);  
    if (!device) throw new NotFoundError("Device not found");

    const schedule = await getSchedule(device_id, action_time);
    if (!schedule) throw new NotFoundError("Schedule not found");

    return ({
      message: "Get schedule successfully",
      metadata: schedule,
    });
  };

  static getScheduleByDevice = async ({ device_id }) => {
    const device = await getDeviceById(device_id);
    if (!device) throw new NotFoundError("Device not found");

    const schedules = await getScheduleByDevice(device_id);
    if (!schedules || schedules.length === 0) {
      throw new NotFoundError("No schedules found for this device");
    }

    return ({
      message: "Get schedules successfully",
      metadata: schedules,
    });
  };

  static updateSchedule = async ({ device_id, action_time, action }) => {
    const device = await getDeviceById(device_id);
    if (!device) throw new NotFoundError("Device not found"); 

    const schedule = await getSchedule(device_id, action_time);
    if (!schedule) throw new NotFoundError("Schedule not found");

    const updatedSchedule = await updateSchedule(device_id, action_time, action);
    return ({
      message: "Schedule updated successfully",
      metadata: updatedSchedule,
    });
  };

  static deleteSchedule = async ({ device_id, action_time }) => {
    const device = await getDeviceById(device_id);
    if (!device) throw new NotFoundError("Device not found");

    const schedule = await getSchedule(device_id, action_time);
    if (!schedule) throw new NotFoundError("Schedule not found");

    await deleteSchedule(device_id, action_time);
    return ({ message: "Schedule deleted successfully" });
  };

  static getSchedulesInTimeRange = async ({ device_id, start_time, end_time }) => {
    const device = await getDeviceById(device_id);
    if (!device) throw new NotFoundError("Device not found");

    const schedules = await getSchedulesInTimeRange(device_id, start_time, end_time);
    if (!schedules || schedules.length === 0) {
      throw new NotFoundError("No schedules found in this time range");
    }

    return ({
      message: "Get schedules in time range successfully",
      metadata: schedules,
    });
  };
}

module.exports = ScheduleService;
