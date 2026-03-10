const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./src/app');

// 1. Load Environment Variables FIRST
dotenv.config();

const PORT = process.env.PORT || 5000;
const dbURI = process.env.MONGO_URI;

// 2. Log it to debug (Delete this after it works)
console.log("Connecting to:", dbURI); 

// 3. Connect to MongoDB
mongoose.connect(dbURI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.log("❌ DB Error:", err.message);
  });