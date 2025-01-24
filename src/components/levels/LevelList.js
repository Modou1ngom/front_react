import React, { useEffect, useState } from 'react';

function LevelList() {
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    fetch('/api/levels')
      .then((response) => response.json())
      .then((data) => setLevels(data))
      .catch((error) => console.error('Erreur:', error));
  }, []);

  return (
    <div>
      <h1>Liste des Niveaux Académiques</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {levels.map((level) => (
            <tr key={level.niveauxacademique_id}>
              <td>{level.niveauxacademique_id}</td>
              <td>{level.description_niveau}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LevelList;
