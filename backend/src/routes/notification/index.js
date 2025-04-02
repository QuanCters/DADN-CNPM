"use strict";

const router = require("express").Router();
const notificationController = require("../../controller/notification.controller");
const { asyncHandler } = require("../../helper/asyncHandler");

/**
 * @swagger
 * '/v1/api/home/{userId}':
 *  get:
 *     tags:
 *     - Notification controller
 *     summary: Get Homes By User Id
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: The ID of the user to retrieve homes for
 *         schema:
 *           type: integer
 *     responses:
 *      200:
 *        description: Homes retrieved successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  user_id:
 *                    type: integer
 *                    description: The user ID
 *                  home_id:
 *                    type: integer
 *                    description: The home ID
 *                  home:
 *                    type: object
 *                    properties:
 *                      serial_number:
 *                        type: string
 *                        description: The serial number of the home
 *                      home_name:
 *                        type: string
 *                        description: The name of the home
 *      400:
 *        description: Bad Request (Invalid userId format)
 *      404:
 *        description: No homes found for the given user ID
 *      500:
 *        description: Server error
 */
router.get(
  "/:device_id",
  asyncHandler(notificationController.getAllNotifications)
);

/**
 * @swagger
 * '/v1/api/home/add':
 *  post:
 *     tags:
 *     - Notification controller
 *     summary: Add user to home
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - userId
 *              - homeId
 *            properties:
 *              userId:
 *                type: string
 *              homeId:
 *                type: string
 *     responses:
 *      200:
 *        description: Add successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: integer
 *                  example: 200
 *                message:
 *                  type: string
 *                  description: message response
 *      400:
 *        description: Bad Request (Invalid userId or homeId)
 *      404:
 *        description: Not Found
 *      409:
 *        description: Conflict (User is already in home)
 *      500:
 *        description: Server error
 */
router.post("/add", asyncHandler(notificationController.createNotification));

module.exports = router;
