const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const characterRoutes = require('./routes/characters');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://v0807:mongo1234@cluster0.h2hfq93.mongodb.net/onepiece', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/characters', characterRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
