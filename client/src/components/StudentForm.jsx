import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = ({ onStudentAdded }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStudent = { name, age, grade };
    const response = await axios.post('http://localhost:5000/students', newStudent);
    onStudentAdded(response.data);
    setName('');
    setAge('');
    setGrade('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Age</label>
        <input value={age} onChange={(e) => setAge(e.target.value)} required />
      </div>
      <div>
        <label>Grade</label>
        <input value={grade} onChange={(e) => setGrade(e.target.value)} required />
      </div>
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
