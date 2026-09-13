import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Terminal size={20} />
          <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>Nicolas Novacovich</span>
          <span>© {new Date().getFullYear()}. Todos los derechos reservados.</span>
        </div>

        <div className="social-icons">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};