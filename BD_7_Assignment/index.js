const express = require("express");
const app = express();
const { initializeDatabase } = require("./db/db.connect.js");
const Recipe = require("./models/recipe.models.js");
initializeDatabase();

app.use(express.json());

async function createRecipe(newRecipe) {
  try {
    const createdRecipe = new Recipe(newRecipe);
    const savedRecipe = await createdRecipe.save();
    return savedRecipe;
  } catch (error) {
    console.error(`Error: `, error);
  }
}

app.post("/recipes", async (req, res) => {
  try {
    const response = await createRecipe(req.body);
    return res
      .status(200)
      .json({ message: "Recipe created successfully", recipe: response });
  } catch (error) {
    return res.status(500).json({ error: "Error in creating recipe." });
  }
});

async function readAllRecipes() {
  try {
    const allRecipes = await Recipe.find();
    return allRecipes;
  } catch (error) {
    console.error(`Error: `, error);
  }
}

app.get("/recipes", async (req, res) => {
  try {
    const response = await readAllRecipes();
    return res.status(200).json({ message: "All Recipes: ", response });
  } catch (error) {
    return res.status(500).json({ error: "Error in fetching recipes." });
  }
});

app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});
