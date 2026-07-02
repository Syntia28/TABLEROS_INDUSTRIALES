'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Building2, Headphones, Activity, Server, Zap } from 'lucide-react';

export function Advantages() {
  const advantages = [
    {
      id: 'calidad',
      icon: ShieldCheck,
      title: 'Calidad Certificada y Normativa',
      description: 'Todos nuestros tableros cumplen estrictamente con los estándares y normativas eléctricas vigentes (IEC, NEMA, Código Nacional de Electricidad), garantizando seguridad total.'
    },
    {
      id: 'lideres',
      icon: Cpu,
      title: 'Componentes de Fabricantes Líderes',
      description: 'Utilizamos únicamente componentes de marcas líderes a nivel global, lo que asegura una óptima disponibilidad de repuestos y máxima fiabilidad operativa.'
    },
    {
      id: 'adaptables',
      icon: Building2,
      title: 'Soluciones Multidisciplinarias',
      description: 'Desarrollamos ingeniería adaptada a múltiples sectores económicos: industrial (plantas), comercial (malls), inmobiliario (edificios) y energía.'
    },
    {
      id: 'soporte',
      icon: Headphones,
      title: 'Soporte Técnico y Postventa',
      description: 'Acompañamos a nuestros clientes desde el diseño conceptual hasta la postventa. Brindamos soporte profesional para puesta en marcha y mantenimiento.'
    }
  ];

  return (
    <section id="ventajas" className="relative py-24 scroll-mt-20 overflow-hidden bg-slate-950">
      {/* Glow circles */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-blue-600/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-cyan-600/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Interactive Cyber HUD Graphic (5 columns on desktop) */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-sm glass-panel rounded-3xl p-6 sm:p-8 relative border border-cyan-500/15"
            >
              {/* Top status bar */}
              <div className="flex items-center justify-between border-b border-cyan-500/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-accent-cyan animate-pulse" />
                  <span className="text-xs font-mono text-slate-300 font-bold uppercase tracking-wider">
                    DASHBOARD DE OPERACIONES
                  </span>
                </div>
                <span className="text-[10px] text-green-400 font-mono bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
                  ONLINE
                </span>
              </div>

              {/* Circular Gauges Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Gauge 1: Disponibilidad */}
                <div className="flex flex-col items-center justify-center p-3 bg-slate-950/40 rounded-2xl border border-cyan-500/5">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="rgba(0, 240, 255, 0.05)"
                        strokeWidth="6"
                        fill="transparent"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#00ff88"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 40}
                        initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                        whileInView={{ strokeDashoffset: (2 * Math.PI * 40) - (99.9 / 100) * (2 * Math.PI * 40) }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-bold text-slate-200 font-mono tech-data">99.9%</span>
                    </div>
                  </div>
                  <span className="text-[9px] text-slate-500 font-mono uppercase tracking-wider mt-2.5">DISPONIBILIDAD</span>
                </div>

                {/* Gauge 2: Cumplimiento IEC */}
                <div className="flex flex-col items-center justify-center p-3 bg-slate-950/40 rounded-2xl border border-cyan-500/5">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="rgba(0, 240, 255, 0.05)"
                        strokeWidth="6"
                        fill="transparent"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#00f0ff"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 40}
                        initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                        whileInView={{ strokeDashoffset: (2 * Math.PI * 40) - (100 / 100) * (2 * Math.PI * 40) }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-bold text-slate-200 font-mono tech-data">100%</span>
                    </div>
                  </div>
                  <span className="text-[9px] text-slate-500 font-mono uppercase tracking-wider mt-2.5">NORMA IEC</span>
                </div>
              </div>

              {/* Progress Bars Stack */}
              <div className="space-y-4 pt-4 border-t border-cyan-500/10">
                {/* Progress Bar 1: Seguridad */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>SEGURIDAD NEMA</span>
                    <span className="tech-data">100%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-950/80 rounded-full overflow-hidden border border-cyan-500/5">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-400"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                    />
                  </div>
                </div>

                {/* Progress Bar 2: Eficiencia Energética */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>EFICIENCIA ENERGÉTICA</span>
                    <span className="tech-data">98%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-950/80 rounded-full overflow-hidden border border-cyan-500/5">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-400"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "98%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 text-[10px] text-slate-400 font-mono leading-relaxed bg-slate-900/40 p-3 rounded-xl border border-cyan-500/5">
                Datos calculados en base a protocolos de pruebas industriales en planta antes de la entrega de equipos.
              </div>
            </motion.div>
          </div>

          {/* Right Column: Title and Advantages List (7 columns on desktop) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="text-xs uppercase tracking-widest text-accent-cyan font-bold block mb-3 text-center lg:text-left">
              ¿Por qué elegirnos?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-center lg:text-left mb-12">
              Nuestra Propuesta de Valor
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {advantages.map((adv, idx) => {
                const Icon = adv.icon;
                return (
                  <motion.div
                    key={adv.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-all">
                        <Icon className="w-5 h-5 text-accent-cyan" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-base font-bold text-slate-200 group-hover:text-accent-cyan transition-colors mb-1.5">
                        {adv.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {adv.description}
                      </p>
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
