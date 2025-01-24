import React, { useEffect, useState } from 'react';
import api from '../../services/api';

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Appeler l'API pour obtenir les cours
    api.get('/courses')
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des cours :', error);
      });
  }, []);

  return (
    <div>
      <h1>Liste des Cours</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.name} ({course.type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
