"use strict";

const router = require("express").Router();

router.use("/v1/api/otp", require("./otp"));
router.use("/v1/api", require("./access"));
router.use("", require("./demo"));

module.exports = router;
