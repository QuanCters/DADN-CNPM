"use strict";

const {
  NotFoundError,
  ConflictRequestError,
} = require("../core/error.response");

const {
  getDeviceById
} = require("../dbs/repositories/device.repo");

const { OK, CREATED } = require("../core/success.response");

const {
  createMeasurement,
  getAllMeasurement,
  getMeasurementByDevice,
  getTotalConsumption,
  getUsageTimeStatistics,
} = require("../dbs/repositories/measurement.repo");

class MeasurementService {
  /**
   * 1 - Thêm dữ liệu đo lường mới vào cơ sở dữ liệu
   * 2 - Trả về kết quả tạo mới
   */
  static createMeasurement = async (measurement) => {
    const result = await createMeasurement(measurement);
    if (!result) {
      throw new ConflictRequestError("Failed to create measurement");
    }

    return ({
      message: "Measurement created successfully",
      metadata: result,
    });
  };

  /**
   * 1 - Lấy danh sách tất cả các bản ghi đo lường
   * 2 - Trả về danh sách
   */
  static getAllMeasurement = async () => {
    const measurements = await getAllMeasurement();
    if (!measurements || measurements.length === 0) {
      throw new NotFoundError("No measurements found");
    }

    return ({
      message: "Get all measurements successfully",
      metadata: measurements,
    });
  };

  /**
   * 1 - Lấy danh sách bản ghi đo lường của một thiết bị
   * 2 - Trả về danh sách
   */
  static getMeasurementsByDevice = async ({ device_id }) => {
    device = await getDeviceById(device_id);
    if (!device) throw new NotFoundError("Device not found");

    const measurements = await getMeasurementByDevice(device_id);
    if (!measurements || measurements.length === 0) {
      throw new NotFoundError("No measurements found for this device");
    }

    return ({
      message: "Get measurements by device successfully",
      metadata: measurements,
    });
  };

  /**
   * 1 - Tính tổng lượng tiêu thụ của thiết bị trong một khoảng thời gian
   * 2 - Trả về kết quả
   */
  static getTotalConsumption = async ({ device_id, start_date, end_date }) => {
    device = await getDeviceById(device_id);
    if (!device) throw new NotFoundError("Device not found");

    const totalConsumption = await getTotalConsumption(
      device_id,
      start_date,
      end_date
    );
    if (totalConsumption === null) {
      throw new NotFoundError("No consumption data found for this device");
    }

    return ({
      message: "Get total consumption successfully",
      metadata: { totalConsumption },
    });
  };

  /**
   * 1 - Lấy thống kê thời gian sử dụng của thiết bị trong một khoảng thời gian
   * 2 - Trả về dữ liệu thống kê
   */
  static getUsageTimeStatistics = async ({
    device_id,
    start_date,
    end_date,
  }) => {
    const usageStatistics = await getUsageTimeStatistics(
      device_id,
      start_date,
      end_date
    );
    if (!usageStatistics || usageStatistics.length === 0) {
      throw new NotFoundError("No usage statistics found for this device");
    }

    return ({
      message: "Get usage time statistics successfully",
      metadata: usageStatistics,
    });
  };
}

module.exports = MeasurementService;
