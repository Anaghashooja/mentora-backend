const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const llmRoutes = require('./routes/llmRoutes');
// Import other routes similarly...

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/students', studentRoutes);
app.use('/llm', llmRoutes);

// Optional Lesson/Booking/Session routes would be linked here

module.exports = app;