'use client';
import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Tableros a Medida',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message link with prefilled details
    const text = `Hola AUTOMATIZACION INDUSTRIAL,\n\nMi nombre es *${formData.name}*.\nMi teléfono de contacto es *${formData.phone}*.\nEstoy interesado en el servicio de: *${formData.service}*.\n\n*Mensaje:* ${formData.message}`;
    
    const waUrl = `https://wa.me/51979798186?text=${encodeURIComponent(text)}`;
    
    // Open in new window
    window.open(waUrl, '_blank');
    setSubmitted(true);
    
    // Reset status after a few seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', service: 'Tableros a Medida', message: '' });
    }, 5000);
  };

  return (
    <section id="contacto" className="relative py-24 scroll-mt-20">
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-accent-cyan font-bold block mb-3">
            Atención Inmediata
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Póngase en Contacto con Ingeniería
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Cotice sus tableros eléctricos y protecciones electromecánicas con soporte técnico calificado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact Information Cards (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Card 1: Phones */}
            <div className="glass-panel p-6 rounded-2xl border border-cyan-500/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-accent-cyan" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 font-mono uppercase">ATENCIÓN AL CLIENTE</span>
                <a href="tel:973380801" className="text-lg font-bold text-slate-200 hover:text-accent-cyan transition-colors mt-1">
                  973 380 801
                </a>
                <span className="text-xs text-slate-400 mt-0.5">Línea telefónica directa para consultas comerciales.</span>
              </div>
            </div>

            {/* Card 2: WhatsApp Chat */}
            <div className="glass-panel p-6 rounded-2xl border border-cyan-500/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5 text-accent-cyan" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 font-mono uppercase">WHATSAPP DIRECTO</span>
                <a 
                  href="https://wa.me/51979798186" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-slate-200 hover:text-accent-cyan transition-colors mt-1 flex items-center gap-1.5"
                >
                  979 798 186
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                </a>
                <span className="text-xs text-slate-400 mt-0.5">Respuestas rápidas y cotización digital de planos.</span>
              </div>
            </div>

            {/* Card 3: Address */}
            <div className="glass-panel p-6 rounded-2xl border border-cyan-500/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-accent-cyan" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 font-mono uppercase">DIRECCIÓN FISCAL Y TIENDA</span>
                <a 
                  href="https://maps.google.com/?q=JR+PACHITEA+290+CERCADO+DE+LIMA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-slate-200 hover:text-accent-cyan transition-colors mt-1"
                >
                  JR PACHITEA 290, Cercado de Lima
                </a>
                <span className="text-xs text-slate-400 mt-1">Ubicación céntrica para recojo de mercadería y componentes.</span>
              </div>
            </div>

            {/* Card 4: Hours */}
            <div className="glass-panel p-6 rounded-2xl border border-cyan-500/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-accent-cyan" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 font-mono uppercase">HORARIO DE TRABAJO</span>
                <span className="text-sm font-bold text-slate-200 mt-1">
                  Lun a Vie: 9:00 AM - 6:00 PM
                </span>
                <span className="text-sm font-bold text-slate-200">
                  Sábados: 9:00 AM - 1:00 PM
                </span>
              </div>
            </div>

          </div>

          {/* Right Side: Interactive Request Form (7 columns) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full filter blur-2xl pointer-events-none" />
              
              <h3 className="text-lg sm:text-xl font-bold text-slate-200 mb-6">
                Formulario de Cotización Rápida
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-slate-400 uppercase">
                    Nombre o Razón Social
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Ing. Carlos Mendoza / Empresa SAC"
                    className="w-full bg-slate-900/60 border border-cyan-500/10 focus:border-cyan-400/50 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-mono text-slate-400 uppercase">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Ej. 999 999 999"
                    className="w-full bg-slate-900/60 border border-cyan-500/10 focus:border-cyan-400/50 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                {/* Service Selection */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-xs font-mono text-slate-400 uppercase">
                    Requerimiento Principal
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-slate-900/60 border border-cyan-500/10 focus:border-cyan-400/50 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none transition-colors"
                  >
                    <option value="Tableros a Medida">Fabricación de Tableros a Medida</option>
                    <option value="Interruptores y Protecciones">Suministro de Interruptores/Protecciones</option>
                    <option value="Ingeniería y Puesta en Marcha">Servicios de Ingeniería / Puesta en Marcha</option>
                    <option value="Mantenimiento Preventivo">Mantenimiento Preventivo de Equipos</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-slate-400 uppercase">
                    Detalles del Proyecto
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escriba aquí los detalles (potencia, tipo de interruptor, dimensiones de planos, etc.)"
                    className="w-full bg-slate-900/60 border border-cyan-500/10 focus:border-cyan-400/50 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white flex items-center justify-center gap-2 glow-btn-cyan cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  Enviar a WhatsApp de Ingeniería
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 text-xs font-semibold justify-center bg-green-500/5 border border-green-500/20 py-2.5 rounded-lg"
                  >
                    <CheckCircle2 className="w-4.5 h-4.5" />
                    <span>¡Redireccionando a WhatsApp de Soporte Técnico!</span>
                  </motion.div>
                )}

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
