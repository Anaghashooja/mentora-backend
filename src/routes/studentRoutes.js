const express = require('express');
const router = express.Router();
const { createStudent, getStudents } = require('../controllers/studentController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.post('/', protect, authorize('PARENT'), createStudent);
router.get('/', protect, authorize('PARENT'), getStudents);

module.exports = router;