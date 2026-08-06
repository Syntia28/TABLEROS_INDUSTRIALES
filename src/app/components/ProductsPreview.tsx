'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  MessageSquare, 
  Maximize2, 
  Zap, 
  Cpu, 
  Layers, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Send,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

interface FeaturedProject {
  id: string;
  file: string;
  title: string;
  category: string;
  description: string;
  specs: string[];
}

const previewImages: FeaturedProject[] = [
  {
    id: 'tablero-1',
    file: 'tablero-1.png',
    title: 'Tablero de Distribución Principal TGD',
    category: 'Distribución & Potencia',
    description: 'Equipado con barras de cobre electrolítico de 99.9% de pureza, protecciones de caja moldeada MCCB e interruptores termomagnéticos diseñados para distribución segura en plantas industriales.',
    specs: ['Norma IEC 61439', 'Gabinete IP54/IP65', 'Cobre 99.9%']
  },
  {
    id: 'tablero-2',
    file: 'tablero-2.png',
    title: 'Tablero de Fuerza y Maniobra de Motores',
    category: 'Fuerza & Potencia',
    description: 'Sistema diseñado para maniobra y protección de motores de alta demanda, arrancadores suaves y peinado estructurado de conductores con certificación de seguridad industrial.',
    specs: ['Arranque Suave / Directo', 'Protección Térmica', 'Cableado EPLAN']
  },
  {
    id: 'tablero-3',
    file: 'tablero-3.png',
    title: 'Tablero de Control Industrial de Procesos',
    category: 'Control & Maniobra',
    description: 'Centros de control y mando para procesos continuos, integrando relés de maniobra rápida, bornes numerados, selectores y luces piloto para operación remota.',
    specs: ['Lógica Control 24VDC', 'Señalamiento LED IP66', 'Bornas Numeradas']
  },
  {
    id: 'tablero-4',
    file: 'tablero-4.png',
    title: 'Tablero de Automatización PLC y Pantalla HMI',
    category: 'Automatización & PLC',
    description: 'Integración inteligente con controladores programables PLC Siemens S7-1200 / Schneider, interfaz gráfica táctil HMI a color y conectividad Profinet / Modbus.',
    specs: ['PLC Siemens / Schneider', 'Pantalla HMI Táctil 7"', 'Red Profinet / Modbus']
  }
];

export function ProductsPreview() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === 0 ? previewImages.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === previewImages.length - 1 ? 0 : prev! + 1));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

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
            <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
              Haz clic en cualquier imagen para amplificarla en alta resolución o solicitar la cotización de un tablero similar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewImages.map((img, index) => {
              const waUrl = `https://wa.me/51979798186?text=${encodeURIComponent(
                `Hola, deseo solicitar cotización e información del tablero: ${img.title}`
              )}`;

              return (
                <motion.div
                  key={img.id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]"
                >
                  {/* Container Imagen con click para ampliar */}
                  <div
                    onClick={() => setSelectedIndex(index)}
                    className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer bg-slate-950"
                  >
                    <img
                      src={`/FOTO DE TABLEROS/${img.file}`}
                      alt={img.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-70 group-hover:opacity-80 transition-all" />

                    {/* Badge Categoría */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                        {img.category}
                      </span>
                    </div>

                    {/* Hover Zoom Overlay Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 bg-slate-950/40 backdrop-blur-[2px]">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 text-xs font-bold shadow-lg">
                        <Maximize2 className="w-4 h-4" />
                        <span>Ampliar Imagen</span>
                      </div>
                    </div>
                  </div>

                  {/* Info & Contenido del Tablero */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 
                        onClick={() => setSelectedIndex(index)}
                        className="text-white text-base font-bold mb-2 group-hover:text-cyan-400 transition-colors cursor-pointer leading-snug"
                      >
                        {img.title}
                      </h4>

                      <p className="text-slate-300 text-xs leading-relaxed mb-4 line-clamp-3">
                        {img.description}
                      </p>

                      {/* Micro specs */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {img.specs.map((spec, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400"
                          >
                            <CheckCircle2 className="w-2.5 h-2.5 text-cyan-400" />
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Acciones: Botón de Solicitar */}
                    <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-white text-xs font-bold shadow-md hover:shadow-cyan-500/25 transition-all duration-300 group/btn"
                      >
                        <Send className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        <span>Solicitar Tablero</span>
                      </a>

                      <button
                        onClick={() => setSelectedIndex(index)}
                        title="Ampliar Imagen"
                        className="p-2.5 rounded-2xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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

      {/* Visor Lightbox Modal para Ampliar Imagen */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex flex-col items-center justify-between p-4 md:p-8 select-none"
          >
            {/* Top Bar */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-6xl flex items-center justify-between z-20 pb-4 border-b border-white/10"
            >
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  PROYECTO DESTACADO {selectedIndex + 1} DE {previewImages.length}
                </span>
                <span className="hidden sm:inline text-slate-400 text-sm font-medium">
                  {previewImages[selectedIndex].category}
                </span>
              </div>

              <button
                onClick={() => setSelectedIndex(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-500/20 border border-white/20 hover:border-red-400/40 text-slate-300 hover:text-red-400 flex items-center justify-center transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Content Area: Image + Navigation Arrows */}
            <div className="relative w-full max-w-6xl flex-1 flex items-center justify-center my-4 overflow-hidden">
              {/* Botón Prev */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-4 z-20 p-3.5 rounded-full bg-slate-900/80 hover:bg-cyan-500/20 border border-white/20 hover:border-cyan-400 text-white transition-all cursor-pointer backdrop-blur-md"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Imagen Ampliada */}
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[65vh] md:max-h-[70vh] max-w-full flex items-center justify-center p-2 rounded-3xl bg-slate-900/50 border border-white/10 shadow-[0_0_50px_rgba(0,240,255,0.2)]"
              >
                <img
                  src={`/FOTO DE TABLEROS/${previewImages[selectedIndex].file}`}
                  alt={previewImages[selectedIndex].title}
                  className="max-h-[60vh] md:max-h-[65vh] w-auto max-w-full object-contain rounded-2xl"
                />
              </motion.div>

              {/* Botón Next */}
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-4 z-20 p-3.5 rounded-full bg-slate-900/80 hover:bg-cyan-500/20 border border-white/20 hover:border-cyan-400 text-white transition-all cursor-pointer backdrop-blur-md"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Bar: Title, Description & Action Button */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-slate-900/90 border border-white/10 rounded-3xl p-6 backdrop-blur-md z-20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-white text-lg md:text-xl font-bold mb-2">
                  {previewImages[selectedIndex].title}
                </h3>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-3">
                  {previewImages[selectedIndex].description}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {previewImages[selectedIndex].specs.map((spec, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                    >
                      <ShieldCheck className="w-3 h-3 text-cyan-400" />
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a
                  href={`https://wa.me/51979798186?text=${encodeURIComponent(
                    `Hola, deseo solicitar cotización e información del tablero: ${previewImages[selectedIndex].title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-white text-sm font-bold shadow-lg shadow-cyan-500/25 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  Solicitar este Tablero por WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}