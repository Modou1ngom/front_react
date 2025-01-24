import React, { useEffect, useState } from 'react';

function PlanningList() {
  const [plannings, setPlannings] = useState([]);

  useEffect(() => {
    fetch('/api/plannings')
      .then((response) => response.json())
      .then((data) => setPlannings(data))
      .catch((error) => console.error('Erreur:', error));
  }, []);

  return (
    <div>
      <h1>Liste des Plannings</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Durée</th>
            <th>Format</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {plannings.map((planning) => (
            <tr key={planning.planning_id}>
              <td>{planning.planning_id}</td>
              <td>{planning.day}</td>
              <td>{planning.duration} heures</td>
              <td>{planning.formatContent}</td>
              <td>{planning.typeOfContent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlanningList;
