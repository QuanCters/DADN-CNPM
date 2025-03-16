"use strict";
const HomeService = require("../service/home.service");

class HomeController {
  getHomeByUserId = async (req, res) => {
    const response = await HomeService.getHomeByUserId(req.params);
    return res.status(201).json(response);
  };
}

module.exports = new HomeController();
