const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const appointmentRoutes = require('./routes/appointments');

const app = express();
const PORT = process.env.PORT || 5000;

// Use CORS to allow cross-origin requests from frontend (React)
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Routes for handling appointment bookings
app.use('/api/appointments', appointmentRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dental_appointments')
  .then(() => {
    console.log('MongoDB connected');
    // Start the server after successful MongoDB connection
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
