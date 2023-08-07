const User = require('./User');
const Blog = require('./Blogs');
const Comment = require('./Comments');


Blog.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });
  
  Blog.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
  });
  
  Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });
  
  module.exports = {
    User,
    Comment,
    Blog
  };