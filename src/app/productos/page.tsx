import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Products } from '../components/Products';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: "Catálogo de Equipamiento y Galería de Tableros | AUTOMATIZACION INDUSTRIAL",
  description: "Equipamiento eléctrico de primera línea (Schneider, Siemens, ABB) y Galería de tableros eléctricos fabricados a medida para la industria peruana.",
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
