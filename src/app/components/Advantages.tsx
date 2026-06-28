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
    <section id="ventajas" className="relative py-24 scroll-mt-20 overflow-hidden">
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
                    MONITOR DE CONTINUIDAD
                  </span>
                </div>
                <span className="text-[10px] text-green-400 font-mono bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
                  ESTABLE
                </span>
              </div>

              {/* Central Electric Waveform SVG */}
              <div className="h-40 w-full flex items-center justify-center relative overflow-hidden bg-slate-950/80 rounded-2xl border border-cyan-500/5 px-2">
                <svg className="w-full h-full text-glow-cyan" viewBox="0 0 300 150">
                  <defs>
                    <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#0072f3" />
                      <stop offset="50%" stopColor="#00f0ff" />
                      <stop offset="100%" stopColor="#0072f3" />
                    </linearGradient>
                  </defs>
                  {/* Grid lines inside waveform */}
                  <line x1="0" y1="75" x2="300" y2="75" stroke="rgba(0,240,255,0.08)" strokeDasharray="4" />
                  <line x1="75" y1="0" x2="75" y2="150" stroke="rgba(0,240,255,0.08)" strokeDasharray="4" />
                  <line x1="150" y1="0" x2="150" y2="150" stroke="rgba(0,240,255,0.08)" strokeDasharray="4" />
                  <line x1="225" y1="0" x2="225" y2="150" stroke="rgba(0,240,255,0.08)" strokeDasharray="4" />
                  
                  {/* Dynamic Sine wave representing electrical current flow */}
                  <path 
                    d="M 0 75 Q 37.5 15, 75 75 T 150 75 T 225 75 T 300 75" 
                    fill="none" 
                    stroke="url(#waveGrad)" 
                    strokeWidth="3.5" 
                    strokeLinecap="round"
                    className="animate-[pulse_1.5s_infinite]"
                  />
                  
                  {/* Floating electrical charge dots */}
                  <circle cx="75" cy="75" r="4.5" fill="#00f0ff" className="animate-[ping_1.5s_infinite]" />
                  <circle cx="225" cy="75" r="4.5" fill="#00f0ff" className="animate-[ping_1.5s_infinite_delay-700]" />
                </svg>
              </div>

              {/* System details */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-cyan-500/10">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] text-slate-500 font-mono uppercase">DISPONIBILIDAD</span>
                  <span className="text-lg font-bold text-white tracking-tight flex items-center gap-1">
                    99.9%
                    <Zap className="w-3.5 h-3.5 text-accent-cyan" />
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] text-slate-500 font-mono uppercase">CONFIABILIDAD</span>
                  <span className="text-lg font-bold text-white tracking-tight flex items-center gap-1">
                    MÁXIMA
                    <Server className="w-3.5 h-3.5 text-blue-500" />
                  </span>
                </div>
              </div>

              <div className="mt-4 text-[10px] text-slate-400 font-mono leading-relaxed bg-slate-900/40 p-3 rounded-xl border border-cyan-500/5">
                Compromiso de garantizar seguridad, eficiencia y continuidad operativa para nuestros clientes comerciales e industriales.
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
