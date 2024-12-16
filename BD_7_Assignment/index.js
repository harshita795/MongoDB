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

async function getRecipeByTitle(recipeTitle) {
  try {
    const recipeByTitle = await Recipe.findOne({ title: recipeTitle });
    return recipeByTitle;
  } catch (error) {
    console.error(`Error: `, error);
  }
}

app.get("/recipes/recipeTitle/:recipeTitle", async (req, res) => {
  try {
    const recipeTitle = req.params.recipeTitle;
    const response = await getRecipeByTitle(recipeTitle);
    return res
      .status(200)
      .json({ message: "Recipe by title: ", recipe: response });
  } catch (error) {
    return res.status(500).json({ error: "Error in fetching recipe." });
  }
});

async function getRecipeByAuthor(recipeAuthor) {
  try {
    const recipeByAuthor = await Recipe.findOne({ author: recipeAuthor });
    return recipeByAuthor;
  } catch (error) {
    console.error(`Error: `, error);
  }
}

app.get("/recipes/recipeAuthor/:recipeAuthor", async (req, res) => {
  try {
    const recipeAuthor = req.params.recipeAuthor;
    const response = await getRecipeByAuthor(recipeAuthor);
    return res
      .status(200)
      .json({ message: "Recipe by Author: ", recipe: response });
  } catch (error) {
    return res.status(500).json({ error: "Error in fetching recipe." });
  }
});

async function getRecipeByDifficultyLevel(recipeDifficulty) {
  try {
    const recipeByDifficultyLevel = await Recipe.findOne({
      difficulty: recipeDifficulty,
    });
    return recipeByDifficultyLevel;
  } catch (error) {
    console.error(`Error: `, error);
  }
}

app.get("/recipes/recipeDifficulty/:recipeDifficulty", async (req, res) => {
  try {
    const recipeDifficulty = req.params.recipeDifficulty;
    const response = await getRecipeByDifficultyLevel(recipeDifficulty);
    return res
      .status(200)
      .json({ message: "Recipe by difficulty level: ", recipe: response });
  } catch (error) {
    return res.status(500).json({ error: "Error in fetching recipe." });
  }
});

app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});