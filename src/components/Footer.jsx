// Importa React y el hook useContext.
import React, { useContext } from 'react';
// Importa el contexto del tema.
import { TemaContext } from '../context/TemaContext';

function Footer() {
  // Accede al estado del tema desde el contexto.
  const { temaOscuro } = useContext(TemaContext);

  // Clases dinámicas para el footer
  const footerClasses = temaOscuro
    ? 'py-8 text-center text-gray-300 w-full bg-gray-900 relative shadow-inner' // Tema oscuro
    : 'py-8 text-center text-gray-300 w-full bg-blue-950 relative shadow-inner'; // Tema claro

  return (
    <footer className={footerClasses}> {/* Usa la clase dinámica */}
      <div className="container mx-auto px-4">
        <p className="text-lg md:text-xl font-medium tracking-wide">
          &copy; <span className="text-sky-300">Catamarca Ajedrez</span> - Desarrollado por <span className="text-sky-300">Lautaro Tapia</span> - 2025
        </p>
        <p className="text-sm mt-1 text-gray-400">
          Módulo 4 - Sprint 5 Trabajo Practico
        </p>
      </div>
    </footer>
  );
}

export default Footer;
