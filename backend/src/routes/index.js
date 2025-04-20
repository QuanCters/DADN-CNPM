"use strict";

const router = require("express").Router();

router.use("/v1/api/user", require("../modules/user/user.routes"));
router.use("/v1/api/notification", require("../modules/notification/notification.routes"));
router.use("/v1/api/schedule", require("../modules/schedule/schedule.routes"));
router.use("/v1/api/device", require("../modules/device/device.routes"));
router.use("/v1/api/home", require("../modules/home/home.routes"));
router.use("/v1/api/otp", require("../modules/otp/otp.routes"));
router.use("/v1/api", require("../modules/access/access.routes"));
router.use("", require("./demo"));

module.exports = router;
