import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal, skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="about" className="about-section">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-eyebrow">Sobre mí</p>
          <h2 className="section-title">Experiencia que se nota en el código</h2>
          <div className="section-title-rule" />
        </div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-text">
              <p>{personal.about}</p>
            </div>
            <div className="about-stack-note">
              <strong>Stack principal:</strong> Vue 3 · React · Next.js · TypeScript · Pinia · UnoCSS
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="skills-tabs">
              {skills.map((cat, index) => (
                <button
                  key={index}
                  className={`skill-tab ${index === activeCategory ? 'active' : ''}`}
                  onClick={() => setActiveCategory(index)}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="skill-tags">
                  {skills[activeCategory].skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill.name}</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
