import React, { useState } from 'react';

function StudentForm() {
  const [student, setStudent] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    })
      .then((res) => res.json())
      .then((data) => console.log('Étudiant ajouté:', data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Ajouter un Étudiant</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type="text" name="nom" value={student.nom} onChange={handleChange} />
        </label>
        <label>
          Prénom:
          <input type="text" name="prenom" value={student.prenom} onChange={handleChange} />
        </label>
        <label>
          Téléphone:
          <input type="text" name="telephone" value={student.telephone} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={student.email} onChange={handleChange} />
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default StudentForm;
