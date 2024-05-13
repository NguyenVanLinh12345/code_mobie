const Review = require('../models/reviewModel');

// Thêm review mới
exports.addReview = async (req, res) => {
  try {
    const reviewData = req.body;
    const newReview = new Review(reviewData);
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Lấy tất cả các review của một nhà hàng dựa trên resId
exports.getReviewsByRestaurantId = async (req, res) => {
  try {
    const { resId } = req.query;
    const reviews = await Review.find({ resId: parseInt(resId) });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Thêm feedback vào một review
exports.addFeedbackToReview = async (req, res) => {
  try {
    const { reviewId } = req.query;
    const { feedback } = req.body;
    const review = await Review.findById(reviewId);
    if (!review) return res.status(404).json({ message: 'Review not found' });
    review.feedback = feedback;
    await review.save();
    res.json(review);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};