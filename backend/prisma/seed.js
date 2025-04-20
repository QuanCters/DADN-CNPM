const { PrismaClient } = require('../src/generated/client');
const prisma = new PrismaClient();

const seeders = require('./seeder/index');

const main = async () => {
  // init data
  for (const seedFn of seeders) {
    await seedFn(prisma);
  }
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
