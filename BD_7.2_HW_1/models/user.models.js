const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: String,
    username: String,
    bio: String,
    profilePicUrl: String,
    followingCount: Number,
    followerCount: Number,
    companyName: String,
    location: String,
    portfolioUrl: String,
  },
  { timestamps: true }
);

const User = new mongoose.model("User", userSchema);

module.exports = User;
