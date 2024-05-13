const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rate: { type: Number, required: true },
  date: { type: Date, required: true },
  review: { type: String, required: true },
  feedback: { type: String, required: false },
  resId: { type: Number, required: true }
});

module.exports = mongoose.model("Review", ReviewSchema);