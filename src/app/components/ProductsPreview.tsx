'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Maximize2, Zap, Cpu, Layers } from 'lucide-react';
import Link from 'next/link';

const previewImages = [
  { file: 'tablero-1.png', title: 'Distribución Eléctrica' },
  { file: 'tablero-2.png', title: 'Fuerza y Potencia' },
  { file: 'tablero-3.png', title: 'Control Industrial' },
  { file: 'tablero-4.png', title: 'Automatización PLC' }
];

export function ProductsPreview() {
  const categories = [
    {
      icon: Cpu,
      title: 'Tableros Eléctricos Personalizados',
      description: 'Diseño y fabricación de tableros de distribución, control y automatización según normas IEC.'
    },
    {
      icon: Layers,
      title: 'Componentes de Protección',
      description: 'Interruptores, contactores, relés y protecciones de marcas líderes mundiales.'
    },
    {
      icon: Zap,
      title: 'Servicios de Ingeniería',
      description: 'Instalación, puesta en marcha y mantenimiento de sistemas eléctricos industriales.'
    }
  ];

  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header Creativo */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl bg-white/5 border border-white/10 text-sm font-semibold text-cyan-400 mb-6"
          >
            <Zap className="w-4 h-4" />
            EQUIPAMIENTO INDUSTRIAL PREMIUM
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6">
            Soluciones Eléctricas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Alta Gama</span>
          </h2>

          <p className="text-slate-400 text-lg">
            Desde tableros personalizados hasta componentes de protección y servicios de ingeniería.
          </p>
        </div>

        {/* Categorías */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/50 transition-all duration-500 backdrop-blur-md"
              >
                <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h4 className="font-bold text-xl text-white mb-3">{cat.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{cat.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Galería de Proyectos */}
        <div className="relative">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold block mb-2">PROYECTOS DESTACADOS</span>
            <h3 className="text-3xl font-bold text-white">Nuestra Producción</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {previewImages.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 aspect-[4/3] cursor-pointer"
              >
                <img
                  src={`/FOTO DE TABLEROS/${img.file}`}
                  alt={`Tablero Eléctrico - ${img.title}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-all" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-cyan-400 font-mono">PROYECTO DESTACADO</p>
                      <p className="text-white text-sm font-medium mt-1 line-clamp-2">
                        {img.title}
                      </p>
                    </div>
                    <Maximize2 className="w-5 h-5 text-cyan-400 opacity-70 group-hover:opacity-100 transition" />
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/60 transition-all rounded-3xl" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <Link
            href="/productos"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-3xl bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-bold text-lg shadow-xl hover:scale-105 transition-all"
          >
            Ver Catálogo Completo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}