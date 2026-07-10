'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Zap, Cpu, ShieldCheck, Activity, Sparkles, CircuitBoard } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-black">
      {/* Fondo Futurista Épico */}
      <div className="absolute inset-0 tech-grid opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_0.8px,transparent_1px)] [background-size:40px_40px] opacity-10" />

      {/* Orbes de Energía Dinámicos */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-32 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Contenido Izquierdo */}
          <div className="lg:col-span-7 space-y-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 text-sm font-semibold text-cyan-300"
            >
              <CircuitBoard className="w-5 h-5" />
              INGENIERÍA DEL FUTURO
            </motion.div>

            <h1 className="text-6xl lg:text-[5.2rem] font-black tracking-[-4px] leading-none">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="block text-cyan-300"
              >
                AUTOMATIZACIÓN
              </motion.span>
              <span className="bg-gradient-to-r from-white via-cyan-200 to-sky-300 bg-clip-text text-transparent">
                QUE ENCIENDE
              </span>
              <br />LA INDUSTRIA
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-300 max-w-xl mx-auto lg:mx-0"
            >
              Tableros eléctricos inteligentes. Soluciones de control y automatización que impulsan la productividad industrial del Perú.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <motion.a
                href="https://wa.me/51979798186?text=Hola,%20quiero%20una%20cotización"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                className="group flex items-center justify-center gap-3 px-10 py-5 rounded-3xl bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-bold text-lg shadow-2xl shadow-cyan-500/50"
              >
                <MessageSquare className="w-6 h-6" />
                Cotizar Ahora
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </motion.a>

              <motion.a
                href="/servicios"
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-3 px-9 py-5 rounded-3xl border border-cyan-400/40 hover:border-cyan-400 text-lg font-semibold text-white"
              >
                Ver Nuestras Soluciones
              </motion.a>
            </div>

            {/* Stats Creativos */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
              <div>
                <div className="text-4xl font-bold text-cyan-300">400V</div>
                <div className="text-xs text-slate-400 mt-1">SISTEMAS INDUSTRIALES</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-300">IEC</div>
                <div className="text-xs text-slate-400 mt-1">CERTIFICACIÓN GLOBAL</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-300">24/7</div>
                <div className="text-xs text-slate-400 mt-1">SOPORTE TÉCNICO</div>
              </div>
            </div>
          </div>

          {/* Lado Derecho - Elemento 3D Creativo */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, rotate: -15 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 1.4 }}
              className="relative w-80 h-80 lg:w-[420px] lg:h-[420px]"
            >
              {/* Anillos Energéticos */}
              <div className="absolute inset-0 border border-cyan-400/30 rounded-full animate-spin-slow" />
              <div className="absolute inset-12 border border-dashed border-sky-400/40 rounded-full animate-spin-reverse" />

              {/* Logo Central con Rayo Dinámico */}
              <div className="relative z-10 w-72 h-72 lg:w-96 lg:h-96 mx-auto">
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
              <div className="absolute top-8 left-12 w-4 h-4 bg-cyan-300 rounded-full shadow-[0_0_20px_#67e8f9] animate-ping" />
              <div className="absolute bottom-20 right-16 w-3 h-3 bg-sky-300 rounded-full shadow-[0_0_15px_#22d3ee]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}