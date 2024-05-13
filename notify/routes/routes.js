const express = require('express');
const router = express.Router();
const { addNotify, getAllNotifies, getNotifiesByResId, getNotifiesByCusId } = require('../controllers/NotifyController');

// Thêm thông báo mới
router.post('/notify', addNotify)
    // Lấy tất cả thông báo
    .get('/notifies', getAllNotifies)
    // Lấy thông báo theo resId
    .get('/notifies/resId/:resId', getNotifiesByResId)
    // Lấy thông báo theo cusId
    .get('/notifies/cusId/:cusId', getNotifiesByCusId);

module.exports = router;

/*
Data thông báo cho nhà hàng
{
    "title": "Có đơn hàng mới",
    "content": "Một đơn hàng mới vừa được khởi tạo",
    "resId": 6666
}

Data thông báo cho khách hàng
{
    "title": "Nhận xu mỗi ngày",
    "content": "Mách bạn nhận xu mỗi ngày, hãy vào kho xu để nhận xu mới mỗi ngày nhé",
    "cusId": 8888 
}
*/
