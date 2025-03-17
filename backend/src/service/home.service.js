"use strict";

const {
  BadRequestError,
  ConflictRequestError,
} = require("../core/error.response");
const {
  getHomeByUserId,
  addUserToHomeById,
  updateManagerByHomeId,
  getHomeByHomeId,
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
    if (foundHome.length > 0) {
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
}

module.exports = HomeService;
