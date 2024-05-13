const mongoose = require("mongoose");

const DishSchema = new mongoose.Schema({
  resId: { type: Number, required: true },
  name: { type: String, required: true },
  short_description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }
});

const CategorySchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  dishes: [DishSchema]
});

const Category = mongoose.model("Category", CategorySchema);
const Dish = mongoose.model("Dish", DishSchema);

module.exports = { Category, Dish };
