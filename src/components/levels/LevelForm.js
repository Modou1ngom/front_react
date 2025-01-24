import React, { useState } from 'react';

function LevelForm() {
  const [level, setLevel] = useState({
    description_niveau: 'LICENCE',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLevel({ ...level, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/levels', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(level),
    })
      .then((response) => response.json())
      .then(() => alert('Niveau ajouté avec succès!'))
      .catch((error) => console.error('Erreur:', error));
  };

  return (
    <div>
      <h1>Ajouter un Niveau Académique</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <select name="description_niveau" value={level.description_niveau} onChange={handleChange}>
            <option value="LICENCE">LICENCE</option>
            <option value="MASTER">MASTER</option>
            <option value="DOCTORAT">DOCTORAT</option>
          </select>
        </label>
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default LevelForm;
