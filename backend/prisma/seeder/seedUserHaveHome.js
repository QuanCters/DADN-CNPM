const User_Have_Home = require("../data/User_Have_Home.json");

const seedUserHaveHome = async (prisma) => {
    await prisma.user_have_home.createMany({ data: User_Have_Home});
};

module.exports = seedUserHaveHome;



