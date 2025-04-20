const User = require('../data/User.json');

const seedUser = async (prisma) => {
  await prisma.users.createMany({ data: User });
};

module.exports = seedUser;