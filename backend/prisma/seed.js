const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const main = async () => {
  // Seed user data
  const User = require("./data/User.json");
  await prisma.users.createMany({
    data: User,
  });

  // Seed other data
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
