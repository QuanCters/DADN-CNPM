"use strict";

const { BadRequestError } = require("../core/error.response");
const { getHomeByUserId } = require("../dbs/repositories/home.repo");

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
}

module.exports = HomeService;
