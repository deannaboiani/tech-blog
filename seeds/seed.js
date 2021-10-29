const sequelize = require('../config/connection');
const seedUsers = require('../models/User');
const seedPosts = require('../models/post');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- CATEGORIES SEEDED -----\n');
    await seedPosts();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  
    process.exit(0);
  };
  
  seedAll();