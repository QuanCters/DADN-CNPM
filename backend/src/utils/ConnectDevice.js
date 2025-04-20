require("dotenv").config();
const axios = require("axios");
const { getRedisClient } = require("../database/init.redis");
const { sendFCMMessage } = require("./FCM");
const { updateDeviceStatus } = require("../modules/device/device.service");
const { getUserByHomeId } = require("../repositories/home.repo");
const { createNotification } = require("../repositories/notification.repo");
const AIO_USERNAME = process.env.AIO_USERNAME;
const AIO_KEY = process.env.AIO_KEY;
const AIO_BASE_URL = process.env.AIO_BASE_URL;
const HEADERS = { "X-AIO-Key": AIO_KEY };

const roomName = {
  bedroom: "Bed Room",
  garden: "Garden",
  kitchen: "Kitchen",
  livingroom: "Living Room",
};

const deviceName = {
  light: "Light",
  fan: "Fan",
};

const controlDevice = async (deviceKey, value) => {
  const response = await axios.post(
    `${AIO_BASE_URL}/${AIO_USERNAME}/feeds/${deviceKey}/data`,
    { value },
    { headers: HEADERS }
  );
  return response.data;
};
const getDeviceStatus = async (deviceKey) => {
  const response = await axios
    .get(`${AIO_BASE_URL}/${AIO_USERNAME}/feeds/${deviceKey}`, {
      headers: HEADERS,
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });

  return response.data.last_value;
};

const sendMessage = async (deviceResponse, homeResponse, device_id, value) => {
  const username = homeResponse.home_name;
  const feed = deviceResponse.metadata.feed;
  const aioKey = homeResponse.aio_key;
  const message = `${roomName[deviceResponse.metadata.room_name]} ${
    deviceName[deviceResponse.metadata.type]
  } Has ${value === 1 ? "Turn On" : "Turn Off"}`;
  const userList = await getUserByHomeId(homeResponse.id);
  const responseAda = await fetch(
    `https://io.adafruit.com/api/v2/${username}/feeds/${feed}/data?x-aio-key=${aioKey}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: value,
      }),
    }
  );

  if (!responseAda.ok) {
    throw new BadRequestError("Error update status to Adafruit");
  }

  await updateDeviceStatus({
    device_id,
    status: `${value === 1 ? "on" : "off"}`,
  });

  await createNotification({ content: message, device_id: device_id });

  for (const user of userList) {
    const redisClient = await getRedisClient();
    const foundToken = await redisClient.get(`user:${user.user_id}:fcm_token`);
    if (!foundToken) {
      continue;
    }

    const payload = {
      notification: {
        title: "Thông báo mới",
        body: message,
      },
    };

    await sendFCMMessage(foundToken, payload);
  }

  return await responseAda.json();
};

module.exports = { controlDevice, getDeviceStatus, sendMessage };
