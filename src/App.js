import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CourseList from './components/courses/CourseList';
import CourseForm from './components/courses/CourseForm';
import StudentList from './components/students/StudentList';
import StudentForm from './components/students/StudentForm';
import PlanningList from './components/plannings/PlanningList';
import PlanningForm from './components/plannings/PlanningForm';
import LevelList from './components/levels/LevelList';
import LevelForm from './components/levels/LevelForm';
import PresenceList from './components/presences/PresenceList';
import PresenceForm from './components/presences/PresenceForm';
import './App.css';
import './components/Sidebar.css';
import './components/courses/CourseList.css';
import './components/courses/CourseForm.css';
// import './components/PlanningList.css';
// import './components/PresenceList.css';


function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '240px', padding: '20px' }}>
          <Routes>
            {/* Accueil */}
            <Route path="/" element={<h1>Bienvenue sur l'application de gestion</h1>} />
            
            {/* Gestion des des Etudiants */}
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/add" element={<StudentForm />} />
            {/* Gestion des cours */}
            <Route path="/courses" element={<CourseList />} />
            <Route path="/courses/new" element={<CourseForm />} />

            {/* Gestion des plannings */}
            <Route path="/plannings" element={<PlanningList />} />
            <Route path="/plannings/new" element={<PlanningForm />} />

            {/* Gestion des niveaux académiques */}
            <Route path="/levels" element={<LevelList />} />
            <Route path="/levels/new" element={<LevelForm />} />

            {/* Gestion des présences */}
            <Route path="/presences" element={<PresenceList />} />
            <Route path="/presences/new" element={<PresenceForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
