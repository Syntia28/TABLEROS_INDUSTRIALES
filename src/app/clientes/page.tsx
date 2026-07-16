import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Clients } from '../components/Clients';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: "Clientes Satisfechos y Casos de Éxito de Tableros Eléctricos",
  description: "Conoce a nuestros clientes líderes en los sectores industrial, minero y construcción que confían en nuestros tableros industriales y soluciones de automatización.",
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

