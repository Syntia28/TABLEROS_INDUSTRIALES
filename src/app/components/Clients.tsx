'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

export function Clients() {
  const clientsList = [
    { name: 'Minera del Sur S.A.', segment: 'Industrial / Minería' },
    { name: 'Constructora Alfa', segment: 'Inmobiliario' },
    { name: 'Energía del Perú S.A.', segment: 'Energía / Generación' },
    { name: 'Corporación Alimentos', segment: 'Industrial / Plantas' },
    { name: 'Omega Inmobiliaria', segment: 'Comercial' },
    { name: 'Pesquera Austral', segment: 'Industrial / Pesca' },
    { name: 'Consorcio Línea Metro', segment: 'Infraestructura' },
    { name: 'Sistemas Clínicos', segment: 'Inmobiliario / Hospitales' }
  ];

  // Duplicate the list to ensure seamless infinite loop animation
  const doubleClientsList = [...clientsList, ...clientsList];

  return (
    <section id="clientes" className="relative py-20 scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0 tech-grid-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-accent-cyan font-bold block mb-3">
            Garantía de Confianza
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Respaldando Proyectos de Gran Envergadura
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Diseñamos soluciones para sectores de alta exigencia, asegurando continuidad y seguridad operativa.
          </p>
        </div>

        {/* Infinite Sliding Logo Container */}
        <div className="relative w-full flex items-center overflow-hidden py-4 mask-gradient">
          
          {/* Gradient Overlays for Left and Right edges to fade logos out smoothly */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-15 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-15 pointer-events-none" />

          {/* Slider Rail */}
          <div className="flex gap-6 w-max animate-slide-infinite">
            {doubleClientsList.map((client, idx) => (
              <div
                key={idx}
                className="w-56 h-28 glass-panel border border-cyan-500/10 hover:border-cyan-500/30 rounded-2xl flex flex-col items-center justify-center p-4 text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* SVG Mockup Logo Icon */}
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-2 group-hover:bg-cyan-500/20 transition-colors">
                  <Building2 className="w-4.5 h-4.5 text-accent-cyan" />
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

        {/* Explanatory subtitle for Client logo slots */}
        <div className="text-center mt-6">
          <span className="text-[10px] text-slate-500 font-mono italic">
            * Espacio reservado para logotipos oficiales de clientes y aliados comerciales.
          </span>
        </div>

      </div>

      {/* Tailwind masks custom utility styling inline for fade gradient edges */}
      <style jsx global>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
}
