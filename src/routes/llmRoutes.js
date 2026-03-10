const express = require('express');
const router = express.Router();
const { summarizeText } = require('../controllers/llmController');
const { protect } = require('../middleware/authMiddleware');
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({ windowMs: 60000, max: 5 });

router.post('/summarize', protect, limiter, summarizeText);

module.exports = router;