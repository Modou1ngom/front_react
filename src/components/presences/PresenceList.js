import React, { useEffect, useState } from 'react';

function PresenceList() {
  const [presences, setPresences] = useState([]);

  useEffect(() => {
    fetch('/api/presences')
      .then((response) => response.json())
      .then((data) => setPresences(data))
      .catch((error) => console.error('Erreur:', error));
  }, []);

  return (
    <div>
      <h1>Liste de Présence</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Présence</th>
            <th>Étudiant ID</th>
            <th>Cours ID</th>
          </tr>
        </thead>
        <tbody>
          {presences.map((presence) => (
            <tr key={presence.id}>
              <td>{presence.id}</td>
              <td>{presence.presenceDate}</td>
              <td>{presence.presence ? 'Présent' : 'Absent'}</td>
              <td>{presence.etudiant_id}</td>
              <td>{presence.cours_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PresenceList;
