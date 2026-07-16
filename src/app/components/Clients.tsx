'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle2, Zap, ArrowRight, Award } from 'lucide-react';
import Link from 'next/link';

export function Clients() {
  const clientsList = [
    { 
      name: 'C y C Contratistas', 
      segment: 'Inmobiliario y Construcción',
      logo: '/LOGOCLIENTE/CyC.jpg',
      description: 'Empresa constructora líder en el desarrollo de edificaciones residenciales y comerciales. Confió en A.I. Tableros Industriales S.A.C. para el diseño, fabricación y montaje de tableros eléctricos de distribución y fuerza general, garantizando seguridad y eficiencia en sus proyectos.',
      highlights: [
        'Tableros de Distribución General y de Servicios Comunes.',
        'Certificación y cumplimiento estricto con la norma IEC 61439.',
        'Suministro de interruptores en caja moldeada de marcas líderes.',
        'Pruebas FAT (Factory Acceptance Test) de rigidez dieléctrica.'
      ]
    },
    { 
      name: 'Bselcop S.A.C.', 
      segment: 'Ingeniería y Automatización Industrial',
      logo: '/LOGOCLIENTE/bselcop.jpeg',
      description: 'Destacada empresa de soluciones de ingeniería. Colaboramos estrechamente mediante el suministro y cableado de tableros de control de motores (CCM) e integración de sistemas de control programables (PLC/HMI) para sistemas de bombeo y automatización de procesos.',
      highlights: [
        'Tableros de Control de Motores (CCM) fijos con peinado estructurado.',
        'Programación e integración multimarca de PLCs y pantallas HMI.',
        'Conexión segura de cables de control y rotulado bajo esquema EPLAN.',
        'Pruebas y protocolos de aislamiento (Megado) de conductores.'
      ]
    }
  ];

  // Duplicate the list multiple times to ensure seamless marquee sliding
  const doubleClientsList = [...clientsList, ...clientsList, ...clientsList, ...clientsList];

  return (
    <section id="clientes" className="relative py-16 scroll-mt-20 overflow-hidden bg-slate-950">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_20%,rgba(34,211,238,0.06)_0%,transparent_50%)]" />
      <div className="absolute inset-0 tech-grid-dots opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-[2px] mb-4">
            PROYECTOS Y ALIANZAS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Respaldando a los <span className="text-glow-cyan text-accent-cyan">Líderes de la Industria</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-4 max-w-2xl mx-auto">
            Trabajamos mano a mano con contratistas e ingenierías para dotar a sus proyectos de tableros eléctricos con los más altos estándares de calidad, seguridad y continuidad de servicio.
          </p>
        </div>

        {/* Infinite Sliding Logo Container */}
        <div className="relative w-full flex items-center overflow-hidden py-6 mb-20 mask-gradient">
          {/* Gradient Overlays for Left and Right edges to fade logos out smoothly */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-15 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-15 pointer-events-none" />

          {/* Slider Rail */}
          <div className="flex gap-6 w-max animate-slide-infinite">
            {doubleClientsList.map((client, idx) => (
              <div
                key={idx}
                className="w-64 h-32 glass-panel border border-cyan-500/10 hover:border-cyan-500/30 rounded-2xl flex flex-col items-center justify-center p-4 text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 group bg-slate-950/45"
              >
                {/* Logo Image */}
                <div className="relative w-full h-16 flex items-center justify-center mb-2 bg-white/5 rounded-xl p-2.5 group-hover:bg-white/10 transition-colors border border-white/5 overflow-hidden">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain filter brightness-95 contrast-110 group-hover:scale-105 transition-transform duration-300 rounded"
                  />
                </div>
                
                <span className="text-xs font-bold text-slate-200 group-hover:text-accent-cyan transition-colors truncate w-full">
                  {client.name}
                </span>
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">
                  {client.segment}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Client Showcase Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-2">CASOS DE ÉXITO</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Nuestra Experiencia Comprobada</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {clientsList.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel border border-cyan-500/10 hover:border-cyan-500/25 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden bg-slate-900/30 backdrop-blur-md"
              >
                {/* Background glow circle */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/5 rounded-full filter blur-2xl group-hover:bg-cyan-500/10 transition-all duration-500" />

                <div>
                  {/* Top Client info & Large Logo */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5 border-b border-cyan-500/10 pb-5 mb-5">
                    <div className="w-24 h-24 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg border border-slate-800 shrink-0">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-full max-w-full object-contain rounded"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-accent-cyan px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                        {client.segment}
                      </span>
                      <h4 className="text-xl font-bold text-white mt-2.5 group-hover:text-accent-cyan transition-colors">
                        {client.name}
                      </h4>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {client.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-3.5 mb-6">
                    <h5 className="text-xs uppercase font-bold tracking-widest text-slate-400 flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-accent-cyan" />
                      Soluciones Suministradas:
                    </h5>
                    <ul className="grid grid-cols-1 gap-2.5 pl-1">
                      {client.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer badge */}
                <div className="flex items-center gap-2 pt-4 border-t border-cyan-500/5 text-slate-500 text-[10px] font-mono uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>Socio Comercial Certificado</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global CTA B2B Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-10 sm:p-14 overflow-hidden border border-cyan-500/15 bg-slate-900/40 text-center max-w-4xl mx-auto shadow-2xl shadow-cyan-500/5"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-violet-500/5 to-transparent pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">¿Deseas implementar tableros industriales en tu obra?</h3>
            <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Únete a las constructoras e ingenierías líderes que ya confían en nuestra calidad certificada. Envíanos las especificaciones de tu proyecto para brindarte una cotización personalizada sin costo.
            </p>
            <div className="pt-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 bg-white text-black hover:bg-cyan-400 hover:scale-105 font-bold text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-2xl transition-all shadow-xl shadow-cyan-500/15"
              >
                Solicitar Cotización Formal
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
