'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Productos', href: '/productos' },
    { name: 'Ventajas', href: '/ventajas' },
    { name: 'Clientes', href: '/clientes' },
    { name: 'Contacto', href: '/contacto' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-3' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-panel rounded-2xl px-4 sm:px-6 py-2 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'bg-slate-950/80 shadow-lg border-cyan-500/20' : 'bg-slate-950/45 border-transparent'
        }`}>
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border border-cyan-500/30 overflow-hidden group-hover:border-cyan-400 transition-colors">
              <svg 
                className="w-6 h-6 text-accent-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.7)] group-hover:scale-110 transition-transform duration-300"
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                {/* Custom circular electric bolt icon similar to the logo */}
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5h-2v-6h2v6zm0-8h-2V7h2v2.5z" className="opacity-20" />
                <path d="M11.5 3C6.75 3 3 6.75 3 11.5S6.75 20 11.5 20c3.48 0 6.5-2.07 7.84-5.07l-1.39-.62A7.447 7.447 0 0 1 11.5 18.5C7.63 18.5 4.5 15.37 4.5 11.5S7.63 4.5 11.5 4.5c2.95 0 5.49 1.83 6.53 4.43l1.39-.62C18 5.07 14.98 3 11.5 3z" />
                <path d="M12.5 5.5l-5 7h4v6l5-7h-4z" />
              </svg>
              {/* Spinning grid dots effect */}
              <div className="absolute inset-0 border border-dashed border-cyan-500/20 rounded-full group-hover:rotate-45 transition-transform duration-1000" />
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-wider text-glow-cyan">
                <span className="text-accent-cyan">TABLEROS</span>{' '}
                <span className="text-slate-100">INDUSTRIALES S.A.C.</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold leading-tight">
                Automatización Industriales
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-200 py-1 border-b ${
                  isActive(item.href)
                    ? 'text-accent-cyan text-glow-cyan border-accent-cyan/70'
                    : 'text-slate-300 hover:text-accent-cyan hover:text-glow-cyan border-transparent hover:border-accent-cyan/30'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:973380801" 
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-accent-cyan animate-pulse" />
              973 380 801
            </a>
            <a
              href="https://wa.me/51979798186?text=Hola,%20deseo%20cotizar%20un%20tablero%20eléctrico%20industrial%20a%20medida."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white glow-btn-cyan"
            >
              <MessageSquare className="w-4 h-4 fill-white/10" />
              Cotizar Tablero
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-accent-cyan transition-colors p-1"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 px-4 mt-2"
          >
            <div className="glass-panel rounded-2xl p-4 flex flex-col gap-3 bg-slate-950/95">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-all ${
                    isActive(item.href)
                      ? 'text-accent-cyan bg-cyan-500/10'
                      : 'text-slate-300 hover:text-accent-cyan hover:bg-cyan-500/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <hr className="border-cyan-500/15 my-1" />
              
              <div className="flex flex-col gap-3 px-3 pb-2 pt-1">
                <a 
                  href="tel:973380801" 
                  className="flex items-center gap-3 text-sm font-semibold text-slate-300"
                >
                  <Phone className="w-4 h-4 text-accent-cyan" />
                  Atención: 973 380 801
                </a>
                <a
                  href="https://wa.me/51979798186?text=Hola,%20deseo%20cotizar%20un%20tablero%20eléctrico%20industrial%20a%20medida."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                >
                  <MessageSquare className="w-4 h-4" />
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
