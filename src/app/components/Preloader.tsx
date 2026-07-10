'use client';

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    { text: 'INICIANDO CORRIENTE CENTRAL...', pct: 15 },
    { text: 'CONECTANDO MÓDULOS DE CONTROL ELÉCTRICO...', pct: 40 },
    { text: 'VERIFICANDO INTERRUPTORES Y PROTECCIONES...', pct: 65 },
    { text: 'CONFIGURANDO RED DE AUTOMATIZACIÓN...', pct: 85 },
    { text: 'SISTEMA OPERATIVO ONLINE. [OK]', pct: 100 },
  ];

  useEffect(() => {
    // Disable scroll during preload
    document.body.style.overflow = 'hidden';

    const duration = 2000; // 2 seconds total load time
    const intervalTime = 30;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, []);

  // Update status message based on current progress
  useEffect(() => {
    const currentStatus = statuses.find((s) => progress <= s.pct) || statuses[statuses.length - 1];
    const index = statuses.indexOf(currentStatus);
    if (index !== -1 && index !== statusIndex) {
      setStatusIndex(index);
    }

    if (progress === 100) {
      // Small pause at 100% for user to see the "OK" message
      const exitTimer = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(exitTimer);
    }
  }, [progress, statusIndex, onComplete]);

  // Framer Motion variants
  const containerVariants: Variants = {
    initial: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: '-100%',
      opacity: 0.9,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number], // Custom cubic-bezier for a snappy, smooth lift
      },
    },
  };

  const line1Variants: Variants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 0.2,
      transition: { duration: 1.2, ease: 'easeInOut' },
    },
  };

  const line2Variants: Variants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
  };

  const boltVariants: Variants = {
    initial: { pathLength: 0, opacity: 0, fill: 'rgba(0, 240, 255, 0)' },
    animate: {
      pathLength: 1,
      opacity: 1,
      fill: 'rgba(0, 240, 255, 0.2)',
      transition: {
        pathLength: { duration: 1.3, ease: 'easeOut' },
        fill: { delay: 1.0, duration: 0.5 },
      },
    },
  };



  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-slate-950 select-none overflow-hidden"
    >
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid-dots opacity-40 pointer-events-none" />
      
      {/* Decorative Cybernetic Frame */}
      <div className="absolute inset-4 border border-cyan-500/10 pointer-events-none rounded-xl" />
      <div className="absolute top-6 left-6 text-[10px] font-mono text-cyan-500/30 uppercase tracking-widest">
        Tableros Industriales S.A.C. // Bootloader 2.5
      </div>
      <div className="absolute bottom-6 right-6 text-[10px] font-mono text-cyan-500/30 uppercase tracking-widest">
        SYS_STATUS: ACTIVE
      </div>

      <div className="relative flex flex-col items-center max-w-md w-full px-8">
        
        {/* Animated Glow Backlight */}
        <div className="absolute -top-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] animate-pulse" />

        {/* Central Logo Container */}
        <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
          <svg
            className="w-24 h-24 text-accent-cyan filter drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]"
            viewBox="0 0 24 24"
          >
            {/* Background elements */}
            <motion.path
              variants={line1Variants}
              initial="initial"
              animate="animate"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              d="M 12 2 A 10 10 0 1 1 12 22 A 10 10 0 1 1 12 2 Z"
            />
            {/* Incomplete outer border circle */}
            <motion.path
              variants={line2Variants}
              initial="initial"
              animate="animate"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
              d="M11.5 3C6.75 3 3 6.75 3 11.5S6.75 20 11.5 20c3.48 0 6.5-2.07 7.84-5.07l-1.39-.62A7.447 7.447 0 0 1 11.5 18.5C7.63 18.5 4.5 15.37 4.5 11.5S7.63 4.5 11.5 4.5c2.95 0 5.49 1.83 6.53 4.43l1.39-.62C18 5.07 14.98 3 11.5 3z"
            />
            {/* Central lightning bolt */}
            <motion.path
              variants={boltVariants}
              initial="initial"
              animate="animate"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinejoin="round"
              strokeLinecap="round"
              d="M12.5 5.5l-5 7h4v6l5-7h-4z"
            />
          </svg>
          
          {/* Cybernetic outer rotating dashed ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-dashed border-cyan-500/20 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 border border-dotted border-cyan-500/10 rounded-full"
          />
        </div>

        {/* Brand Name */}
        <h2 className="text-sm font-bold tracking-[0.2em] text-slate-200 mb-6 text-center">
          TABLEROS <span className="text-accent-cyan text-glow-cyan">INDUSTRIALES</span>
        </h2>

        {/* Progress Bar Container */}
        <div className="w-full bg-slate-900/60 border border-cyan-500/10 rounded-full h-1.5 overflow-hidden mb-4 p-[1px]">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 rounded-full shadow-[0_0_8px_rgba(0,240,255,0.7)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        {/* Terminal logs */}
        <div className="w-full h-12 flex flex-col items-center justify-start text-[10px] font-mono tracking-wider">
          <div className="text-accent-cyan/80 text-glow-cyan text-center font-semibold uppercase animate-pulse">
            {progress < 100 ? `PROCESANDO: ${Math.floor(progress)}%` : 'CARGA COMPLETA'}
          </div>
          <div className="text-slate-400 text-center mt-1.5 h-6 flex items-center justify-center px-4">
            <span className="text-emerald-400 mr-1.5">&gt;</span>
            <span className="truncate">{statuses[statusIndex].text}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
