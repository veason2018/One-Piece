const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: String,
  bounty: Number,
  abilities: [String],
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
