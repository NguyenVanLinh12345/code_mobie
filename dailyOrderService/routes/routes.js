
const router = require('express').Router();
const { hello_world } = require('../controllers/demo');

const { deleteOrder, getOrderById, createOrder, getAllOrders, updateOrderState } = require('../controllers/OrderController')

router
    .get('/demo', hello_world)
    // Expenses
    .post('/add-order', createOrder)
    .get('/get-order', getOrderById)
    .get('/get-all-order', getAllOrders)
    .get('/delete-order', deleteOrder)
    router.put('/orders/state', updateOrderState);
    
module.exports = router