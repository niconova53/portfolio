import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

const EMAIL = '89755532638cfeb035e7252fdce35d5a';
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setSending(true);

    const form = new FormData();
    form.append('name', formData.name);
    form.append('message', formData.message);
    form.append('_subject', `Contacto desde portfolio - ${formData.name}`);
    form.append('_template', 'table');
    form.append('_captcha', 'false');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: form,
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      if (data.success === 'true' || data.success === true) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', message: '' });
        }, 3000);
      } else {
        setError(true);
      }
    } catch {
      // Fallback: abrir el cliente de correo con el mensaje pre-cargado
      const subject = encodeURIComponent(`Contacto desde portfolio - ${formData.name}`);
      const body = encodeURIComponent(`${formData.message}\n\n- ${formData.name}`);
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      setError(true);
    } finally {
      setSending(false);
    }
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
                    name="name"
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
                    name="message"
                    className="form-control"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntame sobre tu proyecto o consulta..."
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={sending}>
                  {sending ? 'Enviando...' : 'Enviar Mensaje'} <Send size={16} />
                </button>

                {error && (
                  <p style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
                    No se pudo enviar. Probá de nuevo.
                  </p>
                )}
              </>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};