import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Contact } from '../components/Contact';
import { B2BQuoteForm } from '../components/B2BQuoteForm';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: "Contacto y Cotizaciones | AUTOMATIZACION INDUSTRIAL",
  description: "Solicite una cotización a medida para su tablero eléctrico industrial. Atención técnica en Lima, Perú. Escríbanos por correo, teléfono o WhatsApp.",
};

export default function ContactoPage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-1 pt-20">
        <Contact />
        <B2BQuoteForm />
      </main>
      <Footer />
    </div>
  );
}
