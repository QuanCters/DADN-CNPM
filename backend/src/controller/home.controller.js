"use strict";
const HomeService = require("../service/home.service");

class HomeController {
  getHomeByUserId = async (req, res) => {
    const response = await HomeService.getHomeByUserId(req.params);
    return res.status(201).json(response);
  };

  addUserToHomeById = async (req, res) => {
    const response = await HomeService.addUserToHomeById(req.body);
    return res.status(200).json(response);
  };
}

module.exports = new HomeController();
