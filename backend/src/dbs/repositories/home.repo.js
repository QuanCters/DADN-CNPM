"use strict";
const prisma = require("../init.prisma");

const getHomeByUserId = async (userId) => {
  const result = await prisma.user_in_home
    .findMany({
      where: {
        user_id: parseInt(userId),
      },
      include: {
        home: {
          select: {
            serial_number: true,
            home_name: true,
          },
        },
      },
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
  return result;
};

module.exports = { getHomeByUserId };
