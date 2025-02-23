const prisma = require("../init.prisma");

const createLogEvent = async (log) => {
  const result = await prisma.log_event
    .create({
      data: log,
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
  return result;
};

const getLogEventById = async (id) => {
  const result = await prisma.log_event
    .findUnique({
      where: {
        id: id,
      },
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
  return result;
};

const getLogEventsByDevice = async (device_id) => {
  const result = await prisma.log_event
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

module.exports = {
  createLogEvent,
  getLogEventById,
  getLogEventsByDevice,
};
