import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Code2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="projects-section">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-eyebrow">Portfolio</p>
          <h2 className="section-title">Proyectos destacados</h2>
          <div className="section-title-rule" />
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="tech-tags" style={{ marginBottom: '16px' }}>
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Code2 size={14} /> Código
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    Demo <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
