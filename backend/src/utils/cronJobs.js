const cron = require("node-cron");
const { getSchedules } = require("../dbs/repositories/schedule.repo");
const { controlDevice } = require("../utils/ConnectDevice");
const startScheduler = () => {
    cron.schedule("0 * * * * *", async () => { 
    console.log("Checking scheduled tasks...");
    const schedules = await getSchedules();

    const now = new Date();
    const nowVN = new Date(now.getTime() + 7 * 60 * 60 * 1000);
    for (const schedule of schedules) {
      const actionTime = new Date(schedule.action_time);
      if (Math.abs(actionTime - nowVN) < 10000) {  
        const value = schedule.action === "on" ? 1 : 0;
        console.log(`Executing schedule for device ${schedule.device.id} at ${value}`);
        await controlDevice(schedule.device.feed, value);
      }
    }
  });

  console.log("Scheduler started...");
};

module.exports = {
  startScheduler,
};
