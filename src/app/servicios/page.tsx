import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Services } from '../components/Services';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: "Servicios de Ingeniería Eléctrica | AUTOMATIZACION INDUSTRIAL",
  description: "Diseño y fabricación personalizada de tableros eléctricos (distribución, fuerza, control de motores) y automatización con PLC/HMI. Planos eléctricos en CAD y mantenimiento.",
};

export default function ServiciosPage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-1 pt-20">
        <WhyChooseUs />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
