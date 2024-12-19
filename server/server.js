const path = require('path');
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('./middleware/cors'); // Correct import path
const jwt = require('jsonwebtoken');

const app = express();

// CORS middleware
app.use(cors);

// Handle preflight requests
app.options('*', cors);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// JSON parsing middleware
app.use(express.json());

// Authentication middleware (after JSON parsing)
app.use((req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
});

const router = require('./routes'); // Import routes from index.js

// Routes
app.use('/api/auth', router.auth);
app.use('/api/chats', router.chats);
app.use('/api/users', router.users);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

