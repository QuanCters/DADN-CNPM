"use strict";

const {
  NotFoundError,
  ConflictRequestError,
  BadRequestError,
} = require("../core/error.response");

const {
  getDeviceById,
  getDevicesBySerialNumber,
  updateDeviceStatus,
} = require("../dbs/repositories/device.repo");
const { getHomeByUserId } = require("../dbs/repositories/home.repo");

class DeviceService {
  /**
   * 1 - Lấy danh sách thiết bị theo serial_number (nếu có)
   * 2 - Trả về danh sách thiết bị
   */
  static getAllDevices = async ({ serial_number }) => {
    const devices = await getDevicesBySerialNumber(serial_number);
    if (!devices || devices.length === 0) {
      throw new NotFoundError("No devices found");
    }

    return {
      message: "Get devices successfully",
      metadata: devices,
    };
  };

  /**
   * 1 - Tìm thiết bị theo ID
   * 2 - Nếu không tồn tại, trả về lỗi
   * 3 - Trả về thông tin thiết bị
   */
  static getDeviceById = async ({ device_id }) => {
    const device = await getDeviceById(device_id);
    if (!device) {
      throw new NotFoundError("Device not found");
    }

    return {
      message: "Get device successfully",
      metadata: device,
    };
  };

  /**
   * 1 - Kiểm tra thiết bị có tồn tại hay không
   * 2 - Nếu không tồn tại, trả về lỗi
   * 3 - Cập nhật trạng thái thiết bị
   * 4 - Trả về kết quả cập nhật
   */
  static updateDeviceStatus = async ({ device_id, status }) => {
    const device = await getDeviceById(device_id);
    if (!device) {
      throw new NotFoundError("Device not found");
    }

    const updatedDevice = await updateDeviceStatus(device_id, status);
    if (!updatedDevice) {
      throw new ConflictRequestError("Failed to update device status");
    }

    return {
      message: "Update device status successfully",
      metadata: updatedDevice,
    };
  };

  static async getDevicesByUserId({ userId }) {
    const foundHome = await getHomeByUserId(userId);
    if (!foundHome) {
      throw new BadRequestError("Home not found");
    }

    const foundDevice = await Promise.all(
      foundHome.map(async (home) => {
        const devices = await getDevicesBySerialNumber(home.home.serial_number);
        return {
          home_id: home.home_id,
          home_name: home.home.home_name,
          serial_number: home.home.serial_number,
          aio_key: home.home.aio_key,
          manager_id: home.home.manager_id,
          devices: devices,
        };
      })
    );

    return foundDevice;
  }
}

module.exports = DeviceService;
