import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="experience-section">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-eyebrow">Experiencia</p>
          <h2 className="section-title">Dónde aporté valor</h2>
          <div className="section-title-rule" />
        </div>

        <div className="timeline">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              className="timeline-item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <p className="timeline-company">{item.company}</p>
                  </div>
                  <span className="timeline-period">{item.period}</span>
                </div>

                <div className="timeline-meta">
                  <MapPin size={14} /> {item.location}
                </div>

                <p className="timeline-desc">{item.description}</p>

                <ul className="timeline-achievements">
                  {item.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>

                <div className="tech-tags">
                  {item.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
