"use strict";

const router = require("express").Router();
const deviceController = require("../../controller/device.controller");
const { asyncHandler } = require("../../helper/asyncHandler");

/**
 * @swagger
 * '/v1/api/device/{serialNumber}':
 *  get:
 *     tags:
 *     - Device controller
 *     summary: Get Devices By Serial Number
 *     parameters:
 *       - in: path
 *         name: serialNumber
 *         required: true
 *         description: The serial number of the house
 *         schema:
 *           type: integer
 *     responses:
 *      200:
 *        description: Devices retrieved successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: integer
 *                    description: The device ID
 *                  status:
 *                    type: string
 *                    description: The status of device
 *                  type:
 *                    type: string
 *                    description: The type of device
 *                  power_rating:
 *                    type: string
 *                    description: The power rating of device
 *                  room_name:
 *                    type: string
 *                    description: The location of device
 *                  password:
 *                    type: string
 *                    description: The password of main door
 *                  serial_number:
 *                    type: string
 *                    description: The serial number of house contain device
 *                  feed:
 *                    type: string
 *                    description: name of feed to connect adafruit
 *      400:
 *        description: Bad Request (Invalid serial number format)
 *      404:
 *        description: No devices found for the given serial number
 *      500:
 *        description: Server error
 */
router.get("/:serialNumber", asyncHandler(deviceController.getAllDevices));

router.get("/user/:userId", asyncHandler(deviceController.getDevicesByUserId));

router.post(
  "/update/status",
  asyncHandler(deviceController.updateDeviceStatus)
);

module.exports = router;
