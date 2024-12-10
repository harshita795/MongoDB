const { initializeDatabase } = require("./db/db.connect.js");
const fs = require("fs");
const User = require("./models/user.models.js");
initializeDatabase();

const jsonData = fs.readFileSync("user.json", "utf-8");
const usersData = JSON.parse(jsonData);

function seedData() {
  try {
    for (const userData of usersData) {
      const newUser = new User({
        fullName: userData.fullName,
        username: userData.username,
        bio: userData.bio,
        profilePicUrl: userData.profilePicUrl,
        followingCount: userData.followingCount,
        follwerCount: userData.follwerCount,
        companyName: userData.companyName,
        location: userData.companyName,
        portfolioUrl: userData.portfolioUrl,
      });

      newUser.save();
    }
  } catch (error) {
    console.log("Error in sedding the data", error);
  }
}
seedData();
