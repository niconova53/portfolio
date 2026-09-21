import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-logo" onClick={() => setIsOpen(false)}>
          <span className="nav-logo-dot" />
          <span>Nicolas Novacovich</span>
          <span className="nav-logo-sub">Frontend Senior</span>
        </a>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>Sobre mí</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experiencia</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Proyectos</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="nav-cta">
            Hablemos <span className="nav-cta-arrow"><ArrowRight size={16} /></span>
          </a>
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </nav>
  );
};
