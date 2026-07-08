require('dotenv').config();

const mongoose = require('mongoose');
const Book = require('./models/book');

const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;

mongoose.connect(process.env.MONGODB_URI);

app.get('/', (req, res) => {
  res.send('Backend Server Running!');
});

app.get('/books', async (req, res) => {
  const books = await Book.find({});
  res.json(books);
});

app.post('/books', async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});