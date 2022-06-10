const comments = require("./data/comments.json");
const fastPosts = require("./data/fastPosts.json");
const notifications = require("./data/notifications.json");
const posts = require("./data/posts.json");
const users = require("./data/users.json");
const categories = require("./data/categories.json");

module.exports = {
  comments,
  fastPosts: fastPosts,
  notifications: notifications,
  posts: posts,
  users: users,
  categories: categories,
};
