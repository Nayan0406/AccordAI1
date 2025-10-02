const mongoose = require('mongoose');
// require('dotenv').config(); // Not needed in Vercel

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
        socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
        bufferCommands: false, // Disable mongoose buffering
        bufferMaxEntries: 0, // Disable mongoose buffering
      });
      isConnected = true;
      console.log('MongoDB Connected');
    } else {
      console.log('📝 MongoDB URI not provided, running without database persistence');
    }
  } catch (error) {
    console.error('⚠️ Database connection error:', error.message);
    console.log('🔄 Continuing without database connection...');
    // Don't exit, just continue without database
  }
};

module.exports = connectDB;
