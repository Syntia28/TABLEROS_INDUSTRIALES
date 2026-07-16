import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesPreview } from './components/ServicesPreview';
import { ProductsPreview } from './components/ProductsPreview';
import { AdvantagesPreview } from './components/AdvantagesPreview';
import { Clients } from './components/Clients';
import { Testimonials } from './components/Testimonials';
import { ContactPreview } from './components/ContactPreview';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Navigation Bar */}
      <Navbar />

      {/* Page Content Layout */}
      <main className="flex-1">
        {/* Welcome Hero / Animated Logo */}
        <Hero />

        {/* Why Choose Us Workflow Process */}
        <WhyChooseUs />

        {/* Engineering Services Preview */}
        <ServicesPreview />

        {/* Products Brief Preview */}
        <ProductsPreview />

        {/* Advantages Brief Preview */}
        <AdvantagesPreview />

        {/* Clients Sliders */}
        <Clients />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact Brief Preview */}
        <ContactPreview />
      </main>

      {/* Main Footer */}
      <Footer />
    </div>
  );
}

