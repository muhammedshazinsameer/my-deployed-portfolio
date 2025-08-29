import React from 'react'

const Navigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'interests', label: 'Interests'}  
  ]

  return (
    <nav className="nav">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
          onClick={() => setActiveSection(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}

export default Navigation
