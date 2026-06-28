'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Zap, Cpu, ShieldCheck, Activity } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Visual background enhancements */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text content (7 columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-accent-cyan mb-6"
            >
              <Zap className="w-3.5 h-3.5 fill-accent-cyan/25 animate-bounce" />
              <span>Líderes en Tableros Eléctricos Industriales</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mb-6"
            >
              <span className="text-glow-cyan text-accent-cyan">AUTOMATIZACIÓN</span>
              <br />
              <span className="text-white block mt-2">INDUSTRIAL</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-xl leading-relaxed mb-8"
            >
              Diseño, fabricación y comercialización de soluciones eléctricas industriales a medida. Especialistas en tableros de distribución, control y automatización con componentes líderes.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
            >
              <a
                href="https://wa.me/51979798186?text=Hola,%20solicito%20una%20cotización%20para%20un%20proyecto%20de%20tableros%20eléctricos."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg glow-btn-cyan transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-white/10" />
                Cotizar por WhatsApp
              </a>
              <a
                href="#servicios"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold glass-panel text-slate-200 hover:text-white hover:bg-slate-900/80 transition-all border border-cyan-500/20 hover:border-cyan-500/40"
              >
                Explorar Servicios
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Highlighted badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full border-t border-cyan-500/10 pt-8"
            >
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold text-white text-glow-cyan">100%</span>
                <span className="text-xs text-slate-400 text-center lg:text-left mt-0.5">Diseño a Medida</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold text-white text-glow-cyan">IEC</span>
                <span className="text-xs text-slate-400 text-center lg:text-left mt-0.5">Normas Técnicas</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold text-white text-glow-cyan">24/7</span>
                <span className="text-xs text-slate-400 text-center lg:text-left mt-0.5">Soporte Técnico</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold text-white text-glow-cyan">Premium</span>
                <span className="text-xs text-slate-400 text-center lg:text-left mt-0.5">Componentes de Marca</span>
              </div>
            </motion.div>
          </div>

          {/* Glowing 3D Vector Logo representation (5 columns on desktop) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center"
            >
              {/* Spinning circular electrical rings */}
              <div className="absolute inset-0 border border-dashed border-cyan-500/25 rounded-full animate-[spin_50s_linear_infinite]" />
              <div className="absolute inset-4 border border-cyan-500/10 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
              <div className="absolute inset-10 border border-dashed border-blue-500/20 rounded-full animate-[spin_35s_linear_infinite]" />
              
              {/* Outer electrical nodes (small glowing points orbiting) */}
              <div className="absolute top-8 right-8 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#00f0ff] animate-ping" />
              <div className="absolute bottom-12 left-10 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#0b57d0]" />

              {/* Glowing SVG Logo */}
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 drop-shadow-[0_0_35px_rgba(0,240,255,0.45)]">
                <svg 
                  className="w-full h-full text-glow-cyan cursor-pointer"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00f0ff" />
                      <stop offset="60%" stopColor="#0072f3" />
                      <stop offset="100%" stopColor="#020617" />
                    </linearGradient>
                    <linearGradient id="boltGrad" x1="30%" y1="10%" x2="70%" y2="90%">
                      <stop offset="0%" stopColor="#00f0ff" />
                      <stop offset="100%" stopColor="#0052c2" />
                    </linearGradient>
                  </defs>

                  {/* Circular Outer Ring with Gap */}
                  <path 
                    d="M 120 320 A 150 150 0 1 1 290 85" 
                    stroke="url(#logoGrad)" 
                    strokeWidth="32" 
                    strokeLinecap="round" 
                    className="transition-all duration-300"
                  />

                  {/* Floating Digital Pixels/Cubes at top right (representing digital tech & programming) */}
                  <rect x="290" y="80" width="22" height="22" rx="6" fill="#00f0ff" className="animate-[pulse_2s_infinite]" />
                  <rect x="325" y="105" width="16" height="16" rx="4" fill="#00e5ff" />
                  <rect x="310" y="50" width="12" height="12" rx="3" fill="#00c0ff" />
                  <rect x="345" y="75" width="10" height="10" rx="3" fill="#0072f3" />

                  {/* Glowing central Lightning Bolt (Rayo) */}
                  <path 
                    d="M 230 65 
                       L 155 185 
                       H 215 
                       L 145 325 
                       L 275 165 
                       H 215 
                       Z" 
                    fill="url(#boltGrad)" 
                    className="drop-shadow-[0_0_20px_rgba(0,240,255,0.8)]"
                  />
                </svg>
              </div>

              {/* Behind-logo technical HUD elements */}
              <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <div className="w-full h-full flex justify-between items-center text-[10px] text-cyan-500/40 font-mono tracking-widest pointer-events-none px-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1"><Cpu className="w-3 h-3 text-cyan-500/60" /> SYS.ACTIVE</div>
                    <div className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-cyan-500/60" /> IEC.OK</div>
                  </div>
                  <div className="flex flex-col gap-2 text-right">
                    <div className="flex items-center gap-1 justify-end">400V / 230V <Activity className="w-3 h-3 text-cyan-500/60" /></div>
                    <div>FREQ: 60Hz</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
