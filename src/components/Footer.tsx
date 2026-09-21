import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-copy">© {new Date().getFullYear()} Nicolas Novacovich — Glew, Buenos Aires</span>
        <div className="social-icons">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
            <GithubIcon size={16} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
            <LinkedinIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};
