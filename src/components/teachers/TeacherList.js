import React, { useEffect, useState } from 'react';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch('/api/teachers')
      .then((response) => response.json())
      .then((data) => setTeachers(data))
      .catch((error) => console.error('Erreur:', error));
  }, []);

  return (
    <div>
      <h1>Liste des Enseignants</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.enseignant_id}>
              <td>{teacher.enseignant_id}</td>
              <td>{teacher.nom}</td>
              <td>{teacher.prenom}</td>
              <td>{teacher.email}</td>
              <td>{teacher.telephone}</td>
              <td>{teacher.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherList;
