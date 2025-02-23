const prisma = require("../init.prisma");

const getDevicesBySerialNumber = async (serial_number) => {
  const result = await prisma.device
    .findMany({
      where: serial_number,
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });

  return result;
};

const getDeviceById = async (device_id) => {
  const result = await prisma.device
    .findUnique({
      where: {
        id: device_id,
      },
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });

  return result;
};

const updateDeviceStatus = async (id, status) => {
  const result = await prisma.device
    .update({
      where: {
        id: id,
      },
      data: {
        status: status,
      },
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });

  return result;
};

module.exports = {
  getDeviceById,
  getDevicesBySerialNumber,
  updateDeviceStatus,
};
