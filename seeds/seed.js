const sequelize = require('../config/connection');
const { User, Parts, Reviews, Stores } = require('../models');

const userData = require('./userData.json');
const partsData = require('./partsData.json');
const reviewsData = require('./reviewData.json');
const storesData = require('./storesData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const users = await Parts.bulkCreate(partsData, {
    individualHooks: true,
    returning: true,
  });
  const users = await Reviews.bulkCreate(reviewsData, {
    individualHooks: true,
    returning: true,
  });
  const users = await Stores.bulkCreate(storesData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
