const mongoose = require("mongoose");

// Tạo Schema cho mỗi item trong đơn hàng
const ItemSchema = new mongoose.Schema({
  resId: { type: Number, required: false },
  quantity: { type: Number, required: false },
  image: { type: String, required: false },
  name: { type: String, required: false },
  price: { type: Number, required: false },
  description: { type: String, required: false }
});

// Tạo Schema cho đơn hàng
const OrderSchema = new mongoose.Schema({
  /*
  state: trạng thái
  0: Chưa gửi đơn
  1: đang xử lý
  2: đã xác nhận
  3: đã giao hàng
  4: đã nhận được hàng
  5: đã hủy
  */
 state: { type: Number, required: false },
 
  // timeState: 0: không đặt, 1, hằng ngày, 2: thứ 2 hàng tuần, 3: thứ 3 hàng tuần,... 8: chủ nhật hàng tuần
  timeState: {type: Number, require: false},

  userId: { type: Number, required: false },
  userName: { type: String, required: false },
  
  // id nhà hàng
  resId: { type: Number, required: false },
  // Tên nhà hàng
  resName: { type: String, required: false },

  address: { type: String, required: false },
  phoneNumber: { type: String, required: false },
  items: [ItemSchema], // Mảng chứa các item
  orderTime: { type: Date, required: false }
},
  { timestamps: true }
);

module.exports = mongoose.model("DailyOrder", OrderSchema);
