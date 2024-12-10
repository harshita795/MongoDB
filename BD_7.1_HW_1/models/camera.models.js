const mongoose = require("mongoose");

const cameraSchema = new mongoose.Schema({
  cameraImage: String,
  isLike: Boolean,
  cameraName: String,
  rating: Number,
  totalRatings: Number,
  totalReviews: Number,
  cameraInfo: String,
  ActualPrice: Number,
  DiscountedPrice: Number,
  offPercentage: Number,
  isFreeDelivery: Boolean,
  isLowestPrice: Boolean,
  cameraLeftInStock: Number,
});

const Camera = mongoose.model("Camera", cameraSchema);

module.exports = Camera;
