const { initializeDatabase } = require("./db/db.connect.js");
const Post = require("./models/post.models.js");
const User = require("./models/user.models.js");
initializeDatabase();

const userData = {
  name: "John",
  email: "john@gmail.com",
};
const addUser = async () => {
  try {
    const newUser = new User(userData);
    await newUser.save();
  } catch (error) {
    console.error("Error:", error);
  }
};
// addUser();

const postData = {
  title: "Greeting",
  content: "Have a good day!",
  author: "675aaad31d37c30523cd8ddf",
};
const addPost = async () => {
  try {
    const newpost = new Post(postData);
    await newpost.save();
  } catch (error) {
    console.error("Error:", error);
  }
};

// addPost();

const getAllPosts = async () => {
  try {
    const allPosts = await Post.find().populate("author");
    console.log("All Posts:", allPosts);
  } catch (error) {
    console.error("Error:", error);
  }
};
getAllPosts();
