'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Shield, Zap, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const servicesData = [
  {
    id: "tableros",
    title: "Tableros Eléctricos",
    subtitle: "Ingeniería y Construcción Certificada",
    description: "Diseñamos y fabricamos tableros eléctricos de baja y media tensión a medida para todo tipo de proyectos industriales, comerciales e inmobiliarios. Empleamos herramientas CAD y software de simulación térmica para asegurar un funcionamiento óptimo y prolongar la vida útil de tus componentes.",
    icon: Cpu,
    color: "cyan",
    textColor: "text-cyan-400",
    glowColor: "rgba(34, 211, 238, 0.15)",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    hoverBorder: "hover:border-cyan-500/40",
    images: [
      "/FOTO DE TABLEROS/tablero-1.png",
      "/FOTO DE TABLEROS/tablero-2.png",
      "/FOTO DE TABLEROS/tablero-3.png",
      "/FOTO DE TABLEROS/tablero-4.png"
    ],
    features: [
      "Tableros de Distribución General (TDF) y Subdistribución.",
      "Tableros de Control de Motores (CCM) fijos y extraíbles.",
      "Sistemas de Transferencia Automática (TTA) para grupos electrógenos.",
      "Bancos de Condensadores automáticos y filtros de armónicos.",
      "Tableros de Automatización con PLCs y pantallas táctiles HMI."
    ],
    specs: ["Normas IEC 61439", "Grados IP40 / IP54 / IP65", "Cobre Electrolítico 99.9%", "Protocolo de Pruebas"]
  },
  {
    id: "protecciones",
    title: "Protecciones y Equipos",
    subtitle: "Distribución de Marcas Líderes",
    description: "Garantizamos la seguridad de tu infraestructura con componentes de protección y maniobra originales de los fabricantes más prestigiosos del mundo. Contamos con stock local inmediato, precios competitivos y asesoría especializada para la correcta selección y dimensionamiento de tus protecciones.",
    icon: Shield,
    color: "emerald",
    textColor: "text-emerald-400",
    glowColor: "rgba(16, 185, 129, 0.15)",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/40",
    images: [
      "/FOTO DE TABLEROS/tablero-5.png",
      "/FOTO DE TABLEROS/tablero-6.png",
      "/FOTO DE TABLEROS/tablero-7.png",
      "/FOTO DE TABLEROS/tablero-8.png"
    ],
    features: [
      "Interruptores termomagnéticos en caja moldeada (MCCB) y abiertos (ACB).",
      "Variadores de frecuencia (VFD) y arrancadores suaves (Soft Starters).",
      "Celdas de media tensión e interruptores de potencia al vacío.",
      "Contactores, relés de sobrecarga, guardamotores y fusibles de potencia.",
      "Dispositivos de protección contra sobretensiones transitorias (DPS)."
    ],
    specs: ["Marcas: Siemens, Schneider, ABB", "Garantía de Fábrica", "Certificados de Calidad", "Asesoría Técnica"]
  },
  {
    id: "mantenimiento",
    title: "Ingeniería y Mantenimiento",
    subtitle: "Continuidad Operativa Asegurada",
    description: "Ofrecemos servicios de ingeniería de campo, montaje eléctrico y mantenimiento predictivo, preventivo y correctivo para minimizar tiempos de parada en plantas y optimizar la seguridad del personal y los equipos en instalaciones comerciales e industriales.",
    icon: Zap,
    color: "violet",
    textColor: "text-violet-400",
    glowColor: "rgba(139, 92, 246, 0.15)",
    badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    hoverBorder: "hover:border-violet-500/40",
    images: [
      "/FOTO DE TABLEROS/tablero-9.png",
      "/FOTO DE TABLEROS/tablero-10.png",
      "/FOTO DE TABLEROS/tablero-11.png",
      "/FOTO DE TABLEROS/tablero-12.png"
    ],
    features: [
      "Mantenimiento predictivo mediante termografía infrarroja de alta resolución.",
      "Pruebas de resistencia de aislamiento (Megado) y resistencia de puesta a tierra.",
      "Montaje electromecánico de bandejas, tuberías Conduit y tendido de conductores.",
      "Programación de controladores lógicos programables (PLC) y desarrollo de SCADA.",
      "Puesta en servicio (Commissioning) y modernización de tableros obsoletos (Retrofitting)."
    ],
    specs: ["Termografía Certificada", "Emergencias 24/7", "Instrumental Calibrado", "Ingenieros Colegiados"]
  }
];

