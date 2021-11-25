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

Comment.belongsTo(User, {
  foreignKey: 'id'
});

User.hasMany(Comment, {
  foreignKey: 'id',
  onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
  foreignKey: 'id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
  foreignKey: 'id'
});

module.exports = {
  User,
  Comment,
  Post
};