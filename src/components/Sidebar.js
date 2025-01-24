import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const sidebarStyle = {
    width: '240px',
    height: '100vh',
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    display: 'flex',
    flexDirection: 'column',
    // padding: '20px',
    position: 'fixed',
  };

  const linkStyle = {
    color: '#ecf0f1',
    textDecoration: 'none',
    margin: '10px 0',
    padding: '10px',
    borderRadius: '4px',
    display: 'block',
  };

  const linkHoverStyle = {
    backgroundColor: '#34495e',
  };

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/courses', label: 'Liste des cours' },
    { path: '/students/add', label: 'ajouter un etudiant' },
    { path: '/students', label: 'Liste des etudiants' },
    { path: '/courses/new', label: 'Ajouter un cours' },
    { path: '/plannings', label: 'Liste des plannings' },
    { path: '/plannings/new', label: 'Ajouter un planning' },
    { path: '/levels', label: 'Liste des niveaux académiques' },
    { path: '/levels/new', label: 'Ajouter un niveau académique' },
    { path: '/presences', label: 'Liste de présence' },
    { path: '/presences/new', label: 'Ajouter une présence' },
  ];

  return (
    <div style={sidebarStyle}>
      <h2 style={{ marginBottom: '20px' }}>Gestion de Planning</h2>
      <nav>
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            style={linkStyle}
            onMouseEnter={(e) => e.target.style.backgroundColor = linkHoverStyle.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
