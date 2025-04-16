"use strict";

const UserService = require("../service/user.service");

class UserController {
  getUserByHomeId = async (req, res) => {
    const response = await UserService.getUserByHomeId({
      home_id: req.params.homeId,
    });
    return res.status(200).json(response);
  };
}

module.exports = new UserController();
