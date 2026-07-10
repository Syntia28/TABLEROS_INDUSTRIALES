'use client';

import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ContactPreview() {
  return (
    <section className="relative py-24 bg-slate-950 scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold block mb-3">
            Atención Inmediata
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Póngase en Contacto con Ingeniería
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Cotice sus tableros eléctricos y protecciones electromecánicas con soporte técnico calificado en Lima, Perú.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Card 1: Phones */}
          <div className="glass-panel p-6 rounded-2xl border border-cyan-500/10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 font-mono uppercase">ATENCIÓN AL CLIENTE</span>
              <a href="tel:973380801" className="text-base font-bold text-slate-200 hover:text-cyan-400 transition-colors mt-1">
                973 380 801
              </a>
              <span className="text-xs text-slate-400 mt-1 leading-relaxed">Línea telefónica directa comercial.</span>
            </div>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="glass-panel p-6 rounded-2xl border border-cyan-500/10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 font-mono uppercase">WHATSAPP DIRECTO</span>
              <a 
                href="https://wa.me/51979798186" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base font-bold text-slate-200 hover:text-cyan-400 transition-colors mt-1 flex items-center gap-1.5"
              >
                979 798 186
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
              </a>
              <span className="text-xs text-slate-400 mt-1 leading-relaxed">Cotización digital de esquemas y planos.</span>
            </div>
          </div>

          {/* Card 3: Address */}
          <div className="glass-panel p-6 rounded-2xl border border-cyan-500/10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 font-mono uppercase">DIRECCIÓN FISCAL y TIENDA</span>
              <a 
                href="https://maps.google.com/?q=JR+PACHITEA+290,+Cercado+de+Lima,+Peru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold text-slate-200 hover:text-cyan-400 transition-colors mt-1 truncate max-w-[170px]"
              >
                JR. PACHITEA 290
              </a>
              <span className="text-xs text-slate-400 mt-1 leading-relaxed">Cercado de Lima, Perú.</span>
            </div>
          </div>

          {/* Card 4: Hours */}
          <div className="glass-panel p-6 rounded-2xl border border-cyan-500/10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400">
              <Clock className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 font-mono uppercase">HORARIO DE ATENCIÓN</span>
              <span className="text-base font-bold text-slate-200 mt-1">
                Lun - Sáb
              </span>
              <span className="text-xs text-slate-400 mt-1 leading-relaxed">9:00 AM – 6:00 PM</span>
            </div>
          </div>
        </div>

        {/* CTA to formal B2B contact form page */}
        <div className="flex justify-center">
          <Link
            href="/contacto"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-sm font-bold text-white transition-all shadow-lg shadow-cyan-500/10 cursor-pointer"
          >
            Formulario de Consulta Formal B2B
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
