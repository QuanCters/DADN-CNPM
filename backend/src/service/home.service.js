"use strict";

const {
  BadRequestError,
  ConflictRequestError,
} = require("../core/error.response");
const { getDevicesBySerialNumber } = require("../dbs/repositories/device.repo");
const {
  getHomeByUserId,
  addUserToHomeById,
  updateManagerByHomeId,
  getHomeByHomeId,
  getHomeBySerialNumber,
} = require("../dbs/repositories/home.repo");

class HomeService {
  static async getHomeByUserId({ userId }) {
    const result = await getHomeByUserId(userId);
    if (!result) {
      throw new BadRequestError("Home not found");
    }

    return {
      status: 200,
      result,
    };
  }

  static async addUserToHomeById({ userId, homeId }) {
    const foundHome = await getHomeByUserId(userId);
    if (foundHome.home_id === userId) {
      throw new ConflictRequestError("User already in home");
    }

    const result = await addUserToHomeById(userId, homeId);
    if (!result) {
      throw new BadRequestError("Home not found");
    }

    const home = await getHomeByHomeId(homeId);

    if (!home.manager_id) {
      const temp = await updateManagerByHomeId(userId, homeId);
      if (!temp) {
        throw new BadRequestError("Error during add manager");
      }
    }
    return {
      status: 200,
      message: "Add User Successfully",
    };
  }

  static async getHomeBySerialNumber({ serialNumber }) {
    const result = await getHomeBySerialNumber(serialNumber);
    if (!result) {
      throw new BadRequestError("Home not found");
    }

    const devices = await getDevicesBySerialNumber(serialNumber);

    return {
      status: 200,
      message: "Get home successfully",
      home: { ...result, devices: devices },
    };
  }
}

module.exports = HomeService;
