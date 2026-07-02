'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Shield, Wrench, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function Services() {
  const servicesList = [
    {
      id: 'tableros',
      icon: Cpu,
      title: 'Fabricación Personalizada de Tableros',
      description: 'Diseño y ensamblaje de tableros eléctricos bajo planos y especificaciones técnicas rigurosas, garantizando orden, seguridad y óptimo rendimiento.',
      features: [
        'Tableros de Distribución (Fuerza)',
        'Tableros de Automatización con PLC y HMI',
        'Tableros de Control de Motores (CCM)',
        'Cableado estructurado, etiquetado y pruebas de tensión'
      ],
      tag: 'Diseño & Montaje'
    },
    {
      id: 'suministro',
      icon: Layers,
      title: 'Suministro de Protecciones Eléctricas',
      description: 'Comercialización de interruptores térmicos, relés de sobrecarga y protecciones electromecánicas de marcas reconocidas mundialmente para proteger su inversión.',
      features: [
        'Interruptores termo-magnéticos y diferenciales',
        'Relés de sobrecarga y contactores magnéticos',
        'Interruptores de caja moldeada (MCCB)',
        'Accesorios y borneras de conexión certificadas'
      ],
      tag: 'Distribución Oficial'
    },
    {
      id: 'ingenieria',
      icon: Wrench,
      title: 'Servicios de Ingeniería y Mantenimiento',
      description: 'Instalación profesional, puesta en marcha y mantenimiento preventivo/correctivo para asegurar la continuidad operativa de sus procesos.',
      features: [
        'Ingeniería de detalle y planos eléctricos en CAD',
        'Instalación física y conexionado en planta/comercio',
        'Pruebas y puesta en marcha (commissioning)',
        'Mantenimiento preventivo periódico de tableros'
      ],
      tag: 'Ingeniería In Situ'
    }
  ];

  return (
    <section id="servicios" className="relative py-24 scroll-mt-20 bg-slate-900/30 border-y border-cyan-500/5">
      <div className="absolute inset-0 tech-grid-dots opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase tracking-widest text-accent-cyan font-bold block mb-3">
              Ingeniería de Alta Gama
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Nuestras Soluciones Eléctricas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 mt-4 text-base sm:text-lg"
          >
            Ofrecemos soporte integral en diseño, componentes y servicios técnicos para garantizar seguridad, eficiencia y continuidad operativa.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-panel glass-panel-hover scanner-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
              >
                {/* Visual glow element on background hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full filter blur-xl group-hover:bg-cyan-500/15 transition-all duration-500" />
                
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 group-hover:border-cyan-400/50 transition-colors">
                      <IconComponent className="w-6 h-6 text-accent-cyan" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400/80 bg-cyan-500/5 px-2.5 py-1 rounded-md border border-cyan-500/10">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-accent-cyan transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <hr className="border-cyan-500/10 my-4" />

                  {/* Features checklist */}
                  <ul className="space-y-2.5">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA trigger */}
                <div className="mt-8 pt-4 border-t border-cyan-500/5 flex justify-end">
                  <a
                    href={`https://wa.me/51979798186?text=Hola,%20solicito%20información%20sobre:%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-cyan hover:text-cyan-300 transition-colors group/link"
                  >
                    Consultar Servicio
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
