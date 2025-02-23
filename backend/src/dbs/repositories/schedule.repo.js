const prisma = require("../init.prisma");

const createSchedule = async (schedule) => {
  const result = await prisma.schedule
    .create({
      data: {
        schedule,
      },
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });

  return result;
};

const getScheduleByDevice = async (device_id) => {
  const result = await prisma.schedule
    .findMany({
      where: {
        device_id: device_id,
      },
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });

  return result;
};

const updateDeviceSchedule = async (schedule) => {
  const result = await prisma.schedule
    .update({
      where: {
        device_id: schedule.device_id,
      },
      data: {
        action: schedule.action,
        time_action: schedule.time_action,
      },
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });

  return result;
};

const deleteScheduleByDevice = async (device_id, time_action) => {
  const result = await prisma.schedule
    .delete({
      where: {
        device_id: device_id,
        time_action: time_action,
      },
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });

  return result;
};

device_d;
module.exports = {
  createSchedule,
  getScheduleByDevice,
  updateDeviceSchedule,
  deleteScheduleByDevice,
};
