import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Advantages } from '../components/Advantages';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: "Tableros Eléctricos con Calidad Certificada | Nuestras Ventajas",
  description: "Descubre nuestras ventajas competitivas: los mejores tableros industriales con componentes originales de marcas líderes, ingeniería certificada y soporte técnico postventa.",
};

export default function VentajasPage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-1 pt-20">
        <Advantages />
      </main>
      <Footer />
    </div>
  );
}
