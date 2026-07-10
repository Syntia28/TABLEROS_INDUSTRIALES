'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Preloader } from './Preloader';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  // Ensure client-side mounting safety
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return empty shell during SSR to prevent hydration mismatch
    // but keep children for SEO indexing if necessary
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      <div className={isLoading ? 'invisible h-screen overflow-hidden' : ''}>
        {children}
      </div>
    </>
  );
}
