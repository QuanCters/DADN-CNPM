"use strict";

class CronJobManager {
  constructor() {
    this.jobs = new Map();
  }

  addJob(name, job) {
    this.jobs.set(name, job);
  }

  removeJob(name) {
    const job = this.jobs.get(name);
    if (job) {
      job.stop();
      this.jobs.delete(name);
    }
  }

  getJobsByDeviceId(device_id) {
    return Array.from(this.jobs.entries())
      .filter(([name]) => name.startsWith(`${device_id}.`))
      .map(([name, job]) => ({ name, job }));
  }
}

module.exports = new CronJobManager();