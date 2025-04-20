const Device = require('../data/Device.json');

const seedDevice = async (prisma) => {
    await prisma.device.createMany({data: Device})
};

module.exports = seedDevice;