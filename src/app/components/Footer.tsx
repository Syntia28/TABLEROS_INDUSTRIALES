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
                { href: '/', label: 'Inicio' },
                { href: '/servicios', label: 'Servicios de Ingeniería' },
                { href: '/productos', label: 'Equipos y Protecciones' },
                { href: '/ventajas', label: 'Ventajas Competitivas' },
                { href: '/clientes', label: 'Nuestros Clientes' }
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

        {/* Separador de Sección Inferior con Botón de Retorno al Inicio */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-cyan-500/15" />
          </div>
          <div className="relative flex justify-center">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-bold text-cyan-300 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.15)] cursor-pointer group"
              aria-label="Volver al inicio de la página"
            >
              <span>Subir al Inicio</span>
              <ChevronUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Barra Épica de Derechos Reservados & Información Legal */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-slate-900/90 via-slate-950/95 to-slate-900/90 border border-cyan-500/25 shadow-[0_0_40px_rgba(6,182,212,0.1)] backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Información Legal Principal */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)] shrink-0">
                <Shield className="w-5 h-5" />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-200 tracking-wide">
                  © {currentYear} <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">A.I. TABLEROS INDUSTRIALES S.A.C.</span>
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Todos los derechos reservados. Prohibida la reproducción total o parcial sin autorización.
                </p>
              </div>
            </div>

            {/* Badges Corporativos & RUC */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-300 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                RUC: 20606132901
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300">
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                <span>Norma IEC 61439</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300">
                <span className="text-cyan-400 font-black text-xs">Perú</span>
                <span>Lima, Perú</span>
              </div>
            </div>

          </div>

          {/* Subraya Técnica Inferior */}
          <div className="mt-6 pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-medium text-slate-500 text-center sm:text-left">
            <span>Fabricantes Autorizados de los Mejores Tableros Industriales y Sistemas de Automatización</span>
            <span className="text-slate-400 font-semibold flex items-center gap-1.5">
              Diseñado e Integrado bajo Estándares de Ingeniería de Alta Precisión
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}