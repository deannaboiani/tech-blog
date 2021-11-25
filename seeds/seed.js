const sequelize = require('../config/connection');
const {Post, User, Comment} = require('../models')
const userData = require('./user-seeds.json');
const postData = require('./post-seeds.json');
const commentData = require('./comment-seeds.json')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    const user = await User.bulkCreate(userData);
    console.log('\n----- USERS SEEDED -----\n');
    const post = await Post.bulkCreate(postData);
    console.log('\n----- POSTS SEEDED -----\n');
    const comment = await Comment.bulkCreate(commentData);
    console.log('\n----- COMMENTS SEEDED -----\n');


  
    process.exit(0);
  };
  
  seedAll();