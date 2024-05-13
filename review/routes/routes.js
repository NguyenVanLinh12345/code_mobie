
const router = require('express').Router();
const { hello_world } = require('../controllers/demo');

const { addReview, getReviewsByRestaurantId, addFeedbackToReview } = require('../controllers/ReviewController')

router
    // Thêm review mới
    .post('/reviews', addReview)
    // Lấy tất cả các review của một nhà hàng dựa trên resId
    .get('/reviews', getReviewsByRestaurantId)
    // Thêm feedback vào một review
    .put('/reviews/feedback', addFeedbackToReview);

module.exports = router