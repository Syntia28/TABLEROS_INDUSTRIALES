'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Headphones, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function AdvantagesPreview() {
  const advantages = [
    {
      icon: ShieldCheck,
      title: 'Calidad Certificada y Normativa',
      description: 'Cumplimos estrictamente con los estándares IEC, NEMA y CNE, garantizando seguridad total y cumplimiento normativo.'
    },
    {
      icon: Cpu,
      title: 'Componentes de Fabricantes Líderes',
      description: 'Integraciones exclusivas con marcas globales como Schneider, Siemens y ABB para máxima durabilidad y disponibilidad de repuestos.'
    },
    {
      icon: Headphones,
      title: 'Soporte Técnico y Postventa',
      description: 'Acompañamiento completo desde el diseño conceptual hasta la puesta en marcha y mantenimiento continuo.'
    }
  ];

  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      {/* Fondo sutil premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header Espectacular */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-3xl bg-white/5 border border-white/10 text-sm font-semibold text-cyan-400 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            NUESTRA GARANTÍA
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Calidad certificada, componentes premium y soporte técnico continuo. Tu proyecto en las mejores manos.
          </p>
        </div>

        {/* Grid de Ventajas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-cyan-400/50 transition-all duration-500 backdrop-blur-xl"
              >
                {/* Glow en Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-all" />

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-8 border border-cyan-500/20 group-hover:border-cyan-400/40 transition-colors">
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {adv.title}
                </h3>

                <p className="text-slate-400 leading-relaxed text-[15px]">
                  {adv.description}
                </p>

                <div className="mt-10 flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Más información
                  <ArrowRight className="ml-2 w-4 h-4 transition group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Final */}
        <div className="flex justify-center mt-16">
          <Link
            href="/ventajas"
            className="flex items-center gap-3 px-10 py-5 rounded-3xl bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-bold text-lg shadow-xl hover:scale-105 transition-all"
          >
            Conocer Todas Nuestras Ventajas
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}