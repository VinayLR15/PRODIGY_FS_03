const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  name: String,
  rating: Number,
  comment: String,
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
