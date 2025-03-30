require("dotenv").config();
const axios = require("axios");
const AIO_USERNAME = process.env.AIO_USERNAME;
const AIO_KEY = process.env.AIO_KEY;
const AIO_BASE_URL = process.env.AIO_BASE_URL;
const HEADERS = { "X-AIO-Key": AIO_KEY };

const controlDevice = async (deviceKey, value) => {
    const response = await axios.post(
        `${AIO_BASE_URL}/${AIO_USERNAME}/feeds/${deviceKey}/data`,
        { value },
        { headers: HEADERS }
    );
    return response.data;
};
const getDeviceStatus = async (deviceKey) => {
  const response = await axios.get(
    `${AIO_BASE_URL}/${AIO_USERNAME}/feeds/${deviceKey}`,
    { headers: HEADERS }
  )
  .catch((err) => {
    console.error(err);
    throw err;
  });

  return response.data.last_value;
};
module.exports = { controlDevice, getDeviceStatus };