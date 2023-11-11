const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, default: 'user' }, // roles: user, admin
});

const User = mongoose.model('User', userSchema);

module.exports = User;
