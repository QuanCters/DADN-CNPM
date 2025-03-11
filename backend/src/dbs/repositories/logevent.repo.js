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
const getLogEventsInTimeRange = async (device_id, time_start, time_end) => {
  const result = await prisma.log_event
    .findMany({
      where: {
        device_id: device_id,
        timestamp: {
          gte: new Date(time_start),
          lte: new Date(time_end),
        },
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
  getLogEventsInTimeRange
};
