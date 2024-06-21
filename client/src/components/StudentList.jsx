import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = ({ students, setStudents }) => {
  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get('http://localhost:5000/students');
      setStudents(response.data);
    };
    fetchStudents();
  }, [setStudents]);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.name} - {student.age} - {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
