const Recipe = require("../models/Recipe");

// Get all recipes
const getAllRecipes = async (category) => {

    let filter = {};

    if (category) {
        filter.category = category;
    }

    return await Recipe.find(filter);
};

// Create recipe
const createRecipe = async (recipeData) => {

    if (recipeData.cookingTime <= 0) {
        throw new Error(
            "Cooking time must be positive"
        );
    }

    return await Recipe.create(recipeData);
};

// Update recipe
const updateRecipe = async (id, data) => {

    const recipe = await Recipe.findByIdAndUpdate(
        id,
        data,
        { new: true, runValidators: true }
    );

    if (!recipe) {
        throw new Error("Recipe not found");
    }

    return recipe;
};

// Delete recipe
const deleteRecipe = async (id) => {

    const recipe =
        await Recipe.findByIdAndDelete(id);

    if (!recipe) {
        throw new Error("Recipe not found");
    }

    return recipe;
};

module.exports = {
    getAllRecipes,
    createRecipe,
    updateRecipe,
    deleteRecipe
};
