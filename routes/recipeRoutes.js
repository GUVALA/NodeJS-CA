const express = require("express");
const router = express.Router();

const recipeController = require("../controllers/recipeController");

// CRUD routes
router.get("/", recipeController.getRecipes);
router.post("/", recipeController.createRecipe);
router.put("/:id", recipeController.updateRecipe);
router.delete("/:id", recipeController.deleteRecipe);

module.exports = router;
