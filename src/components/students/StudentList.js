import React, { useState, useEffect } from 'react';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/api/students')
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Liste des Étudiants</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Téléphone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.etudiant_id}>
              <td>{student.nom}</td>
              <td>{student.prenom}</td>
              <td>{student.telephone}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
