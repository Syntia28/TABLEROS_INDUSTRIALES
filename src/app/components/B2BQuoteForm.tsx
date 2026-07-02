'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, ShieldAlert, Loader2, FileText, Mail, Phone, Building2 } from 'lucide-react';

export function B2BQuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    ruc: '',
    service: 'Fabricación de Tablero de Distribución',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          ruc: '',
          service: 'Fabricación de Tablero de Distribución',
          details: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Auto reset status after a few seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 6000);
    }
  };

  return (
    <section id="cotizacion-formal" className="relative py-24 scroll-mt-20 overflow-hidden bg-slate-900/40 border-t border-cyan-500/10">
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-accent-cyan font-bold block mb-3 animate-pulse">
            Canal Corporativo B2B
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Solicitud de Cotización Formal
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Complete el formulario para recibir una propuesta técnico-comercial formal en su correo corporativo dentro de las 24 horas.
          </p>
        </div>

        {/* Form panel */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-cyan-500/15 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full filter blur-2xl pointer-events-none" />
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Grid of contact details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="b2b-name" className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-accent-cyan" />
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="b2b-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ej. Ing. Juan Pérez"
                  className="w-full bg-slate-950/60 border border-cyan-500/10 focus:border-cyan-400/50 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="b2b-email" className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-accent-cyan" />
                  Correo Corporativo
                </label>
                <input
                  type="email"
                  id="b2b-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Ej. jperez@empresa.com"
                  className="w-full bg-slate-950/60 border border-cyan-500/10 focus:border-cyan-400/50 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="b2b-phone" className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-accent-cyan" />
                  Teléfono de Contacto
                </label>
                <input
                  type="tel"
                  id="b2b-phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Ej. +51 987 654 321"
                  className="w-full bg-slate-950/60 border border-cyan-500/10 focus:border-cyan-400/50 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
                />
              </div>

              {/* Company */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="b2b-company" className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-accent-cyan" />
                  Empresa / Razón Social
                </label>
                <input
                  type="text"
                  id="b2b-company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Ej. Constructora Alfa S.A.C."
                  className="w-full bg-slate-950/60 border border-cyan-500/10 focus:border-cyan-400/50 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
                />
              </div>

              {/* RUC (Tax ID) */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="b2b-ruc" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  RUC (Opcional)
                </label>
                <input
                  type="text"
                  id="b2b-ruc"
                  value={formData.ruc}
                  onChange={(e) => setFormData({ ...formData, ruc: e.target.value })}
                  placeholder="Ej. 20123456789"
                  maxLength={11}
                  className="w-full bg-slate-950/60 border border-cyan-500/10 focus:border-cyan-400/50 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
                />
              </div>

              {/* Service Selection */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="b2b-service" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Requerimiento Comercial
                </label>
                <select
                  id="b2b-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-slate-950/60 border border-cyan-500/10 focus:border-cyan-400/50 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none transition-colors"
                >
                  <option value="Fabricación de Tablero de Distribución">Fabricación de Tablero de Distribución</option>
                  <option value="Fabricación de Tablero de Control / PLC">Fabricación de Tablero de Control / PLC</option>
                  <option value="Fabricación de Banco de Condensadores">Fabricación de Banco de Condensadores</option>
                  <option value="Suministro de Protecciones Eléctricas">Suministro de Protecciones Eléctricas</option>
                  <option value="Servicio de Ingeniería / Mantenimiento">Servicio de Ingeniería / Mantenimiento</option>
                </select>
              </div>

            </div>

            {/* Details (Full Row) */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="b2b-details" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Especificaciones Técnicas / Detalles
              </label>
              <textarea
                id="b2b-details"
                required
                rows={5}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Especifique voltajes, amperajes requeridos, marcas preferidas, condiciones de operación o adjunte descripción de planos."
                className="w-full bg-slate-950/60 border border-cyan-500/10 focus:border-cyan-400/50 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white flex items-center justify-center gap-2 glow-btn-cyan cursor-pointer transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Procesando Solicitud...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Enviar Solicitud de Cotización Formal
                </>
              )}
            </button>

            {/* Status alerts */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-400 text-xs font-semibold justify-center bg-green-500/5 border border-green-500/20 py-3 rounded-xl"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>¡Su solicitud ha sido recibida! Le enviaremos una respuesta a su correo corporativo.</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 text-xs font-semibold justify-center bg-red-500/5 border border-red-500/20 py-3 rounded-xl"
              >
                <ShieldAlert className="w-5 h-5" />
                <span>Error al enviar el formulario. Por favor, inténtelo de nuevo o contáctenos por WhatsApp.</span>
              </motion.div>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}
