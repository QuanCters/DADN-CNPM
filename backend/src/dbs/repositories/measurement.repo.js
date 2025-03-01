const prisma = require("../init.prisma");

const getMeasurementById = async (id) => {
  const result = await prisma.measurement
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

const getMeasurementByDevice = async (device_id) => {
  const result = await prisma.measurement
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

const getTotalConsumption = async (device_id, start_date, end_date) => {
  const result = await prisma.measurement
    .aggregate({
      where: {
        device_id: device_id,
        timestamp: {
          gte: new Date(start_date),
          lte: new Date(end_date),
        },
      },
      _sum: {
        consumption: true,
      },
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });

  return result._sum.consumption || 0;
};

const getUsageTimeStatistics = async (device_id, start_date, end_date) => {
  const result = await prisma.measurement
    .findMany({
      where: {
        device_id: device_id,
        timestamp: {
          gte: new Date(start_date),
          lte: new Date(end_date),
        },
      },
      select: {
        timestamp: true,
        duration: {
          select: {
            seconds: {
              _raw: `EXTRACT(EPOCH FROM (time_out - time_in))`,
            },
          },
        }
      },
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });

  return result;
};

module.exports = {
  createMeasurement,
  getAllMeasurement,
  getMeasurementByDevice,
  getTotalConsumption,
  getUsageTimeStatistics,
};