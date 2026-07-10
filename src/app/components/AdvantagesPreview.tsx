'use client';

import React from 'react';
import { ShieldCheck, Cpu, Headphones, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function AdvantagesPreview() {
  const advantages = [
    {
      icon: ShieldCheck,
      title: 'Calidad Certificada y Normativa',
      description: 'Cumplimos estrictamente con los estándares y normativas eléctricas vigentes (IEC, NEMA, CNE) garantizando seguridad total.'
    },
    {
      icon: Cpu,
      title: 'Componentes de Fabricantes Líderes',
      description: 'Integraciones exclusivas con componentes de marcas globales (Schneider, Siemens, ABB) que aseguran durabilidad y repuestos.'
    },
    {
      icon: Headphones,
      title: 'Soporte Técnico y Postventa',
      description: 'Acompañamos a nuestros clientes desde el diseño conceptual en CAD hasta la puesta en marcha definitiva e in situ.'
    }
  ];

  return (
    <section className="relative py-24 bg-slate-900/10 border-y border-cyan-500/5 overflow-hidden">
      <div className="absolute inset-0 tech-grid-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold block mb-3">
            Nuestra Garantía
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Por qué Elegir Nuestra Ingeniería?
          </h2>
          <p className="text-slate-400 mt-4">
            Nos enfocamos en entregar tableros con altos estándares de seguridad, orden interno impecable y soporte continuo.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div 
                key={idx}
                className="glass-panel rounded-2xl p-8 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-3">{adv.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{adv.description}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="flex justify-center">
          <Link
            href="/ventajas"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-500/20 hover:border-cyan-500 text-sm font-semibold text-white transition-all bg-slate-900/60"
          >
            Ver Dashboard de Operaciones y Ventajas
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}
