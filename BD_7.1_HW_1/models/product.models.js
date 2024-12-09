const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productImageUrl: String,
  productName: String,
  productDescripion: String,
  productInfo: String,
  productColor: [
    {
      type: String,
    },
  ],
  productSize: [
    {
      type: Number,
    },
  ],
  productPrice: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
