import React, { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-logo">
          <Terminal size={24} />
          <span>Nicolas.Novacovich()</span>
        </a>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>Sobre Mí</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experiencia</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Proyectos</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="nav-cta">Contacto</a>
        </div>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};