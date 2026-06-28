import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Clients } from '../components/Clients';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: "Nuestros Clientes y Aliados | AUTOMATIZACION INDUSTRIAL",
  description: "Respaldando proyectos de gran envergadura en sectores de alta exigencia: industrial, minero, inmobiliario, comercial, pesca e infraestructura.",
};

export default function ClientesPage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-1 pt-20">
        <Clients />
      </main>
      <Footer />
    </div>
  );
}
