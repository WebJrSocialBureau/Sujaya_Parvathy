const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('MongoDB Connected successfully');
    }
  } catch (err) {
    console.error('MongoDB Connection Error:', err);
  }
};
connectDB();

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/blogs', require('./routes/blogs'));

// Health Check
app.get('/api/health', async (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
  res.json({
    status: 'ok',
    database: dbStatus,
    env: process.env.NODE_ENV,
    time: new Date().toISOString()
  });
});

// Basic Route
app.get('/', (req, res) => {
  res.send('Sujaya Parvathy API is running...');
});

// Error Handler Middleware
app.use((err, req, res, next) => {
  console.error('[Global Error Handler]:', {
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method
  });
  res.status(500).json({
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' || true ? err.message : 'Detailed error hidden in production'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
