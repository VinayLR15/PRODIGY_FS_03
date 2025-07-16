const express = require('express');
const router = express.Router();
const Review = require('../models/review');

// GET reviews for a specific product
router.get('/:productId', async (req, res) => {
  try {
    const reviews = await Review.find({ productId: req.params.productId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching reviews' });
  }
});

// POST a new review
router.post('/', async (req, res) => {
  try {
    const { productId, name, rating, comment } = req.body;
    const newReview = new Review({ productId, name, rating, comment });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ message: 'Error saving review' });
  }
});

module.exports = router;
