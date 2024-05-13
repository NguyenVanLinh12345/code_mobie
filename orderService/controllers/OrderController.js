const Order = require('../models/orderModel');

// Lấy tất cả đơn hàng
exports.getAllOrders = async (req, res) => {
  try {
    const userId = req.query.userId;
    const resId = req.query.resId;
    let orders = [];
    if (userId) {
      orders = await Order.find({ userId: userId });
    } else if (resId) {
      orders = await Order.find({ resId: resId });
    }
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Tạo một đơn hàng mới
exports.createOrder = async (req, res) => {
  const { userId, resId, resName, address, userName, phoneNumber, items, orderTime, type } = req.body;

  /*
  type: 
    + 0: Giao hàng ngay
    + 1: Giao hàng vào thời gian orderTime
  */
  // Trạng thái 1: đang xử lý, đây là đơn hàng bình thường.
  let stateCurrent = 1;
  if (type === 1) {
    // type = 1 là đặt hàng trước, vậy nên trạng thái là 0: chưa gửi đơn
    stateCurrent = 0;
  }

  const order = new Order({
    state: stateCurrent,
    userId,
    resId,
    resName,
    address,
    userName,
    phoneNumber,
    items,
    orderTime
  });

  try {
    const newOrder = await order.save();
    // console.log(newOrder._id.toString());
    const newOrderId = newOrder._id.toString();

    if (type === 1) {
      // Thực hiện phép trừ 7 giờ trực tiếp trên đối tượng Date
      const currentTime = Date.now();
      const orderTime1 = new Date(orderTime);

      // Vì phía frontend + 7 để lấy giao diện, nên backend phải trừ đi 7
      orderTime1.setHours(orderTime1.getHours() - 7);
      // Lấy thời gian của đối tượng Date đã được thay đổi
      const orderTimeInMillis = orderTime1.getTime();

      if (orderTimeInMillis <= currentTime) {
        // Thời gian đặt hàng phải lớn hơn thời gian hiện tại
        return res.status(400).json({ message: 'Thời gian đặt hàng không hợp lệ' });
      }

      const timeDifference = (orderTimeInMillis - currentTime);

      // hàm này sẽ thực hiện gọi đến order sau một khoảng thời gian đã định sẵn
      setTimeout(async () => {
        const order = await Order.findByIdAndUpdate(newOrderId, { state: 1 }, { new: true });
        // console.log(order);
      }, timeDifference);
    }

    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Lấy một đơn hàng theo ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Không tìm thấy đơn hàng' });
    }
    res.json(order);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Xóa một đơn hàng
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Không tìm thấy đơn hàng' });
    }
    res.json({ message: 'Đơn hàng đã được xóa' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Thay đổi trạng thái của đơn hàng
exports.updateOrderState = async (req, res) => {
  const orderId = req.query.orderId; // Lấy orderId từ yêu cầu URL
  const newState = req.body.state; // Lấy state mới từ body của yêu cầu

  try {
    const order = await Order.findByIdAndUpdate(orderId, { state: newState }, { new: true });
    if (!order) {
      return res.status(404).json({ message: 'Không tìm thấy đơn hàng' });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
