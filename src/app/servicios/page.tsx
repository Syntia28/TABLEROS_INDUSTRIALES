import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Services } from '../components/Services';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: "Fabricación de Tableros Eléctricos y Servicios de Ingeniería",
  description: "Servicios especializados de diseño y fabricación de tableros industriales, automatización con PLC/HMI, planos eléctricos en CAD y mantenimiento predictivo en Lima, Perú.",
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
