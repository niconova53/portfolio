import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { stats } = portfolioData;

  return (
    <section id="hero" className="hero-section">
      <div className="hero-aurora" aria-hidden>
        <div className="hero-aurora-blob coral" />
        <div className="hero-aurora-blob teal" />
        <div className="hero-aurora-blob violet" />
      </div>

      <div className="hero-inner">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Hola, soy Nicolas — construyo <span>interfaces precisas y escalables.</span>
        </motion.h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Desarrollador Frontend especialista en Vue 3, React, Next.js y TypeScript con arquitecturas modernas. Enfocado en legibilidad y desarrollo asistido por IA.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a href="#projects" className="btn btn-primary">
            Ver proyectos <span className="btn-arrow"><ArrowRight size={18} /></span>
          </a>
          <a href="#contact" className="btn btn-outline">
            Contactar
          </a>
        </motion.div>

        <motion.div
          className="hero-stats-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
