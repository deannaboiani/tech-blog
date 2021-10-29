const User = require('./User');
const Post = require('./Post')

Post.belongsTo(User, {
    foreignKey: 'creator_username'
});

User.hasMany(Post, {
    foreignKey: 'creator_username',
    onDelete: 'CASCADE',
  });

module.exports = User;