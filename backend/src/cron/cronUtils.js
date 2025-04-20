"use strict";

const cron = require("node-cron");
const { sendMessage } = require("../utils/ConnectDevice");

const daysOfWeek = {
  everyday: "*",
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7,
};

const createCronExpression = (action_day, action_time, runOnce = false) => {
  const date = new Date(action_time);
  if (runOnce) {
    return `${date.getMinutes()} ${date.getHours()} ${date.getDate()} ${date.getMonth() + 1} *`;
  }
  return `${date.getMinutes()} ${date.getHours()} * * ${daysOfWeek[action_day]}`;
};

const createJobName = (device_id, action_day, action_time) => {
  const date = new Date(action_time);
  return `${device_id}.${action_day}.${date.toISOString().slice(11, 19)}`;
};

const createCronJob = (deviceResponse, homeResponse, device_id, value, cronExpression, runOnce = false) => {
  return cron.schedule(
    cronExpression,
    () => {
      sendMessage(deviceResponse, homeResponse, device_id, value)
        .then(() => {
          console.log(`Send Message Successfully for job: ${device_id}`);
        })
        .catch((error) => console.error(`Error sending message for job ${device_id}:`, error));
    },
    { scheduled: true }
  );
};

module.exports = {
  createCronExpression,
  createJobName,
  createCronJob,
};