const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  recipeImage: String,
  recipeName: String,
  tagline: String,
  servings: Number,
  preppingTime: String,
  CookingTime: String,
  Ingredients: [
    {
      type: String,
    },
  ],
  Directions: String,
  notes: String,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
