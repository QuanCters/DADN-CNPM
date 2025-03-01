"use strict";

const { NotFoundError, ConflictRequestError } = require("../core/error.response");

const {
  createLogEvent,
  getLogEventById,
  getLogEventsByDevice,
  getLogEventsInTimeRange,
} = require("../dbs/repositories/log_event.repo");

const { getDeviceById } = require("../dbs/repositories/device.repo");

class LogEventService {
  /**
   * 1 - Tạo một log event mới
   * 2 - Trả về log event vừa tạo
   */
  static createLogEvent = async (log) => {
    const newLogEvent = await createLogEvent(log);
    if (!newLogEvent) {
      throw new ConflictRequestError("Failed to create log event");
    }

    return ({
      message: "Log event created successfully",
      metadata: newLogEvent,
    });
  };

  /**
   * 1 - Tìm log event theo ID
   * 2 - Nếu không tồn tại, trả về lỗi
   * 3 - Trả về thông tin log event
   */
  static getLogEventById = async ({ logEventId }) => {
    const logEvent = await getLogEventById(logEventId);
    if (!logEvent) {
      throw new NotFoundError("Log event not found");
    }

    return ({
      message: "Get log event successfully",
      metadata: logEvent,
    });
  };

  /**
   * 1 - Lấy danh sách log event theo thiết bị
   * 2 - Nếu không có log event nào, trả về lỗi
   * 3 - Trả về danh sách log event
   */
  static getLogEventByDevice = async ({ device_id }) => {
    device = await getDeviceById(device_id);
    if (!device) throw new NotFoundError("Device not found");

    const logEvents = await getLogEventsByDevice(device_id);
    if (!logEvents || logEvents.length === 0) {
      throw new NotFoundError("No log events found for this device");
    }

    return ({
      message: "Get log events successfully",
      metadata: logEvents,
    });
  };

  /**
   * 1 - Lấy danh sách log event trong khoảng thời gian theo thiết bị
   * 2 - Nếu không có log event nào, trả về lỗi
   * 3 - Trả về danh sách log event
   */
  static getLogEventsInTimeRange = async ({ device_id, time_start, time_end }) => {
    device = await getDeviceById(device_id);  
    if (!device) throw new NotFoundError("Device not found");

    const logEvents = await getLogEventsInTimeRange(device_id, time_start, time_end);
    if (!logEvents || logEvents.length === 0) {
      throw new NotFoundError("No log events found in this time range");
    }

    return ({
      message: "Get log events successfully",
      metadata: logEvents,
    });
  };
}

module.exports = LogEventService;
