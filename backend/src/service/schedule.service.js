"use strict";

const {
  createSchedule,
  getSchedule,
  getScheduleByDevice,
  updateDeviceSchedule,
  deleteScheduleByDevice,
  getSchedulesInTimeRange,
  getSchedules,
  // getAllSchedule,
  // deleteAllSchedule,
} = require("../dbs/repositories/schedule.repo");

const { getDeviceById } = require("../dbs/repositories/device.repo");
const {
  NotFoundError,
  ConflictRequestError,
} = require("../core/error.response");

class ScheduleService {
  static createSchedule = async ({
    device_id,
    action_time,
    action_day,
    action,
    value,
  }) => {
    if (
      !device_id ||
      !action_time ||
      !action_day ||
      !action ||
      (action == "on" && !value)
    ) {
      throw new Error("Missing required fields");
    }
    if (!value) value = 0;
    const device = await getDeviceById(device_id);
    if (!device) throw new NotFoundError("Device not found");
    const history = await getSchedule({
      device_id,
      action_day,
      action_time: new Date(action_time),
    });
    if (history) {
      throw new ConflictRequestError(
        "Schedule'device already exists for this time"
      );
    }
    const schedule = await createSchedule({
      device_id,
      action_time: new Date(action_time),
      action_day,
      action,
      value,
    });
    if (!schedule) throw new ConflictRequestError("Failed to create schedule");

    return {
      message: "Schedule created successfully",
      metadata: schedule,
    };
  };
  static createScheduleFull = async ({
    device_id,
    time_on,
    time_off,
    value,
  }) => {
    const device = await getDeviceById(device_id);
    if (!device) throw new NotFoundError("Device not found");
    const historyOn = await getSchedule({
      device_id,
      action_time: new Date(time_on),
    });
    if (historyOn) {
      throw new ConflictRequestError(
        "Schedule'device already exists for this time"
      );
    }
    const historyOff = await getSchedule({
      device_id,
      action_time: new Date(time_off),
    });
    if (historyOff) {
      throw new ConflictRequestError(
        "Schedule'device already exists for this time"
      );
    }
    if (new Date(time_on) >= new Date(time_off)) {
      throw new ConflictRequestError("Time off must be greater than time on");
    }
    const schedule_on = await createSchedule({
      device_id,
      action_time: new Date(time_on),
      action: "on",
      value,
    });
    const schedule_off = await createSchedule({
      device_id,
      action_time: new Date(time_off),
      action: "off",
      value: 0,
    });
    if (!schedule_on || !schedule_off)
      throw new ConflictRequestError("Failed to create schedule");

    return {
      message: "Schedule created successfully",
      metadata: [schedule_on, schedule_off],
    };
  };
  static getSchedule = async ({ device_id, action_time }) => {
    const device = await getDeviceById(device_id);
    if (!device) throw new NotFoundError("Device not found");

    const schedule = await getSchedule(device_id, action_time);
    if (!schedule) throw new NotFoundError("Schedule not found");

    return {
      message: "Get schedule successfully",
      metadata: schedule,
    };
  };

  static getScheduleByDevice = async ({ device_id }) => {
    const device = await getDeviceById(device_id);
    if (!device) throw new NotFoundError("Device not found");

    const schedules = await getScheduleByDevice(device_id);
    if (!schedules || schedules.length === 0) {
      throw new NotFoundError("No schedules found for this device");
    }

    return {
      message: "Get schedules successfully",
      metadata: schedules,
    };
  };

  static updateSchedule = async ({
    device_id,
    action_time,
    action,
    action_time_old,
    value,
  }) => {
    const device = await getDeviceById(device_id);
    if (!device) throw new NotFoundError("Device not found");

    const schedule = await getSchedule(device_id, action_time_old);
    if (!schedule) throw new NotFoundError("Schedule not found");

    const updatedSchedule = await updateDeviceSchedule({
      device_id,
      action_time: new Date(action_time),
      action,
      action_time_old: new Date(action_time_old),
      value,
    });
    if (!updatedSchedule)
      throw new ConflictRequestError("Failed to update schedule");
    return {
      message: "Schedule updated successfully",
      metadata: updatedSchedule,
    };
  };

  static deleteScheduleByDevice = async ({ device_id, action_time }) => {
    const device = await getDeviceById(device_id);
    if (!device) throw new NotFoundError("Device not found");

    const schedule = await getSchedule(device_id, action_time);
    if (!schedule) throw new NotFoundError("Schedule not found");

    await deleteScheduleByDevice(device_id, action_time);
    return { message: "Schedule deleted successfully" };
  };

  static getSchedulesInTimeRange = async ({
    device_id,
    start_time,
    end_time,
  }) => {
    const device = await getDeviceById(device_id);
    if (!device) throw new NotFoundError("Device not found");

    const schedules = await getSchedulesInTimeRange(
      device_id,
      start_time,
      end_time
    );
    if (!schedules || schedules.length === 0) {
      throw new NotFoundError("No schedules found in this time range");
    }

    return {
      message: "Get schedules in time range successfully",
      metadata: schedules,
    };
  };

  static getSchedules = async () => {
    const schedules = await getSchedules();
    if (!schedules || schedules.length === 0) {
      throw new NotFoundError("No schedules found");
    }

    return {
      message: "Get all schedules successfully",
      metadata: schedules,
    };
  };
  static getAllSchedule = async () => {
    const schedules = await getAllSchedule();
    if (!schedules || schedules.length === 0) {
      throw new NotFoundError("No schedules found");
    }

    return {
      message: "Get all schedules successfully",
      metadata: schedules,
    };
  };
  static deleteAllSchedule = async () => {
    const result = await deleteAllSchedule();
    return result;
  };
}

module.exports = ScheduleService;
