import React, { useState, useEffect } from 'react';

function PresenceForm() {
  const [presence, setPresence] = useState({
    presenceDate: '',
    presence: true,
    etudiant_id: '',
    cours_id: '',
  });

  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/api/etudiants')
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error('Erreur chargement étudiants:', error));

    fetch('/api/courses')
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error('Erreur chargement cours:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPresence({ ...presence, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/presences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(presence),
    })
      .then((response) => response.json())
      .then(() => alert('Présence enregistrée avec succès!'))
      .catch((error) => console.error('Erreur:', error));
  };

  return (
    <div>
      <h1>Ajouter une Présence</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date de présence:
          <input type="date" name="presenceDate" value={presence.presenceDate} onChange={handleChange} />
        </label>
        <br />
        <label>
          Présence:
          <select name="presence" value={presence.presence} onChange={handleChange}>
            <option value={true}>Présent</option>
            <option value={false}>Absent</option>
          </select>
        </label>
        <br />
        <label>
          Étudiant:
          <select name="etudiant_id" value={presence.etudiant_id} onChange={handleChange}>
            <option value="">Sélectionnez un étudiant</option>
            {students.map((student) => (
              <option key={student.etudiant_id} value={student.etudiant_id}>
                {student.nom} {student.prenom}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Cours:
          <select name="cours_id" value={presence.cours_id} onChange={handleChange}>
            <option value="">Sélectionnez un cours</option>
            {courses.map((course) => (
              <option key={course.cours_id} value={course.cours_id}>
                {course.description}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}

export default PresenceForm;
