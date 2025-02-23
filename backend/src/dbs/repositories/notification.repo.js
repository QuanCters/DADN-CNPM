const prisma = require("../init.prisma");

const createNotification = async (notification) => {
  const result = await prisma.notification
    .create({
      data: notification,
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
  return result;
};

const getAllNotifications = async () => {
  const result = await prisma.notification.findMany().catch((error) => {
    console.error(error);
    throw error;
  });
  return result;
};

module.exports = {
  createNotification,
  getAllNotifications,
};
