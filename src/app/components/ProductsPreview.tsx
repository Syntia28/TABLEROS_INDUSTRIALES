'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ToggleRight, Layers, Gauge, ArrowRight, Maximize2 } from 'lucide-react';
import Link from 'next/link';

const previewImages = [
  'tablero-control-automatizacion-plc.jpg',
  'tablero-autosoportado-distribucion-electrica.jpg',
  'gabinete-electrico-control-motores-ccm.jpg',
  'tablero-banco-condensadores-energia.jpg'
];

export function ProductsPreview() {
  const categories = [
    {
      icon: ToggleRight,
      title: 'Interruptores Térmicos y de Fuerza',
      description: 'Protección confiable contra sobrecorrientes y cortocircuitos. Cajas moldeadas (MCCB) y riel DIN.'
    },
    {
      icon: Layers,
      title: 'Contactores y Arrancadores',
      description: 'Equipos robustos de maniobra electromecánica para control de motores y bancos de condensadores.'
    },
    {
      icon: Gauge,
      title: 'Instrumentos de Medición',
      description: 'Analizadores de redes eléctricas, controladores de factor de potencia y monitoreo en tiempo real.'
    }
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 mb-16">
          <div className="text-center lg:text-left max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold block mb-3">
              Catálogo Industrial
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Equipamiento Eléctrico de Primera Línea
            </h2>
            <p className="text-slate-400 mt-4">
              Suministramos y ensamblamos componentes certificados que garantizan la continuidad y seguridad de sus operaciones eléctricas.
            </p>
          </div>
          
          <Link
            href="/productos"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition-all cursor-pointer whitespace-nowrap"
          >
            Ver Catálogo Completo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900/40 border border-cyan-500/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 border border-cyan-500/10">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-100 mb-2">{cat.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{cat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Highlighted Gallery */}
        <div className="border-t border-cyan-500/10 pt-16">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold block mb-2">
              Nuestra Producción
            </span>
            <h3 className="text-xl font-bold text-white">Proyectos Destacados</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {previewImages.map((imgName, index) => (
              <Link 
                key={imgName}
                href="/productos"
                className="group relative overflow-hidden rounded-2xl border border-cyan-500/10 bg-slate-900/60 p-2 hover:border-cyan-500/30 transition-all duration-300 block"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-950">
                  <img
                    src={`/FOTO DE TABLEROS/${imgName}`}
                    alt={`Tablero Eléctrico - Proyecto ${imgName.split('.')[0]}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <Maximize2 className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
                <div className="mt-2 px-1 flex items-center justify-between text-slate-400">
                  <span className="text-[9px] font-mono text-cyan-400 font-bold">VER DETALLES</span>
                  <span className="text-[9px] font-mono uppercase truncate max-w-[110px]">{imgName.replace('.jpg', '').replace(/-/g, ' ')}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
