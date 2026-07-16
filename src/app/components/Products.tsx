'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ToggleLeft, ToggleRight, Layers, Gauge, Shield, ShieldAlert, 
  ChevronLeft, ChevronRight, X, Maximize2, Download, MessageSquare,
  Cpu, Zap, Settings, Droplet, Activity, Split
} from 'lucide-react';

const panelImages = Array.from({ length: 38 }, (_, i) => `tablero-${i + 1}.png`);

export function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleImagesCount, setVisibleImagesCount] = useState(8);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleLoadMore = () => {
    setVisibleImagesCount(prev => Math.min(prev + 8, panelImages.length));
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(prev => (prev === 0 ? panelImages.length - 1 : prev! - 1));
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(prev => (prev === panelImages.length - 1 ? 0 : prev! + 1));
    }
  };

  const brands = [
    { name: 'Siemens', origin: 'Alemania', type: 'Líder Global', logo: '/marcas/siemens.png' },
    { name: 'Schneider Electric', origin: 'Francia', type: 'Premium', logo: '/marcas/schneider.png' },
    { name: 'ABB', origin: 'Suiza', type: 'Alta Tecnología', logo: '/marcas/abb.png' },
    { name: 'LS Electric', origin: 'Corea', type: 'Gran Versatilidad', logo: '/marcas/ls.png' },
    { name: 'Chint Electric', origin: 'China', type: 'Garantizado', logo: '/marcas/chint.webp' },
    { name: 'Hager', origin: 'Alemania', type: 'Eficiencia', logo: '/marcas/hager.png' },
    { name: 'Indeco', origin: 'Perú', type: 'Conductores', logo: '/marcas/indeco.jpg' },
    { name: 'Mennekes', origin: 'Alemania', type: 'Conexión Ind.', logo: '/marcas/mennekes.svg' },
    { name: 'Steck', origin: 'Brasil', type: 'Seguridad', logo: '/marcas/steck.jpg' }
  ];

  const productCategories = [
    {
      id: 'distribucion',
      icon: Activity,
      title: 'Tableros de distribución eléctrica',
      category: 'potencia',
      image: '/FOTO DE TABLEROS/tablero-1.png',
      description: 'Diseñados para recibir, proteger y distribuir la energía eléctrica hacia diferentes circuitos o áreas de una instalación. Son fundamentales para asegurar una correcta alimentación eléctrica y una operación segura.',
      details: (
        <>
          Barras de cobre electrolítico de alta pureza (<span className="tech-data">99.9%</span>), interruptores de caja moldeada (MCCB), protección <span className="tech-data">IP40 / IP54</span>.
        </>
      )
    },
    {
      id: 'fuerza',
      icon: Zap,
      title: 'Tableros de fuerza y potencia',
      category: 'potencia',
      image: '/FOTO DE TABLEROS/tablero-2.png',
      description: 'Fabricados para el control y maniobra de cargas eléctricas de mayor demanda, como motores, bombas, compresores y maquinaria industrial. Permiten una operación confiable y ordenada de los sistemas de potencia.',
      details: (
        <>
          Maniobra de cargas de alta demanda, arrancadores robustos y peinado estructurado de conductores de alta sección con certificación <span className="tech-data">IEC 61439</span>.
        </>
      )
    },
    {
      id: 'control',
      icon: Settings,
      title: 'Tableros de control',
      category: 'control',
      image: '/FOTO DE TABLEROS/tablero-3.png',
      description: 'Orientados a la supervisión, automatización y control de procesos industriales. Integran dispositivos como relés, contactores, temporizadores, PLC, variadores y otros componentes de control para optimizar el funcionamiento de equipos y procesos.',
      details: (
        <>
          Integración multimarca original de gama alta, relés de maniobra rápida, bornes numerados y esquemas en <span className="tech-data">EPLAN</span>.
        </>
      )
    },
    {
      id: 'automatizacion',
      icon: Cpu,
      title: 'Tableros de automatización',
      category: 'automatizacion',
      image: '/FOTO DE TABLEROS/tablero-4.png',
      description: 'Desarrollados para sistemas que requieren programación, monitoreo y operación inteligente. Estos tableros permiten mejorar la productividad, reducir errores operativos y facilitar la integración con tecnologías modernas.',
      details: (
        <>
          Controladores lógicos programables (PLC), interfaces táctiles <span className="tech-data">HMI</span>, switches industriales y conectividad <span className="tech-data">Modbus / Profinet</span>.
        </>
      )
    },
    {
      id: 'arranque',
      icon: Split,
      title: 'Tableros de arranque de motores',
      category: 'potencia',
      image: '/FOTO DE TABLEROS/tablero-5.png',
      description: 'Incluyen soluciones para arranque directo, estrella-triángulo, arranque suave y variadores de frecuencia, según las necesidades de cada aplicación. Ayudan a proteger los motores y mejorar su desempeño.',
      details: (
        <>
          Rampas de aceleración/desaceleración calibradas, variadores de frecuencia con filtros de armónicos, protección contra sobrecarga activa.
        </>
      )
    },
    {
      id: 'bombeo',
      icon: Droplet,
      title: 'Tableros para bombeo y sistemas especiales',
      category: 'especiales',
      image: '/FOTO DE TABLEROS/tablero-6.png',
      description: 'Diseñados para controlar electrobombas, sistemas de presión constante, cisternas, pozos, plantas de tratamiento y otras aplicaciones especiales, adaptándose a los requerimientos técnicos del cliente.',
      details: (
        <>
          Control multipresion mediante transmisores de presión analógicos de <span className="tech-data">4-20mA</span>, alternancia y control PID integrado.
        </>
      )
    }
  ];

  const filteredCategories = activeCategory === 'all' 
    ? productCategories 
    : productCategories.filter(cat => cat.category === activeCategory);

  return (
    <section id="productos" className="relative py-24 scroll-mt-20">
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 gap-6">
          <span className="text-xs uppercase tracking-widest text-accent-cyan font-bold block">
            Catálogo de Soluciones
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Nuestros Tableros Eléctricos Industriales
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl glass-panel p-6 rounded-2xl border border-cyan-500/10 shadow-[0_0_30px_rgba(0,240,255,0.03)] mt-2">
            En <strong className="text-accent-cyan font-extrabold">A.I. Tableros Industriales S.A.C.</strong> ofrecemos soluciones integrales en diseño, fabricación, ensamblaje e implementación de tableros eléctricos industriales, desarrollados para garantizar seguridad, eficiencia, control y continuidad operativa en distintos procesos y sectores productivos.
          </p>
          
          {/* Tabs Filter */}
          <div className="flex flex-wrap justify-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-cyan-500/10 mt-6">
            {['all', 'potencia', 'control', 'automatizacion', 'especiales'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-accent-cyan text-slate-950 font-extrabold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat === 'all' 
                  ? 'Ver Todos' 
                  : cat === 'potencia' 
                    ? 'Potencia y Fuerza' 
                    : cat === 'control' 
                      ? 'Control'
                      : cat === 'automatizacion'
                        ? 'Automatización'
                        : 'Sistemas Especiales'}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((product, idx) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between border border-cyan-500/10 relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full filter blur-2xl group-hover:bg-blue-600/10 transition-all duration-500" />
                  
                  <div>
                    {/* Visual Card Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-950/40 border border-cyan-500/5 mb-5 group-hover:border-cyan-500/20 transition-all duration-300">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    </div>

                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/25 group-hover:border-cyan-400 transition-colors shrink-0">
                        <Icon className="w-5.5 h-5.5 text-accent-cyan" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-accent-cyan transition-colors leading-tight">
                        {product.title}
                      </h3>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                  </div>

                  <div>
                    <div className="bg-slate-950/60 rounded-2xl p-4 border border-cyan-500/5 mb-4">
                      <div className="flex items-start gap-2.5">
                        <Shield className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-400 leading-relaxed font-mono">
                          <strong className="text-slate-300 font-sans">Especificación:</strong> {product.details}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-cyan-500/5">
                      <span className="text-slate-500 text-[10px] font-mono uppercase">Cat: {product.category}</span>
                      <a
                        href={`https://wa.me/51979798186?text=Hola,%20deseo%20cotizar%20un%20${encodeURIComponent(product.title)}%20con%20A.I.%20Tableros%20Industriales`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-extrabold text-accent-cyan hover:text-cyan-300 flex items-center gap-1 group/btn"
                      >
                        Cotizar Tablero
                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>


        {/* Proyectos: Galería de Tableros Fabricados */}
        <div className="border-t border-cyan-500/10 pt-16 mb-20">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-accent-cyan font-bold block mb-3 animate-pulse">
              Diseño & Fabricación a Medida
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-glow-cyan text-white tracking-tight">
              Galería de Tableros Eléctricos Fabricados
            </h2>
            <p className="text-slate-400 mt-3 text-sm sm:text-base">
              Diseño, armado, cableado y pruebas de tensión en tableros de fuerza, control y automatización para el sector industrial y comercial peruano.
            </p>
          </div>

          {/* Grid of Images */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {panelImages.slice(0, visibleImagesCount).map((imgName, index) => (
              <motion.div
                key={imgName}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-cyan-500/10 bg-slate-900/60 p-2 hover:border-cyan-500/30 transition-all duration-300"
                onClick={() => setSelectedImageIndex(index)}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-950 terminal-frame cyan-overlay-container">
                  <img
                    src={`/FOTO DE TABLEROS/${imgName}`}
                    alt={`Tablero Eléctrico Industrial - Proyecto ${imgName.split('.')[0]}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-accent-cyan">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] text-slate-300 font-mono tracking-widest">AMPLIAR</span>
                    </div>
                  </div>
                </div>
                
                {/* Image Caption/Label */}
                <div className="mt-2.5 px-1 pb-1 flex items-center justify-between text-slate-400">
                  <span className="text-[10px] font-mono font-bold text-accent-cyan">PROYECTO</span>
                  <span className="text-[10px] font-mono uppercase truncate max-w-[140px] block" title={imgName.replace('.jpg', '').replace(/-/g, ' ')}>
                    {imgName.replace('.jpg', '').replace(/-/g, ' ')}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleImagesCount < panelImages.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={handleLoadMore}
                className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-cyan-500/15 hover:border-cyan-500/30 glow-btn-cyan transition-all duration-300 cursor-pointer"
              >
                Ver Más Proyectos ({panelImages.length - visibleImagesCount} restantes)
              </button>
            </div>
          )}
        </div>

        {/* Brands Section */}
        <div className="border-t border-cyan-500/10 pt-16 overflow-hidden">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Socio Estratégico de Marcas Reconocidas
            </span>
          </div>

          <div className="relative w-full flex items-center overflow-hidden py-4 mask-gradient">
            {/* Gradient Overlays for Left and Right edges to fade logos out smoothly */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-15 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-15 pointer-events-none" />

            {/* Infinite slider train */}
            <div className="flex gap-6 w-max animate-slide-infinite">
              {[...brands, ...brands, ...brands].map((brand, idx) => (
                <div
                  key={`${brand.name}-${idx}`}
                  className="glass-panel hover:border-cyan-500/30 p-5 rounded-2xl flex flex-col items-center justify-center text-center group transition-all duration-300 w-[180px] sm:w-[200px] shrink-0"
                >
                  {/* Logotype container with hover color effects */}
                  <div className="h-14 w-full bg-slate-950/40 rounded-xl flex items-center justify-center p-2 mb-3 relative border border-slate-800/30 group-hover:border-cyan-500/20 group-hover:bg-slate-900/40 transition-all duration-300 overflow-hidden">
                    <img
                      src={brand.logo}
                      alt={`Logotipo de ${brand.name}`}
                      className="max-h-10 max-w-full object-contain filter grayscale opacity-40 brightness-[1.2] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  
                  <span className="text-xs font-bold text-slate-300 group-hover:text-accent-cyan transition-colors truncate w-full">
                    {brand.name}
                  </span>
                  
                  <span className="text-[9px] text-slate-500 font-mono uppercase tracking-wider mt-1 block">
                    {brand.type} • {brand.origin}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox / Visor de Imagen */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
          >
            {/* Top Bar inside lightbox */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-[110]">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-accent-cyan font-bold leading-tight">
                  Visor de Tableros Eléctricos
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  Imagen {selectedImageIndex + 1} de {panelImages.length} • Proyecto {panelImages[selectedImageIndex]}
                </span>
              </div>
              
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-red-500/50 hover:text-red-400 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Left navigation arrow */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 w-12 h-12 rounded-full bg-slate-900/60 border border-cyan-500/10 hover:border-cyan-500/40 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer z-[110]"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image View */}
            <div className="relative max-w-4xl max-h-[75vh] w-full flex items-center justify-center p-2 z-[105]">
              <motion.img
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={`/FOTO DE TABLEROS/${panelImages[selectedImageIndex]}`}
                alt="Proyecto Tablero Eléctrico"
                className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-cyan-500/15 shadow-[0_0_50px_rgba(0,240,255,0.15)]"
              />
            </div>

            {/* Right navigation arrow */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 w-12 h-12 rounded-full bg-slate-900/60 border border-cyan-500/10 hover:border-cyan-500/40 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer z-[110]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Action Bar / Bottom Toolbar */}
            <div className="absolute bottom-6 flex flex-col sm:flex-row gap-4 items-center justify-center z-[110]">
              <a
                href={`https://wa.me/51979798186?text=Hola,%20deseo%20cotizar%20un%20tablero%20eléctrico%20similar%20al%20del%20proyecto%20${encodeURIComponent(panelImages[selectedImageIndex].split('.')[0])}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white glow-btn-cyan transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white/10" />
                Cotizar Tablero Similar por WhatsApp
              </a>

              <a
                href={`/FOTO DE TABLEROS/${panelImages[selectedImageIndex]}`}
                download
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 border border-slate-800 hover:border-cyan-500/30 text-slate-300 hover:text-white transition-all"
              >
                <Download className="w-4 h-4" />
                Descargar Imagen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
