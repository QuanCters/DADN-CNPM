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

module.exports = {
  createMeasurement,
  getMeasurementByDevice,
};
