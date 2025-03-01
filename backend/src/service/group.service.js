"use strict";

const { NotFoundError, ConflictRequestError } = require("../core/error.response");
const { getUserById, getUserByEmail } = require("../dbs/repositories/user.repo");
const { getAllDevicesByUser, updateDeviceOwner } = require("../dbs/repositories/device.repo");

class GroupService {
  /**
   * 1 - Kiểm tra xem super_email có tồn tại trong hệ thống không
   * 2 - Kiểm tra xem user_id có tồn tại trong hệ thống không
   * 3 - Lấy danh sách thiết bị của super_email
   * 4 - Cập nhật quyền điều khiển của user_id đối với các thiết bị
   * 5 - Trả về kết quả thành công
   */
  static shareControlPermission = async ({ user_id, super_email }) => {
    const superUser = await getUserByEmail(super_email);
    if (!superUser) throw new NotFoundError("Super user not found");

    const user = await getUserById(user_id);
    if (!user) throw new NotFoundError("User not found");

    const devices = await getAllDevicesByUser(super_email);
    if (!devices || devices.length === 0) {
      throw new NotFoundError("No devices found for this user");
    }

    const updatedDevices = await Promise.all(
      devices.map((device) => updateDeviceOwner(device.id, user_id))
    );

    return {
      message: "Shared control permission successfully",
      metadata: updatedDevices,
    };
  };

  /**
   * 1 - Kiểm tra xem user_id có tồn tại không
   * 2 - Lấy danh sách thiết bị mà user_id đang điều khiển
   * 3 - Xóa quyền điều khiển của user_id đối với các thiết bị
   * 4 - Trả về kết quả thành công
   */
  static removeControlPermission = async ({ user_id }) => {
    const user = await getUserById(user_id);
    if (!user) throw new NotFoundError("User not found");

    const devices = await getAllDevicesByUser(user.email);
    if (!devices || devices.length === 0) {
      throw new NotFoundError("No devices found for this user");
    }

    const updatedDevices = await Promise.all(
      devices.map((device) => updateDeviceOwner(device.id, null))
    );

    return {
      message: "Removed control permission successfully",
      metadata: updatedDevices,
    };
  };
}

module.exports = GroupService;
