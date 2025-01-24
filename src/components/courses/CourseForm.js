import React, { useState } from 'react';
import api from '../../services/api';

function CourseForm() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/courses', { name, type })
      .then((response) => {
        alert(`Cours ajouté : ${response.data.name}`);
        setName('');
        setType('');
      })
      .catch((error) => {
        console.error('Erreur lors de l\'ajout du cours :', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Ajouter un Cours</h1>
      <input
        type="text"
        placeholder="Nom du cours"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)} required>
        <option value="">Choisir un type</option>
        <option value="WEB">WEB</option>
        <option value="ML">ML</option>
      </select>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default CourseForm;
