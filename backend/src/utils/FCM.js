const admin = require("firebase-admin");

const sendFCMMessage = async (token, payload) => {
  try {
    const response = await admin.messaging().send({
      token,
      ...payload,
    });
    return response;
  } catch (error) {
    console.error("FCM send error:", error);
    throw error;
  }
};

module.exports = { sendFCMMessage };
