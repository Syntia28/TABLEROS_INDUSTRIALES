'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, ShieldCheck, Sparkles, Wrench, CheckCircle2, Zap, Layers } from 'lucide-react';

export function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState<'acabados' | 'tecnica' | 'normas'>('acabados');

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className="relative py-20 sm:py-28 bg-slate-950 overflow-hidden border-t border-cyan-500/10">
      {/* Luces y Luces de Fondo */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs sm:text-sm font-semibold text-cyan-300 mb-4"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            DEMOSTRACIÓN TÉCNICA EN VIDEO
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Excelencia en <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 bg-clip-text text-transparent">Acabados y Técnica</span> Especializada
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm sm:text-lg text-slate-300"
          >
            Observa el nivel de detalle, la precisión de ensamblaje y los rigurosos estándares de terminación que aplicamos en cada tablero eléctrico industrial.
          </motion.p>
        </div>

        {/* Grilla Principal: Video a la Izquierda, Pestañas/Puntos Fuertes a la Derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Reproductor de Video Personalizado */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] group-hover:border-cyan-400/60 transition-all">
              
              {/* HTML5 Video */}
              <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full aspect-video object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/VIDEO/VIDEO.mp4" type="video/mp4" />
                Tu navegador no soporta reproducción de videos HTML5.
              </video>

              {/* Tag Superior Sobrepuesto */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-cyan-400/30 text-xs font-semibold text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                VIDEO OFICIAL TABLEROS INDUSTRIALES
              </div>

              {/* Overlay de Gradiente Inferior para Controles */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Barra de Controles Flotante */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between px-4 py-3 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/20">
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 transition-colors cursor-pointer"
                    title={isPlaying ? 'Pausar' : 'Reproducir'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
                    title={isMuted ? 'Activar sonido' : 'Silenciar'}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>

                  <span className="text-xs font-medium text-slate-300 hidden sm:inline-block">
                    {isPlaying ? 'Reproduciendo video...' : 'En pausa'}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-400/20">
                    HD 1080P
                  </span>

                  <button
                    onClick={handleFullscreen}
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
                    title="Pantalla Completa"
                  >
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Tarjetas Interactivas & Explicación Técnica */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Pestañas de Selección */}
            <div className="flex gap-2 p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
              <button
                onClick={() => setActiveTab('acabados')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'acabados'
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Acabados
              </button>
              <button
                onClick={() => setActiveTab('tecnica')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'tecnica'
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Técnica Armado
              </button>
              <button
                onClick={() => setActiveTab('normas')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'normas'
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Pruebas IEC
              </button>
            </div>

            {/* Contenido Dinámico Según Pestaña */}
            <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/80 border border-cyan-500/20 backdrop-blur-sm space-y-5">
              {activeTab === 'acabados' && (
                <>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Acabados de Alta Resistencia</h3>
                      <p className="text-xs text-cyan-400">Pintura Electrostática & Hermeticidad IP65/IP66</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Nuestros tableros cuentan con un tratamiento anticorrosivo industrial y pintura al horno termoconvertible en polvo, garantizando máxima resistencia a la humedad, polvos industriales y sustancias agresivas.
                  </p>

                  <ul className="space-y-3 pt-2 border-t border-slate-800">
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong>Recubrimiento en polvo:</strong> Estabilidad de color, resistencia al impacto y protección UV.</span>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong>Sellado hermético de goma neumática:</strong> Protección eficaz contra ingreso de agua y sedimentos.</span>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong>Estructura robusta:</strong> Envolventes en plancha de acero LAF de 1.5mm a 2.0mm de espesor.</span>
                    </li>
                  </ul>
                </>
              )}

              {activeTab === 'tecnica' && (
                <>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
                      <Wrench className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Brindamos Dicha Técnica Especializada</h3>
                      <p className="text-xs text-cyan-400">Peinado de Cables & Barras de Cobre Electrolítico</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Aplicamos una ingeniería de detalle minuciosa en el canaleteado y cableado interno. Cada conductor es ruteado de manera ordenada con identificación numérica termocontraíble según esquema unifilar.
                  </p>

                  <ul className="space-y-3 pt-2 border-t border-slate-800">
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong>Cableado técnico pulcro:</strong> Canales ranurados de alta densidad sin cables sueltos.</span>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong>Barras de Cobre 99.9% pureza:</strong> Dimensionadas para soportar corrientes de cortocircuito.</span>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong>Identificación total:</strong> Borneras numeradas y marcación clara para fácil mantenimiento.</span>
                    </li>
                  </ul>
                </>
              )}

              {activeTab === 'normas' && (
                <>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Certificación & Pruebas IEC 61439</h3>
                      <p className="text-xs text-cyan-400">Garantía de Operación Segura e Ininterrumpida</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Cada tablero fabricado en nuestros talleres pasa por rigurosas pruebas dieléctricas, verificación de aperturas térmicas e inspección de torque antes del despacho final.
                  </p>

                  <ul className="space-y-3 pt-2 border-t border-slate-800">
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong>Prueba Dieléctrica (Megado):</strong> Verificación estricta del nivel de aislamiento.</span>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong>Simulación de Maniobras:</strong> Verificación de lógica de control automatizado y PLC.</span>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong>Dossier de Calidad:</strong> Certificados de componentes originales y esquemas unifilares.</span>
                    </li>
                  </ul>
                </>
              )}

              {/* Botón de Acción Directa */}
              <div className="pt-4">
                <a
                  href="https://wa.me/51979798186?text=Hola,%20vi%20el%20video%20de%20acabados%20y%20deseo%20asesoría%20técnica%20para%20mi%20proyecto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/30 transition-all cursor-pointer"
                >
                  <Zap className="w-4 h-4 fill-current" />
                  Solicitar Cotización con Esta Técnica
                </a>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
