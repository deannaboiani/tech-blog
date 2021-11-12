const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
  foreignKey: 'creator_username'
});

User.hasMany(Post, {
  foreignKey: 'creator_username',
  onDelete: 'CASCADE',
});
module.exports = {
  User,
  Comment,
  Post
};