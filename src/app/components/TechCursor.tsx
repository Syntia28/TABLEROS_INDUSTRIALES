'use client';
import React, { useEffect, useRef, useState } from 'react';

export function TechCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detect touch device
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      
      // Update position of dot and ring immediately using hardware-accelerated transforms
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'SELECT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('a') ||
          target.closest('button') ||
          target.closest('.cursor-pointer') ||
          target.closest('[role="button"]'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    
    // Hide default cursor across the document
    const styleElement = document.createElement('style');
    styleElement.id = 'tech-cursor-hide-default';
    styleElement.innerHTML = `
      body, a, button, input, select, textarea, .cursor-pointer, [role="button"] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      const el = document.getElementById('tech-cursor-hide-default');
      if (el) el.remove();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Central Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent-cyan rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-[60ms] ease-out"
        style={{ willChange: 'transform' }}
      />
      {/* Outer Reticle Ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 ease-out flex items-center justify-center ${
          isHovered
            ? 'w-14 h-14 bg-cyan-500/10 border-cyan-400 scale-110 shadow-[0_0_15px_rgba(0,240,255,0.35)]'
            : 'w-9 h-9 border-cyan-500/25'
        }`}
        style={{ willChange: 'transform' }}
      >
        {/* Crosshair lines inside the ring */}
        <div className="absolute w-1.5 h-[1px] bg-accent-cyan/50 left-0" />
        <div className="absolute w-1.5 h-[1px] bg-accent-cyan/50 right-0" />
        <div className="absolute w-[1px] h-1.5 bg-accent-cyan/50 top-0" />
        <div className="absolute w-[1px] h-1.5 bg-accent-cyan/50 bottom-0" />
      </div>
    </>
  );
}
