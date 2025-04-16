const router = require("express").Router();
const UserController = require("../../controller/user.controller");
const { asyncHandler } = require("../../helper/asyncHandler");

/**
 * @swagger
 * '/v1/api/user/home/{homeId}':
 *  get:
 *     tags:
 *     - User controller
 *     summary: Get all User in Home
 *     parameters:
 *       - in: path
 *         name: homeId
 *         required: true
 *         description: Home ID
 *         schema:
 *           type: integer
 *     responses:
 *      200:
 *        description: Get User Successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: integer
 *                  example: 200
 *                users:
 *                  type: array
 *                  description: List of users in home
 *                  items:
 *                    type: object
 *                    properties:
 *                      user_id:
 *                        type: integer
 *                        example: 4
 *                      home_id:
 *                        type: integer
 *                        example: 1
 *      400:
 *        description: Bad Request (Invalid email or password)
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server error
 */
router.get("/home/:homeId", asyncHandler(UserController.getUserByHomeId));

module.exports = router;
