const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/pathsala", { useNewUrlParser: true, useUnifiedTopology: true });

// Create a schema for students
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: String,
});

const Student = mongoose.model('Student', studentSchema);

// Routes
app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

app.post('/students', async (req, res) => {
  const newStudent = new Student(req.body);
  await newStudent.save();
  res.json(newStudent);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
