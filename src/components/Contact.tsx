import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact">
      <div className="section-header">
        <p className="section-subtitle">{'fetch(/api/hire, {method: POST, body: me})'}</p>
        <h2 className="section-title">Conectemos</h2>
      </div>

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>¿Listo para tu próximo proyecto?</h3>
          <p>
            Ya sea que tengas una duda, una propuesta de proyecto o simplemente quieras conectar, mi bandeja de entrada está siempre abierta. Te responderé en menos de 24 horas.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-icon-box">
                <Mail size={20} />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Escríbeme</span>
                <strong style={{ color: 'var(--text-main)' }}>{personal.email}</strong>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon-box">
                <MapPin size={20} />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Ubicación</span>
                <strong style={{ color: 'var(--text-main)' }}>{personal.location}</strong>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <CheckCircle2 size={48} color="#10b981" style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>¡Mensaje Enviado!</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Gracias por contactar. Te responderé a la brevedad.</p>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Brendan Eich"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    className="form-control"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntame sobre tu proyecto o consulta..."
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Enviar Mensaje <Send size={16} />
                </button>
              </>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};