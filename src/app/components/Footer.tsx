'use client';

import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, Shield, Award, ArrowUpRight, ChevronUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-cyan-500/20 overflow-hidden pt-16 pb-8 text-slate-400 selection:bg-cyan-500 selection:text-slate-950">
      {/* Fondo Decorativo Tecnológico */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full filter blur-[120px] animate-pulse pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Grilla Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Columna 1: Identidad Corporativa */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <svg className="w-5 h-5 text-cyan-400 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.5 5.5l-5 7h4v6l5-7h-4z" />
                </svg>
              </div>
              <span className="text-sm font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-cyan-400">
                AUTOMATIZACIÓN INDUSTRIAL
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              Diseño, fabricación y comercialización de soluciones eléctricas industriales. Tableros eléctricos a medida y protecciones electromecánicas bajo estrictas normas técnicas internacionales.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>Norma IEC / NEMA</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300">
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                <span>Garantía de Fábrica</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-6 relative pl-3 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-cyan-400">
              Navegación
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { href: '#inicio', label: 'Inicio' },
                { href: '#servicios', label: 'Servicios de Ingeniería' },
                { href: '#productos', label: 'Equipos y Protecciones' },
                { href: '#ventajas', label: 'Ventajas Competitivas' },
                { href: '#clientes', label: 'Nuestros Clientes' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:translate-x-1"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto y Soporte */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-4 relative pl-3 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-cyan-400">
              Contacto e Ingeniería
            </h4>
            <div className="space-y-3.5 text-sm font-medium">
              <a
                href="https://maps.google.com/?q=JR+PACHITEA+290,+Cercado+de+Lima,+Peru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-slate-400 hover:text-cyan-400 transition-colors group"
              >
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 group-hover:animate-bounce" />
                <span className="leading-snug">JR. PACHITEA 290, <br /><span className="text-xs text-slate-500">Cercado de Lima, Perú</span></span>
              </a>

              <a
                href="tel:+51973380801"
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Central: 973 380 801</span>
              </a>

              <a
                href="https://wa.me/51979798186"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors group"
              >
                <MessageSquare className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="flex items-center gap-1.5">
                  WhatsApp corporativo
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Columna 4: Horario Operativo */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-6 relative pl-3 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-cyan-400">
              Disponibilidad Planta
            </h4>
            <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 rounded-xl p-4 space-y-3.5 shadow-inner">
              <div className="flex items-start gap-3 text-sm">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-300">Lunes a Viernes</div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">09:00 AM — 06:00 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm pt-2 border-t border-slate-900">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-300">Sábados</div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">09:00 AM — 01:00 PM</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Separador de sección inferior */}
        <div className="relative my-8">
          <hr className="border-slate-900" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-slate-950">
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 transition-all duration-300 group shadow-md"
              aria-label="Volver al inicio"
            >
              <ChevronUp className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Créditos y Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p className="order-2 md:order-1 text-center md:text-left">
            © {currentYear} <span className="text-slate-400">AUTOMATIZACIÓN INDUSTRIAL</span>. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 order-1 md:order-2 text-slate-400">
            <span className="font-mono bg-slate-900 px-2 py-1 rounded border border-slate-800 text-[11px]">RUC: 20606132901</span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="text-slate-500 text-center">Diseñado bajo estándares de ingeniería de alta precisión</span>
          </div>
        </div>

      </div>
    </footer>
  );
}