const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const Character = require('../models/character');

router.get('/', async (req, res) => {
  const characters = await Character.find();
  res.json(characters);
});

router.get('/:id', async (req, res) => {
  const character = await Character.findById(req.params.id);
  res.json(character);
});

router.post('/', authenticateToken, async (req, res) => {
  const newCharacter = new Character(req.body);
  await newCharacter.save();
  res.json(newCharacter);
});

router.put('/:id', authenticateToken, async (req, res) => {
  const updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedCharacter);
});

router.delete('/:id', authenticateToken, async (req, res) => {
  await Character.findByIdAndDelete(req.params.id);
  res.json({ message: 'Character deleted successfully' });
});

module.exports = router;
