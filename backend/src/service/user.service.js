"use strict";

const { BadRequestError } = require("../core/error.response");
const { getUserByHomeId } = require("../dbs/repositories/user.repo");

class UserService {
  static getUserByHomeId = async ({ home_id }) => {
    const userList = await getUserByHomeId(home_id);
    if (!userList) {
      throw new BadRequestError("User not found");
    }
    return {
      status: 200,
      users: userList,
    };
  };
}

module.exports = UserService;
