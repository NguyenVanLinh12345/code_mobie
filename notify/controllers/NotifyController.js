// const Notify = require('../models/NotifyModel');
const Notify = require('../models/NotifyModel');

// Thêm thông báo mới
exports.addNotify = async (req, res) => {
  try {
      const notifyData = req.body;
      const newNotify = new Notify(notifyData);
      await newNotify.save();
      res.status(201).json(newNotify);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
};

// Lấy tất cả thông báo
exports.getAllNotifies = async (req, res) => {
  try {
      const notifies = await Notify.find();
      res.json(notifies);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Lấy thông báo theo resId
exports.getNotifiesByResId = async (req, res) => {
    try {
        const { resId } = req.params;
        const notifies = await Notify.find({ resId });
        res.json(notifies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy thông báo theo cusId
exports.getNotifiesByCusId = async (req, res) => {
    try {
        const { cusId } = req.params;
        const notifies = await Notify.find({ cusId });
        res.json(notifies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
