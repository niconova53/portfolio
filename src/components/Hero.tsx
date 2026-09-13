import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { personal, stats } = portfolioData;

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Disponible para nuevas oportunidades</span>
          </div>

          <h1 className="hero-title">
            Hola, soy <span>{personal.name}</span>
          </h1>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 600 }}>
            {personal.title}
          </h2>
          <p className="hero-tagline">{personal.tagline}</p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Ver Proyectos <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contactar
            </a>
          </div>

          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-card-glow"></div>
          <div className="code-card">
            <div className="code-header">
              <div className="dot dot-red"></div>
              <div className="dot dot-yellow"></div>
              <div className="dot dot-green"></div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>developer.ts</span>
            </div>
            <div className="code-body">
              <pre>
{`const developer = {
  name: "${personal.name}",
  role: "${personal.title}",
  stack: ["Vue 3", "TypeScript", "Node", "Cloud"],
  status: "Coding the future 🚀",
  execute: function() {
    return this.stack.map(tech => 
      \`Building with \${tech}\`
    );
  }
};`}
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};