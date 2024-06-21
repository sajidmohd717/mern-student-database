import React, { useState } from 'react';
import StudentForm from './components/StudentForm.jsx';
import StudentList from './components/StudentList.jsx';

const App = () => {
  const [students, setStudents] = useState([]);

  const handleStudentAdded = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div>
      <h1>Student Management System</h1>
      <StudentForm onStudentAdded={handleStudentAdded} />
      <StudentList students={students} setStudents={setStudents} />
    </div>
  );
};

export default App;
