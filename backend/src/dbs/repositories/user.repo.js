const prisma = require("../init.prisma");

const insertUser = async (user) => {
  const result = await prisma.user
    .create({
      data: user,
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
  return result;
};

const getAllUsers = async () => {
  const result = await prisma.user.findMany().catch((error) => {
    console.error(error);
    throw error;
  });
  return result;
};

const getUserByEmail = async (email) => {
  const result = await prisma.user
    .findUnique({
      where: {
        email: email,
      },
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
  return result;
};

const removeTokenById = async (id) => {
  const result = await prisma.user
    .update({
      where: {
        id: parseInt(id),
      },
      data: {
        access_token: "",
      },
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
  return result;
};

const setTokenById = async (access_token, id) => {
  const result = await prisma.user
    .update({
      where: {
        id: id,
      },
      data: {
        access_token: access_token,
      },
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
  return result;
};

const updatePasswordById = async (new_password, salt, id) => {
  const result = await prisma.user
    .update({
      where: {
        id: id,
      },
      data: {
        password_hash: new_password,
        salt: salt,
      },
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
  return result;
};

module.exports = {
  insertUser,
  getUserByEmail,
  removeTokenById,
  setTokenById,
  updatePasswordById,
  getAllUsers,
};
