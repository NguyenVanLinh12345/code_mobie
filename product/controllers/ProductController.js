const { Category, Dish } = require('../models/productModel');

// Thêm danh mục mới
exports.addCategory = async (req, res) => {
  try {
    const categoryData = req.body;
    const newCategory = new Category(categoryData);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Sửa thông tin danh mục
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const categoryData = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(id, categoryData, { new: true });
    res.json(updatedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Xóa danh mục
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.findByIdAndDelete(id);
    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Thêm món ăn vào một danh mục
exports.addDishToCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const dishData = req.body;
    const category = await Category.findById(categoryId);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    category.dishes.push(dishData);
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Xóa món ăn từ một danh mục
exports.removeDishFromCategory = async (req, res) => {
  try {
    const { categoryId, dishId } = req.params;
    const category = await Category.findById(categoryId);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    category.dishes = category.dishes.filter(dish => dish._id.toString() !== dishId);
    await category.save();
    res.json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Lấy tất cả món ăn của một nhà hàng dựa trên resId
exports.getDishesByRestaurantId = async (req, res) => {
  try {
    const { resId } = req.query;
    // const { resId } = req.params;
    const categories = await Category.find({});
    let dishes = [];

    categories.forEach(category => {
      category.dishes.forEach(dish => {
        if (dish.resId === parseInt(resId)) {
          dishes.push(dish);
        }
      });
    });

    res.json(dishes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy tất cả món ăn từ một danh mục dựa trên categoryId
exports.getDishesByCategoryId = async (req, res) => {
  try {
    const { categoryId } = req.query;
    // const { categoryId } = req.params;
    const category = await Category.findById(categoryId);
    
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    
    res.json(category.dishes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy tất cả các danh mục
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};