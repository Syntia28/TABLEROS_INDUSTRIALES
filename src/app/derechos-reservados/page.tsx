import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ShieldCheck, Lock, FileText, Award, Building2, CheckCircle2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Derechos Reservados y Términos Legales',
  description: 'Aviso legal, derechos reservados y términos de propiedad intelectual de A.I. Tableros Industriales S.A.C. RUC 20606132901 en Lima, Perú.',
};

export default function DerechosReservadosPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-slate-100 overflow-hidden">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        {/* Fondo sutil con luces de neón */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Migas de pan / Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-8 font-medium">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-cyan-300">Derechos Reservados</span>
          </div>

          {/* Banner de Cabecera */}
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-900/90 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.12)] backdrop-blur-xl mb-12">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-bold text-cyan-300 mb-6">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              MARCO LEGAL & PROPIEDAD INTELECTUAL
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Derechos Reservados <br />
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 bg-clip-text text-transparent">
                A.I. TABLEROS INDUSTRIALES S.A.C.
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Toda la información, diseños de ingeniería, esquemas unifilares, marcas, fotografías y contenido multimedia contenidos en este portal están protegidos por las leyes de propiedad intelectual e industrial vigentes en la República del Perú.
            </p>

            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-slate-800 text-xs font-semibold">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-cyan-500/20 text-cyan-300">
                <Building2 className="w-4 h-4 text-cyan-400" />
                RUC: 20606132901
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                <Award className="w-4 h-4 text-cyan-400" />
                Certificación IEC 61439
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                <Lock className="w-4 h-4 text-cyan-400" />
                Copyright © {currentYear}
              </div>
            </div>
          </div>

          {/* Grilla de Artículos Legales */}
          <div className="space-y-8">

            {/* Artículo 1: Titularidad del Contenido */}
            <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-white">1. Titularidad y Propiedad Intelectual</h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed space-y-3">
                Los derechos de propiedad intelectual sobre el contenido de esta página web (incluyendo textos, arquitectura técnica de tableros eléctricos, esquemas EPLAN, diagramas de automatización, videos demostrativos, fotografías de proyectos en taller e imagotipo corporativo) pertenecen de forma exclusiva a <strong>A.I. TABLEROS INDUSTRIALES S.A.C.</strong>
              </p>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  Queda prohibida la copia, reproducción, distribución o modificación no autorizada con fines comerciales ajenos.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  Los logos e isotipos de marcas representadas (Schneider Electric, Siemens, ABB, LS, CHINT, Hager, Steck, Indeco, Mennekes) pertenecen a sus respectivos fabricantes titulares.
                </li>
              </ul>
            </div>

            {/* Artículo 2: Garantía de Fábrica y Especificaciones */}
            <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
                  <Award className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-white">2. Garantía y Estándares Técnicos</h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Todos los tableros eléctricos de fuerza, distribución, control y automatización son fabricados bajo normativas internacionales IEC 61439 y NEMA. La información técnica provista en este sitio sirve como referencia comercial e ingeniería de propuesta.
              </p>
            </div>

            {/* Artículo 3: Uso Comercial y Protección de Datos */}
            <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-white">3. Confidencialidad y Protección de Datos</h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Las cotizaciones, especificaciones técnicas y datos de contacto recopilados a través de nuestros formularios B2B y líneas de WhatsApp son tratados bajo estricta confidencialidad para la elaboración de propuestas comerciales personalizadas.
              </p>
            </div>

            {/* Contacto Legal */}
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-white">¿Tienes consultas sobre nuestras especificaciones o derechos de autor?</h3>
                <p className="text-xs text-slate-400 mt-1">Ponte en contacto directo con nuestro departamento legal y de ingeniería.</p>
              </div>
              <a
                href="https://wa.me/51979798186?text=Hola,%20tengo%20una%20consulta%20legal%20o%20de%20propiedad%20intelectual"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform shrink-0"
              >
                Contactar a Ingeniería
              </a>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