function ServiceDetailRow({ service, index }: { service: typeof servicesData[0]; index: number }) {
  const [activeImage, setActiveImage] = useState(service.images[0]);
  const isEven = index % 2 === 0;
  const Icon = service.icon;

  return (
    <div className="relative py-20 border-b border-slate-900 last:border-b-0">
      {/* Background glow behind card */}
      <div 
        className="absolute w-96 h-96 rounded-full blur-[120px] pointer-events-none -z-10" 
        style={{
          backgroundColor: service.glowColor,
          top: '20%',
          [isEven ? 'left' : 'right']: '5%',
        }}
      />

      <div className="grid lg:grid-cols-12 gap-16 items-center">
        {/* Left/Right Column: Image Gallery Showcase */}
        <div className={`lg:col-span-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
          <div className="space-y-4">
            {/* Main Active Image with Zoom Frame */}
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 group bg-slate-950">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activeImage}
                    alt={service.title}
                    fill
                    sizes="(max-w-7xl) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnails list */}
            <div className="grid grid-cols-4 gap-3">
              {service.images.map((img, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setActiveImage(img)}
                  onClick={() => setActiveImage(img)}
                  className={`relative aspect-video rounded-xl overflow-hidden cursor-pointer border-2 transition-all bg-slate-900 ${
                    activeImage === img ? 'border-cyan-400 scale-[1.03] shadow-lg' : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${service.title} thumbnail ${i + 1}`}
                    fill
                    sizes="150px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right/Left Column: Details Panel */}
        <div className={`lg:col-span-6 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-slate-900 border border-slate-800 ${service.textColor}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-[3px] font-bold text-slate-500">Servicio Especializado</span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">{service.title}</h3>
              </div>
            </div>

            <p className="text-cyan-400 text-lg font-medium">{service.subtitle}</p>
            <p className="text-slate-400 text-base leading-relaxed">{service.description}</p>

            {/* Checklist of offerings */}
            <ul className="space-y-3.5">
              {service.features.map((feat, fIndex) => (
                <li key={fIndex} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm sm:text-base">{feat}</span>
                </li>
              ))}
            </ul>

            {/* Technical specs tags */}
            <div className="flex flex-wrap gap-2.5 pt-4">
              {service.specs.map((spec, sIndex) => (
                <span
                  key={sIndex}
                  className={`text-xs px-3.5 py-1.5 rounded-lg border font-medium ${service.badgeColor}`}
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Link
                href="/contacto"
                className={`inline-flex items-center gap-2 text-white font-bold text-sm tracking-wider uppercase bg-slate-900 border border-slate-800 hover:bg-white hover:text-black py-4 px-8 rounded-xl transition-all duration-300 ${service.hoverBorder}`}
              >
                Solicitar Asesoría Técnica
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section className="relative bg-slate-950 overflow-hidden pt-12 pb-24">
      {/* Background patterns */}
      <div className="absolute inset-0 tech-grid-dots opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Row detail blocks */}
        <div className="space-y-12">
          {servicesData.map((service, index) => (
            <ServiceDetailRow key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Global CTA B2B Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28 relative rounded-3xl p-10 sm:p-14 overflow-hidden border border-slate-800 bg-slate-900/40 text-center max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-violet-500/5 to-transparent pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mx-auto mb-4 border border-slate-700">
              <ShieldCheck className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">¿Tienes planos o especificaciones técnicas?</h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Envíanos los requerimientos de tu obra o proyecto industrial. Nuestro equipo de ingenieros realizará el estudio y te enviará una cotización formal y personalizada sin costo.
            </p>
            <div className="pt-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 bg-white text-black hover:bg-cyan-400 hover:scale-105 font-bold text-lg px-10 py-5 rounded-2xl transition-all shadow-xl shadow-cyan-500/15"
              >
                Enviar Especificaciones
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-xs text-slate-500">Respuesta comercial e ingeniería en un plazo máximo de 24-48 horas.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}