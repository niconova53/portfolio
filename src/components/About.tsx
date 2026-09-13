import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal, skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="about">
      <div className="section-header">
        <p className="section-subtitle">{'> dev.whoami()'}</p>
        <h2 className="section-title">Sobre Mí & Expertise</h2>
      </div>

      <div className="about-grid">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>{personal.about}</p>
          <p>
            A lo largo de mi carrera he colaborado con startups en crecimiento y organizaciones empresariales para arquitectar sistemas resilientes, optimizar flujos de desarrollo y entregar interfaces precisas, accesibles y escalables.
          </p>
          <p>
            Cuando no estoy programando o revisando código, me encontrarás contribuyendo a proyectos open-source, escribiendo artículos técnicos o explorando nuevos paradigmas en sistemas distribuidos y rendimiento web.
          </p>
        </motion.div>

        <motion.div
          className="skills-container"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="skills-tabs">
            {skills.map((_, index) => (
              <button
                key={index}
                className={`skill-tab ${index === activeCategory ? 'active' : ''}`}
                onClick={() => setActiveCategory(index)}
              >
                {skills[index].name}
              </button>
            ))}
          </div>

          <div className="skills-content">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill-category-card">
                <h4>{skills[activeCategory].name}</h4>
                <div className="skill-bars">
                  {skills[activeCategory].skills.map((skill, skillIndex) => (
                    <div key={skillIndex} style={{ marginBottom: '0.75rem' }}>
                      <div className="skill-info">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="skill-progress-bg">
                        <motion.div
                          className="skill-progress-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};