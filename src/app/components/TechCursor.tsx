'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  life: number;
}

export function TechCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const outerRingRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  const mouse = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const outerPos = useRef({ x: -100, y: -100 });
  const particleId = useRef(0);
  const lastParticleTime = useRef(0);

  const addParticle = useCallback((x: number, y: number) => {
    const now = Date.now();
    if (now - lastParticleTime.current < 28) return; // limit density
    lastParticleTime.current = now;

    const id = particleId.current++;
    setParticles((prev) => {
      const next = [
        ...prev,
        {
          id,
          x,
          y,
          opacity: 0.7,
          scale: 1,
          life: 1,
        },
      ];
      // keep max 14 particles
      return next.slice(-14);
    });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    setIsVisible(true);

    // Hide default cursor
    const style = document.createElement('style');
    style.id = 'tech-cursor-style';
    style.innerHTML = `
      body, a, button, input, select, textarea, [role="button"], .cursor-pointer, [class*="cursor-"] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      addParticle(e.clientX, e.clientY);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'SELECT' ||
        target.tagName === 'TEXTAREA' ||
        !!target.closest('a') ||
        !!target.closest('button') ||
        !!target.closest('[role="button"]') ||
        !!target.closest('.cursor-pointer');

      setIsHovered(interactive);
    };

    const onMouseDown = () => {
      setIsClicking(true);
      // trigger ripple
      if (rippleRef.current) {
        rippleRef.current.style.left = `${mouse.current.x}px`;
        rippleRef.current.style.top = `${mouse.current.y}px`;
        rippleRef.current.classList.remove('animate-ripple');
        // force reflow
        void rippleRef.current.offsetWidth;
        rippleRef.current.classList.add('animate-ripple');
      }
    };

    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    let rafId: number;

    const animate = () => {
      // Lerp factors
      const lerpRing = 0.16;
      const lerpOuter = 0.09;

      ringPos.current.x += (mouse.current.x - ringPos.current.x) * lerpRing;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * lerpRing;

      outerPos.current.x += (mouse.current.x - outerPos.current.x) * lerpOuter;
      outerPos.current.y += (mouse.current.y - outerPos.current.y) * lerpOuter;

      // Instant core
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      }

      // Main ring
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      // Outer energy ring
      if (outerRingRef.current) {
        outerRingRef.current.style.transform = `translate3d(${outerPos.current.x}px, ${outerPos.current.y}px, 0)`;
      }

      // Soft aura
      if (auraRef.current) {
        const ax = outerPos.current.x + (mouse.current.x - outerPos.current.x) * 0.3;
        const ay = outerPos.current.y + (mouse.current.y - outerPos.current.y) * 0.3;
        auraRef.current.style.transform = `translate3d(${ax}px, ${ay}px, 0)`;
      }

      // Update particles life
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            opacity: p.opacity * 0.92,
            scale: p.scale * 0.96,
            life: p.life - 0.035,
          }))
          .filter((p) => p.life > 0)
      );

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(rafId);
      document.getElementById('tech-cursor-style')?.remove();
    };
  }, [addParticle]);

  if (!isVisible) return null;

  return (
    <>
      {/* Soft outer aura / bloom */}
      <div
        ref={auraRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9996] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-700 ease-out
          ${isHovered
            ? 'w-32 h-32 bg-cyan-400/15 blur-2xl scale-125'
            : 'w-20 h-20 bg-cyan-500/8 blur-xl'
          }`}
        style={{ willChange: 'transform' }}
      />

      {/* Outer slow energy ring */}
      <div
        ref={outerRingRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-500 ease-out
          ${isHovered
            ? 'w-24 h-24 border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.25)]'
            : 'w-14 h-14 border-cyan-500/15'
          }
          ${isClicking ? 'scale-90' : 'scale-100'}
        `}
        style={{ willChange: 'transform' }}
      >
        <div className={`absolute inset-0 rounded-full border border-dashed border-cyan-300/20 ${isHovered ? 'animate-spin-slow' : ''}`} />
      </div>

      {/* Main reticle */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 ease-out flex items-center justify-center
          ${isHovered
            ? 'w-16 h-16 border-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.6),0_0_50px_rgba(34,211,238,0.3)] bg-cyan-400/10'
            : 'w-11 h-11 border-cyan-400/40'
          }
          ${isClicking ? 'scale-75 border-white' : 'scale-100'}
        `}
        style={{ willChange: 'transform' }}
      >
        {/* Rotating dashed ring */}
        <div
          className={`absolute inset-[-4px] rounded-full border border-dashed border-cyan-300/50
            ${isHovered ? 'animate-spin-reverse' : ''}`}
        />

        {/* Crosshair */}
        <div className="absolute w-4 h-[1.5px] bg-cyan-300/80 left-0.5 rounded-full" />
        <div className="absolute w-4 h-[1.5px] bg-cyan-300/80 right-0.5 rounded-full" />
        <div className="absolute w-[1.5px] h-4 bg-cyan-300/80 top-0.5 rounded-full" />
        <div className="absolute w-[1.5px] h-4 bg-cyan-300/80 bottom-0.5 rounded-full" />

        {/* Center micro dot */}
        <div className={`w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#fff] transition-transform duration-200 ${isClicking ? 'scale-150' : ''}`} />
      </div>

      {/* Core glowing dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150
          ${isHovered
            ? 'w-3 h-3 bg-white shadow-[0_0_15px_#22d3ee,0_0_30px_#22d3ee,0_0_45px_rgba(34,211,238,0.5)]'
            : 'w-2 h-2 bg-cyan-300 shadow-[0_0_10px_#22d3ee]'
          }
          ${isClicking ? 'scale-50' : 'scale-100'}
        `}
        style={{ willChange: 'transform' }}
      />

      {/* Particle trail */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cyan-400 pointer-events-none z-[9995] -translate-x-1/2 -translate-y-1/2"
          style={{
            transform: `translate3d(${p.x}px, ${p.y}px, 0) scale(${p.scale})`,
            opacity: p.opacity,
            boxShadow: `0 0 ${6 * p.opacity}px #22d3ee`,
            willChange: 'transform, opacity',
          }}
        />
      ))}

      {/* Click ripple */}
      <div
        ref={rippleRef}
        className="fixed top-0 left-0 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-300 pointer-events-none z-[9994] opacity-0"
      />
    </>
  );
}