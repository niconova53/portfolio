import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

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
      const response = await fetch(FORM_ENDPOINT, { method: 'POST', body: form, headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      if (data.success === 'true' || data.success === true) {
        setSubmitted(true);
        setTimeout(() => { setSubmitted(false); setFormData({ name: '', message: '' }); }, 3000);
      } else setError(true);
    } catch {
      const subject = encodeURIComponent(`Contacto desde portfolio - ${formData.name}`);
      const body = encodeURIComponent(`${formData.message}\n\n- ${formData.name}`);
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      setError(true);
    } finally { setSending(false); }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-eyebrow">Contacto</p>
          <h2 className="section-title">Conectemos</h2>
          <div className="section-title-rule" />
          <p className="section-subtitle">Bandeja siempre abierta. Respuesta en &lt;24h.</p>
        </div>

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {submitted ? (
            <div className="contact-card-success">
              <CheckCircle2 size={48} color="#0EA5A0" style={{ margin: '0 auto 16px' }} />
              <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>¡Mensaje enviado!</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Gracias por contactar. Te responderé a la brevedad.</p>
            </div>
          ) : (
            <>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input type="text" id="name" className="form-control" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Tu nombre" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea id="message" className="form-control" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Cuéntame sobre tu proyecto o consulta..." />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', height: '48px' }} disabled={sending}>
                  {sending ? 'Enviando...' : <>Enviar mensaje <span className="btn-arrow"><ArrowRight size={16} /></span></>}
                </button>
                {error && <p style={{ color: '#E53E3E', fontSize: '13px', textAlign: 'center' }}>No se pudo enviar. Probá de nuevo.</p>}
              </form>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon-box"><Mail size={16} /></div>
                  <span>{personal.email}</span>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-icon-box"><MapPin size={16} /></div>
                  <span>{personal.location}</span>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};
