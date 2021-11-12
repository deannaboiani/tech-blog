const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}


// post title, contents, post creator’s username, and date created
Post.init({
    post_title: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    contents: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    creator_username: {
        type:DataTypes.STRING,
        references: {
            model: 'User',
            key: 'username'
        }
    },
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Post',
  
});

module.exports = Post;