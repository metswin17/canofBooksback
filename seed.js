require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./models/book');

mongoose.connect(process.env.MONGODB_URI);

async function seed() {
  await Book.create([
    {
      title: 'The Hobbit',
      description: 'A fantasy adventure about Bilbo Baggins.',
      status: 'Available'
    },
    {
      title: 'Kindred',
      description: 'A time-travel novel by Octavia Butler.',
      status: 'Recommended'
    },
    {
      title: 'The Alchemist',
      description: 'A story about following your personal legend.',
      status: 'Read'
    }
  ]);

  console.log('Books seeded!');
  mongoose.disconnect();
}

seed();