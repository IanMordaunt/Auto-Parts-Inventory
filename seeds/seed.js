const sequelize = require('../config/connection');
const { User, Parts, Reviews, Stores } = require('../models');

const userData = require('./userData.json');
const partsData = require('./partsData.json');
//const reviewsData = require('./reviewData.json');
const storeData = require('./storeData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const parts = await Parts.bulkCreate(partsData, {
    individualHooks: true,
    returning: true,
  });
  // const reviews = await Reviews.bulkCreate(reviewsData, {
  //   individualHooks: true,
  //   returning: true,
  // });
  const stores = await Stores.bulkCreate(storeData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
