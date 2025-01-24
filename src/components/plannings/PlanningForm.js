import React, { useState } from 'react';

function PlanningForm() {
  const [planning, setPlanning] = useState({
    day: '',
    duration: 0,
    formatContent: 'Physical',
    typeOfContent: 'Physical Course',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanning({ ...planning, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/plannings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(planning),
    })
      .then((response) => response.json())
      .then(() => alert('Planning ajouté avec succès!'))
      .catch((error) => console.error('Erreur:', error));
  };

  return (
    <div>
      <h1>Ajouter un Planning</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Jour:
          <input type="date" name="day" value={planning.day} onChange={handleChange} />
        </label>
        <br />
        <label>
          Durée (en heures):
          <input type="number" name="duration" value={planning.duration} onChange={handleChange} />
        </label>
        <br />
        <label>
          Format:
          <select name="formatContent" value={planning.formatContent} onChange={handleChange}>
            <option value="Physical">Physical</option>
            <option value="Online Course">Online Course</option>
          </select>
        </label>
        <br />
        <label>
          Type:
          <select name="typeOfContent" value={planning.typeOfContent} onChange={handleChange}>
            <option value="Physical Course">Physical Course</option>
            <option value="Remote Course with Google Meet">Remote Course with Google Meet</option>
            <option value="Remote Course with Zoom">Remote Course with Zoom</option>
            <option value="Remote Course with other formats">Remote Course with other formats</option>
          </select>
        </label>
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default PlanningForm;
