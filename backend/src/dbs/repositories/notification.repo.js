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

const getAllNotifications = async (page = 1, limit = 5) => {
  return await prisma.notification
    .findMany({
      orderBy: { id: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    })
    .catch((error) => {
      console.error("Error fetching notifications:", error);
      throw error;
    });
};

module.exports = {
  createNotification,
  getAllNotifications,
};
