const express = require('express');
const router = express.Router();
const Product = require('../models/producttemp'); // ✅ FIXED: Correct import based on file name

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

module.exports = router;
