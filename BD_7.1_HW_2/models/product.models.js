const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productImage: String,
  productName: String,
  rating: Number,
  totalRatings: Number,
  totalReviews: Number,
  ActualPrice: Number,
  DiscountedPrice: Number,
  offPercentage: Number,
  availableOffers: String,
  warrantyInfo: String,
  variant: [
    {
      type: String,
    },
  ],
  wifiConnectivity: Boolean,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
