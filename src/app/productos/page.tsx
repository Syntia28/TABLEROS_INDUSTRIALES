import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Products } from '../components/Products';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: "Los Mejores Tableros Industriales y Equipamiento | Catálogo y Galería",
  description: "Descubre los mejores tableros industriales fabricados a medida (distribución, fuerza y automatización) y equipamiento original de marcas líderes en Lima, Perú.",
};

export default function ProductosPage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-1 pt-20">
        <Products />
      </main>
      <Footer />
    </div>
  );
}
