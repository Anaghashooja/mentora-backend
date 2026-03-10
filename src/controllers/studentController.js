const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.createStudent = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const student = await User.create({
    name, email, password: hashedPassword, role: 'STUDENT', parentId: req.user._id
  });
  res.status(201).json(student);
};

exports.getStudents = async (req, res) => {
  const students = await User.find({ parentId: req.user._id });
  res.json(students);
};