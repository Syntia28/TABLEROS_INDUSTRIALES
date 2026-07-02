'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Quote, Star, Building2 } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "La precisión y rapidez en el armado de nuestros tableros de automatización superaron nuestras expectativas. Tienen un soporte técnico excepcional en planta.",
      name: "Ing. Luis Rivera",
      position: "Superintendente de Proyectos",
      company: "Minera del Sur S.A.",
      rating: 5,
    },
    {
      quote: "Suministran componentes originales (ABB, Schneider, Siemens) con certificados de calidad y a precios altamente competitivos. Son nuestros aliados estratégicos.",
      name: "Ing. Sofía Cárdenas",
      position: "Residente de Instalaciones Eléctricas",
      company: "Constructora Alfa",
      rating: 5,
    },
    {
      quote: "Nuestros tableros de transferencia automática y distribución operan impecablemente bajo condiciones extremas. Su ingeniería de detalle es de primera.",
      name: "Ing. Héctor Torres",
      position: "Director de Operaciones",
      company: "Energía del Perú S.A.",
      rating: 5,
    },
    {
      quote: "Destaco el excelente orden del cableado, el correcto rotulado bajo la norma IEC y la rigurosidad en los protocolos de pruebas de tensión de cada tablero entregado.",
      name: "Ing. Carlos Mendoza",
      position: "Jefe de Mantenimiento Eléctrico",
      company: "Corporación Alimentos S.A.C.",
      rating: 5,
    }
  ];

  return (
    <section id="testimonios" className="relative py-24 scroll-mt-20 overflow-hidden bg-slate-950">
      {/* Background patterns */}
      <div className="absolute inset-0 tech-grid-dots opacity-20 pointer-events-none" />
      <div className="absolute right-0 top-1/2 w-72 h-72 bg-cyan-600/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-72 h-72 bg-blue-600/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-accent-cyan font-bold block mb-3 animate-pulse">
            Casos de Éxito y Confianza
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Opinión de Clientes Corporativos
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            Ingenieros y directores de proyectos en el sector industrial, minero y construcción respaldan nuestra calidad de fabricación.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-cyan-500/10 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Subtle top decoration */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div>
                {/* Rating and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-cyan-400 fill-cyan-400/30" />
                    ))}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/5 border border-cyan-500/15 flex items-center justify-center text-accent-cyan/60 group-hover:text-accent-cyan group-hover:border-cyan-500/35 transition-all">
                    <Quote className="w-5 h-5" />
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-sm sm:text-base italic leading-relaxed mb-6 relative">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-cyan-500/5">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                  <Building2 className="w-5 h-5 text-accent-cyan/70" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-100 group-hover:text-accent-cyan transition-colors">
                    {test.name}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-500 block leading-tight mt-0.5">
                    {test.position}
                  </span>
                  <span className="text-[11px] font-bold text-cyan-400/80 uppercase tracking-wider block mt-1">
                    {test.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
