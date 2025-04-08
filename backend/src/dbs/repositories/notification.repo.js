const prisma = require("../init.prisma");

const createNotification = async ({ device_id, content }) => {
  const result = await prisma.notification
    .create({
      data: {
        content: content,
      },
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
  const date = new Date();
  const dhn = await prisma.device_have_notification
    .create({
      data: {
        device_id: parseInt(device_id),
        notification_id: result.id,
        notification_time: date.toISOString(),
      },
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
  return result;
};

const getAllNotificationsByDeviceId = async ({
  page = 1,
  limit = 5,
  device_id,
}) => {
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
  getAllNotificationsByDeviceId,
};
