
const router = require('express').Router();
const { hello_world } = require('../controllers/demo');

const { addCategory,getAllCategories, updateCategory, deleteCategory, addDishToCategory, removeDishFromCategory, getDishesByRestaurantId, getDishesByCategoryId  } = require('../controllers/ProductController')

router
    .get('/demo', hello_world)
    // Categories
    .get('/categories', getAllCategories)
    .post('/categories', addCategory)
    .put('/categories/:id', updateCategory)
    .delete('/categories/:id', deleteCategory)
    // Dishes
    // .get('/categories/:categoryId', getDishesByCategoryId)
    .get('/categories', getDishesByCategoryId)
    .get('/restaurants/dishes', getDishesByRestaurantId)
    .post('/categories/:categoryId/dishes', addDishToCategory)
    .delete('/categories/:categoryId/dishes/:dishId', removeDishFromCategory);


module.exports = router