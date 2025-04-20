"use strict";

const { getAllSchedule } = require("../repositories/schedule.repo");
const { getDeviceById } = require("../modules/device/device.service");
const { getHomeBySerialNumber } = require("../repositories/home.repo");
const { createCronExpression, createJobName, createCronJob } = require("./cronUtils");
const cronJobManager = require("./cronJobManager");

const initCronJobs = async () => {
  try {
    const schedules = await getAllSchedule();
    console.log("Initializing cron jobs with schedules:", schedules.length);

    for (const schedule of schedules) {
      try {
        const deviceResponse = await getDeviceById({ device_id: schedule.device_id });
        const homeResponse = await getHomeBySerialNumber(deviceResponse.metadata.serial_number);
        const cronExpression = createCronExpression(schedule.action_day, schedule.action_time);
        const job = createCronJob(
          deviceResponse,
          homeResponse,
          schedule.device_id,
          schedule.value,
          cronExpression
        );
        const name = createJobName(schedule.device_id, schedule.action_day, schedule.action_time);
        cronJobManager.addJob(name, job);
        console.log(`Initialized job: ${name}`);
      } catch (error) {
        console.error(`Error initializing job for device ${schedule.device_id}:`, error);
      }
    }

    console.log("All scheduled jobs:", Array.from(cronJobManager.jobs.keys()));
  } catch (error) {
    console.error("Error initializing cron jobs:", error);
  }
};

const addJob = async (action_day, action_time, device_id, value) => {
  try {
    const deviceResponse = await getDeviceById({ device_id });
    const homeResponse = await getHomeBySerialNumber(deviceResponse.metadata.serial_number);
    const cronExpression = createCronExpression(action_day, action_time);
    const job = createCronJob(deviceResponse, homeResponse, device_id, value, cronExpression);
    const name = createJobName(device_id, action_day, action_time);
    cronJobManager.addJob(name, job);
    console.log(`Added job: ${name}`);
  } catch (error) {
    console.error(`Error adding job for device ${device_id}:`, error);
  }
};

const updateJob = async (action_day, action_time, device_id, value) => {
  try {
    const name = createJobName(device_id, action_day, action_time);
    cronJobManager.removeJob(name);
    await addJob(action_day, action_time, device_id, value);
    console.log(`Updated job: ${name}`);
  } catch (error) {
    console.error(`Error updating job for device ${device_id}:`, error);
  }
};

module.exports = {
  initCronJobs,
  addJob,
  updateJob,
  removeJob: cronJobManager.removeJob.bind(cronJobManager),
  getJobByDeviceId: cronJobManager.getJobsByDeviceId.bind(cronJobManager),
};