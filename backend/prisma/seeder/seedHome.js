const Home = require('../data/Home.json');

const seedHome = async (prisma) => {
  await prisma.home.createMany({ data: Home });
};

module.exports = seedHome;
