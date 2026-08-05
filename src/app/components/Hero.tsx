'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Zap, Cpu, ShieldCheck, Activity, Sparkles, CircuitBoard } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-36 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-slate-950">
      {/* Video de Fondo Industrial en Movimiento con Overlays High-Tech */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          suppressHydrationWarning
          className="w-full h-full object-cover opacity-65 scale-105 filter contrast-110 saturate-125 transition-opacity duration-700"
        >
          <source src="/VIDEO/videofondo.mp4" type="video/mp4" />
        </video>
        {/* Degradados oscuros sutiles para asegurar alta visibilidad del video y contraste perfecto del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/25 via-slate-950/35 to-slate-950/80" />
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_0.8px,transparent_1px)] [background-size:40px_40px] opacity-10" />
      </div>

      {/* Orbes de Energía Dinámicos */}
      <div className="absolute top-20 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse pointer-events-none z-0" />
      <div className="absolute bottom-20 right-10 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-blue-500/15 rounded-full blur-[140px] animate-pulse delay-1000 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-center">

          {/* Contenido Izquierdo */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 text-xs sm:text-sm font-bold text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              <CircuitBoard className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 animate-pulse" />
              INGENIERÍA DEL FUTURO
            </motion.div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.2rem] font-black tracking-tight sm:tracking-[-3px] lg:tracking-[-4px] leading-tight sm:leading-none">
              <span className="sr-only">A.I. Tableros Industriales S.A.C. | Fabricantes de los Mejores Tableros Industriales y Automatización Eléctrica en Lima, Perú</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="block text-cyan-300 pb-1 drop-shadow-[0_0_25px_rgba(103,232,249,0.3)]"
              >
                AUTOMATIZACIÓN
              </motion.span>
              <span className="bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-transparent inline-block pb-1">
                QUE ENCIENDE
              </span>
              <br />
              <span className="inline-block pb-1 text-white">LA INDUSTRIA</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Tableros eléctricos inteligentes. Soluciones de control y automatización que impulsan la productividad industrial del Perú.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start">
              <motion.a
                href="https://wa.me/51979798186?text=Hola,%20quiero%20una%20cotización"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-3xl bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-bold text-base sm:text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-400/70 transition-all"
              >
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                Cotizar Ahora
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </motion.a>

              <motion.a
                href="/servicios"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 px-7 sm:px-9 py-4 sm:py-5 rounded-3xl border border-cyan-400/40 hover:border-cyan-400 bg-slate-900/60 backdrop-blur-md text-base sm:text-lg font-semibold text-white hover:bg-cyan-500/10 transition-all"
              >
                Ver Nuestras Soluciones
              </motion.a>
            </div>

            {/* Stats Creativos */}
            <div className="grid grid-cols-3 gap-2 sm:gap-8 pt-8 sm:pt-12 border-t border-cyan-500/20">
              <div>
                <div className="text-xl sm:text-4xl font-black text-cyan-300 drop-shadow-[0_0_12px_rgba(103,232,249,0.5)]">400V</div>
                <div className="text-[9px] sm:text-xs text-slate-400 mt-1 uppercase font-semibold tracking-wider">SISTEMAS INDUSTRIALES</div>
              </div>
              <div>
                <div className="text-xl sm:text-4xl font-black text-cyan-300 drop-shadow-[0_0_12px_rgba(103,232,249,0.5)]">IEC</div>
                <div className="text-[9px] sm:text-xs text-slate-400 mt-1 uppercase font-semibold tracking-wider">CERTIFICACIÓN GLOBAL</div>
              </div>
              <div>
                <div className="text-xl sm:text-4xl font-black text-cyan-300 drop-shadow-[0_0_12px_rgba(103,232,249,0.5)]">24/7</div>
                <div className="text-[9px] sm:text-xs text-slate-400 mt-1 uppercase font-semibold tracking-wider">SOPORTE TÉCNICO</div>
              </div>
            </div>
          </div>

          {/* Lado Derecho - Elemento 3D Creativo */}
          <div className="lg:col-span-5 flex justify-center mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, rotate: -15 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 1.4 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]"
            >
              {/* Anillos Energéticos */}
              <div className="absolute inset-0 border border-cyan-400/30 rounded-full animate-spin-slow" />
              <div className="absolute inset-8 sm:inset-12 border border-dashed border-sky-400/40 rounded-full animate-spin-reverse" />

              {/* Logo Central con Rayo Dinámico */}
              <div className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 mx-auto">
                <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_80px_#67e8f9]">
                  <defs>
                    <linearGradient id="energy" x1="20%" y1="10%" x2="80%" y2="90%">
                      <stop offset="0%" stopColor="#67e8f9" />
                      <stop offset="100%" stopColor="#0369a1" />
                    </linearGradient>
                  </defs>

                  <circle cx="200" cy="200" r="155" fill="none" stroke="url(#energy)" strokeWidth="22" strokeDasharray="20 25" />

                  {/* Rayo Central Animado */}
                  <motion.path
                    d="M 210 65 L 135 210 H 205 L 135 325 L 255 170 H 185 Z"
                    fill="#67e8f9"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </svg>
              </div>

              {/* Nodos Orbitando Creativos */}
              <div className="absolute top-8 left-12 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-cyan-300 rounded-full shadow-[0_0_20px_#67e8f9] animate-ping" />
              <div className="absolute bottom-16 sm:bottom-20 right-12 sm:right-16 w-3 h-3 bg-sky-300 rounded-full shadow-[0_0_15px_#22d3ee]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}