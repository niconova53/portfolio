import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience">
      <div className="section-header">
        <p className="section-subtitle">{'experience.map(role => role.ship())'}</p>
        <h2 className="section-title">Experiencia & Logros</h2>
      </div>

      <div className="timeline">
        {experience.map((item, index) => (
          <motion.div
            key={item.id}
            className="timeline-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                </div>
                <span className="timeline-period">{item.period}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                <MapPin size={14} /> {item.location}
              </div>

              <p className="timeline-desc">{item.description}</p>

              <div className="timeline-achievements">
                {item.achievements.map((ach, achIndex) => (
                  <li key={achIndex}>{ach}</li>
                ))}
              </div>

              <div className="tech-tags">
                {item.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};