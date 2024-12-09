const mongoose = require("mongoose");

const twitterSchema = new mongoose.Schema({
  profilePic: String,
  fullName: String,
  username: String,
  bio: String,
  companyName: String,
  city: String,
  portfolioLink: String,
  handle: String,
  followersCount: Number,
  followingCount: Number,
  isOnline: Boolean,
});

const Twitter = mongoose.model("Twitter", twitterSchema);

module.exports = Twitter;
