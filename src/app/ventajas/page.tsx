import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Advantages } from '../components/Advantages';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: "Nuestras Ventajas Competitivas | AUTOMATIZACION INDUSTRIAL",
  description: "Descubra nuestra propuesta de valor: calidad certificada, componentes premium de marcas líderes mundiales, soluciones multidisciplinarias y soporte técnico postventa.",
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
