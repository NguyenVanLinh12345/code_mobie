const mongoose = require('mongoose');

const NotifySchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  resId: { type: Number, required: false },
  cusId: { type: Number, required: false }
});

const Notify = mongoose.model('Notify', NotifySchema);

module.exports = Notify;
