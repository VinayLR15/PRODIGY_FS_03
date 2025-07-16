const express = require('express');
const router = express.Router();
const Message = require('../models/message');

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: 'Message received' });
  } catch (err) {
    res.status(400).json({ message: 'Error sending message' });
  }
});

module.exports = router;
