'use client';
import React from 'react';

export function FloatingWhatsapp() {
  const phoneNumber = '51979798186';
  const message = 'Hola, deseo cotizar tableros eléctricos y protecciones industriales.';
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      {/* Outer Pulse rings */}
      <span className="absolute inline-flex h-16 w-16 animate-ping rounded-full bg-green-500/30 opacity-75" />
      <span className="absolute inline-flex h-12 w-12 animate-pulse rounded-full bg-green-500/50" />
      
      {/* WhatsApp Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 text-white shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all duration-300 hover:scale-110 group cursor-pointer"
      >
        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.799.002-2.597-1.012-5.04-2.859-6.887C16.376 2.073 13.931.859 11.99.859c-5.405 0-9.804 4.402-9.808 9.808-.002 1.76.46 3.473 1.336 4.988l-.982 3.59 3.69-.968zm10.741-6.177c-.29-.145-1.716-.848-1.982-.944-.266-.096-.46-.145-.653.145-.193.29-.747.944-.916 1.137-.168.193-.337.217-.627.072-2.285-1.144-3.774-2.07-5.28-4.65-.398-.682.398-.633 1.14-2.128.12-.24.06-.45-.03-.595-.09-.145-.653-1.572-.895-2.152-.236-.569-.475-.492-.653-.5-.168-.008-.362-.01-.555-.01s-.507.072-.772.361c-.266.29-1.014.992-1.014 2.417s1.037 2.798 1.18 2.993c.143.195 2.046 3.123 4.956 4.38.692.3 1.232.479 1.652.612.697.221 1.33.19 1.83.115.557-.083 1.716-.7 1.961-1.374.246-.674.246-1.253.173-1.374-.073-.12-.266-.193-.556-.339z" />
        </svg>

        {/* Hover label */}
        <span className="absolute right-16 scale-0 bg-slate-900 text-slate-100 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-800 shadow-xl opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
          Conversar con Ingeniería
        </span>
      </a>
    </div>
  );
}
