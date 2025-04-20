const seedUser = require('./seedUser');
const seedHome = require('./seedHome');
const seedUserHaveHome = require('./seedUserHaveHome');
const seedDevice = require('./seedDevice');

module.exports = [
  seedUser,
  seedHome,
  seedUserHaveHome,
  seedDevice,
];