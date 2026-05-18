const recipeService = require("../services/recipeService");

// Get all recipes
const getRecipes = async (req, res, next) => {
    try {
        const category = req.query.category;
        const recipes = await recipeService.getAllRecipes(category);

        res.status(200).json({
            success: true,
            count: recipes.length,
            data: recipes
        });
    } catch (error) {
        next(error);
    }
};

// Create recipe
const createRecipe = async (req, res, next) => {
    try {
        const recipe = await recipeService.createRecipe(req.body);

        res.status(201).json({
            success: true,
            data: recipe
        });
    } catch (error) {
        next(error);
    }
};

// Update recipe
const updateRecipe = async (req, res, next) => {
    try {
        const recipe = await recipeService.updateRecipe(
            req.params.id,
            req.body
        );

        res.status(200).json({
            success: true,
            data: recipe
        });
    } catch (error) {
        next(error);
    }
};

// Delete recipe
const deleteRecipe = async (req, res, next) => {
    try {
        await recipeService.deleteRecipe(req.params.id);

        res.status(200).json({
            success: true,
            message: "Recipe deleted successfully"
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getRecipes,
    createRecipe,
    updateRecipe,
    deleteRecipe
};
