const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const accessToken = jwt.sign(user.toJSON(), 'your-secret-key');
  res.json({ accessToken });
});

module.exports = router;
