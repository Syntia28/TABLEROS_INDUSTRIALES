'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, Zap, CircuitBoard, ArrowRight, Play } from 'lucide-react';

const slideImages = [
  '/FOTO DE TABLEROS/tablero-control-automatizacion-plc.jpg',
  '/FOTO DE TABLEROS/gabinete-control-automatizacion-hmi.jpg',
  '/FOTO DE TABLEROS/gabinete-automatizacion-variadores-frecuencia.jpg',
  '/FOTO DE TABLEROS/tablero-monitoreo-parametros-electricos.jpg',
  '/FOTO DE TABLEROS/gabinete-electrico-distribucion-lima.jpg'
];

const steps = [
  {
    id: 1,
    icon: CircuitBoard,
    title: "Diseño e Ingeniería",
    desc: "Esquemas en EPLAN + modelado 3D parametrico y simulación digital twin",
    color: "cyan"
  },
  {
    id: 2,
    icon: Cpu,
    title: "Fabricación Inteligente",
    desc: "Cableado estructurado, peinado robótico y rotulado automatizado IEC 61439",
    color: "emerald"
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Pruebas Certificadas",
    desc: "Laboratorio propio: megado, rigidez dieléctrica, funcionalidad y FAT",
    color: "amber"
  },
  {
    id: 4,
    icon: Zap,
    title: "Instalación & Commissioning",
    desc: "Puesta en marcha remota + monitoreo predictivo en tiempo real",
    color: "violet"
  }
];

export function WhyChooseUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  // Auto-slide
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 6000);
  };

  return (
    <section id="porque-elegirnos" className="relative py-28 overflow-hidden bg-slate-950">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(34,211,238,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 tech-grid-dots opacity-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium tracking-[3px]">
            TECNOLOGÍA 2027
          </div>
          <h2 className="mt-6 text-5xl md:text-6xl font-bold bg-gradient-to-br from-white via-cyan-100 to-slate-300 bg-clip-text text-transparent tracking-tighter">
            El Futuro de la Energía<br />Se Construye Aquí
          </h2>
          <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto">
            Tableros eléctricos inteligentes con ingeniería digital, trazabilidad total y garantía de clase mundial.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-[280px] h-[560px] rounded-[52px] border-8 border-slate-900 bg-black shadow-2xl shadow-cyan-500/30 overflow-hidden"
            >
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-40 flex items-center px-2">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              </div>

              <div className="absolute inset-0 bg-slate-950 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={slideImages[currentSlide]}
                    alt="Tablero Eléctrico Industrial"
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(34,211,238,0.15)_50%)] [background-size:100%_4px] opacity-40" />

                {/* Live HUD */}
                <div className="absolute top-8 left-4 right-4 bg-black/70 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-4 text-xs font-mono z-20">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-emerald-400 flex items-center gap-1.5">● LIVE</div>
                      <div className="text-slate-300 mt-1">PANEL-{String(currentSlide + 1).padStart(2, '0')}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-cyan-400">IEC 61439-1</div>
                      <div className="text-emerald-400 text-[10px]">CERTIFICADO</div>
                    </div>
                  </div>
                </div>

                {/* Progress Dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                  {slideImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-cyan-400 w-8' : 'bg-slate-600 hover:bg-slate-400 w-2'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Play/Pause Button */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transition-all active:scale-95"
                >
                  {isPlaying ? (
                    <span className="block w-2.5 h-3 bg-white rounded-sm" />
                  ) : (
                    <Play className="w-4 h-4 text-white" />
                  )}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Steps */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <p className="text-cyan-400 font-medium tracking-widest text-sm">POR QUÉ ELEGIRNOS</p>
              <h3 className="text-4xl font-semibold text-white">
                De la idea al sistema inteligente en 4 fases
              </h3>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = selectedStep === step.id || (selectedStep === null && currentSlide === index);

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      setSelectedStep(step.id);
                      goToSlide(index);
                    }}
                    className={`group flex gap-6 p-6 rounded-3xl border transition-all duration-500 cursor-pointer hover:border-cyan-400/50 ${isActive ? 'border-cyan-400 bg-cyan-950/30' : 'border-slate-800 hover:bg-slate-900/50'}`}
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${isActive ? 'bg-cyan-500 text-black' : 'bg-slate-900 group-hover:bg-slate-800'}`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h4 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {step.title}
                        </h4>
                        <ArrowRight className={`w-5 h-5 text-cyan-400 transition-transform ${isActive ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
                      </div>
                      <p className="text-slate-400 mt-2 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="text-5xl font-bold text-slate-800/50 group-hover:text-slate-700 transition-colors self-center">
                      0{step.id}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}