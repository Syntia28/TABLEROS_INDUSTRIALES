'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Shield, Zap, ArrowRight, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: "Tableros Eléctricos",
    subtitle: "Fabricación a Medida",
    desc: "Tableros de distribución, control y automatización con ingeniería certificada y acabado profesional.",
    image: "/FOTO DE TABLEROS/tablero-1.png",
    icon: Cpu,
    color: "cyan",
    benefit: "Diseño único • Cumplimiento IEC"
  },
  {
    id: 2,
    title: "Protecciones y Componentes",
    subtitle: "Marcas Premium",
    desc: "Interruptores, contactores, relés y variadores de las mejores marcas mundiales con stock local.",
    image: "/FOTO DE TABLEROS/tablero-3.png",
    icon: Shield,
    color: "emerald",
    benefit: "Entrega rápida • Garantía oficial"
  },
  {
    id: 3,
    title: "Ingeniería y Mantenimiento",
    subtitle: "Soporte Técnico 24/7",
    desc: "Instalación, commissioning, mantenimiento predictivo y solución de fallas en planta.",
    image: "/FOTO DE TABLEROS/tablero-5.png",
    icon: Zap,
    color: "violet",
    benefit: "Mínimo tiempo de parada"
  }
];

export function ServicesPreview() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="relative py-28 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 tech-grid-dots opacity-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Vista Interactiva Grande */}
          <div className="relative order-2 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl border border-slate-700 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 text-cyan-400 mb-3">
                  <PlayCircle className="w-6 h-6" />
                  <span className="uppercase text-sm tracking-widest font-medium">Vista en planta</span>
                </div>
                <h3 className="text-3xl font-bold text-white">{activeService.title}</h3>
              </div>
            </div>
          </div>

          {/* Panel de Selección */}
          <div className="order-1 lg:order-1">
            <div className="mb-12">
              <span className="text-cyan-400 text-sm font-bold tracking-[3px]">EXPLORA NUESTROS SERVICIOS</span>
              <h2 className="text-5xl font-bold text-white mt-3 leading-tight">
                ¿Qué necesita tu proyecto?
              </h2>
            </div>

            <div className="space-y-4">
              {services.map((service) => {
                const Icon = service.icon;
                const isActive = activeService.id === service.id;

                return (
                  <motion.div
                    key={service.id}
                    onClick={() => setActiveService(service)}
                    onMouseEnter={() => setActiveService(service)}
                    animate={{
                      scale: isActive ? 1.04 : 1,
                      x: isActive ? 8 : 0,
                    }}
                    whileHover={{ 
                      scale: isActive ? 1.06 : 1.02,
                      x: isActive ? 12 : 4,
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className={`p-6 rounded-2xl border cursor-pointer transition-colors duration-300 flex gap-5 items-start group relative ${isActive
                        ? 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_35px_rgba(34,211,238,0.15)] z-10'
                        : 'border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900/80'
                      }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center transition-colors ${isActive ? 'bg-cyan-500 text-black' : 'bg-slate-800 group-hover:bg-slate-700'
                      }`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-lg text-white">{service.title}</h4>
                        {isActive && <span className="text-xs bg-cyan-400 text-black px-3 py-1 rounded-full font-bold">ACTUAL</span>}
                      </div>
                      <p className="text-slate-400 text-sm mt-1">{service.subtitle}</p>
                      <p className="text-xs text-emerald-400 mt-3 font-medium">{service.benefit}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10">
              <Link
                href="/contacto"
                className="block w-full text-center bg-white hover:bg-cyan-400 text-black font-bold py-5 rounded-2xl transition-all text-lg"
              >
                Quiero cotizar este servicio →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}