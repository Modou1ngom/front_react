import React, { useState } from 'react';

function TeacherForm() {
  const [teacher, setTeacher] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    type: 'INTERNE',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher({ ...teacher, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/teachers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(teacher),
    })
      .then((response) => response.json())
      .then(() => alert('Enseignant ajouté avec succès!'))
      .catch((error) => console.error('Erreur:', error));
  };

  return (
    <div>
      <h1>Ajouter un Enseignant</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type="text" name="nom" value={teacher.nom} onChange={handleChange} />
        </label>
        <br />
        <label>
          Prénom:
          <input type="text" name="prenom" value={teacher.prenom} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={teacher.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Téléphone:
          <input type="text" name="telephone" value={teacher.telephone} onChange={handleChange} />
        </label>
        <br />
        <label>
          Type:
          <select name="type" value={teacher.type} onChange={handleChange}>
            <option value="INTERNE">INTERNE</option>
            <option value="EXTERNE">EXTERNE</option>
          </select>
        </label>
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default TeacherForm;
