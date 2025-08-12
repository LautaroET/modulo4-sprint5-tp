// Importa React y el hook `useState` para manejar el estado del componente.
import React, { useState } from 'react';
// Importa los datos de los enlaces de la barra de navegación desde un archivo de utilidades.
import { navbarLink } from '../utils/link';

// Define el componente funcional Navbar.
const Navbar = () => {
  // `isOpen` es un estado booleano que controla la visibilidad del menú móvil. `setIsOpen` es la función para actualizarlo.
  const [isOpen, setIsOpen] = useState(false);
  // `toggleMenu` es una función para cambiar el estado `isOpen` (abrir/cerrar el menú).
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // La barra de navegación principal con estilos de Tailwind CSS.
    <nav className='w-full bg-blue-950 shadow-lg relative'> {/* Fondo Azul Medianoche: seriedad, elegancia, profundidad */}
      {/* Contenedor para la vista de escritorio, con flexbox para alinear elementos. */}
      <div className='flex justify-between items-center px-4 py-3 sm:px-12'>
        {/* Sección del logo y título de la aplicación. */}
        <div className='flex items-center gap-3'>
          <img
            src={'/public/peon.png'} // Ruta de la imagen del logo.
            alt='Logo de Ajedrez de Catamarca' // Texto alternativo para accesibilidad.
            className='w-16 h-16 object-contain' // Estilos para la imagen.
          />
          <p className='text-white text-2xl font-extrabold tracking-wide'>
            Catamarca <span className='text-sky-300'>Ajedrez</span> {/* Acento Celeste Metálico: claridad, intelecto */}
          </p>
        </div>

        {/* Botón de hamburguesa visible solo en dispositivos móviles (`md:hidden`). */}
        <button
          className='md:hidden text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300' // Ring de foco en celeste
          onClick={toggleMenu} // Llama a `toggleMenu` al hacer clic.
          aria-label='Abrir menú de navegación' // Etiqueta para accesibilidad.
        >
          {/* Icono SVG que cambia entre una hamburguesa y una 'X' dependiendo del estado `isOpen`. */}
          <svg
            className='w-7 h-7'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            {isOpen ? ( // Si el menú está abierto, muestra el icono de cerrar.
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : ( // Si el menú está cerrado, muestra el icono de hamburguesa.
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navegación de escritorio, oculta en dispositivos móviles (`hidden md:block`). */}
        <div className='hidden md:block'>
          <ul className='flex space-x-6'>
            {/* Mapea sobre los enlaces definidos en `navbarLink` para crear los elementos de la lista. */}
            {navbarLink.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link} // La URL del enlace.
                  className='text-white text-base font-medium hover:text-sky-300 transition-colors duration-300 transform hover:scale-105 inline-block' // Estilos y efectos de hover.
                >
                  {link.title} {/* Texto del enlace. */}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Vista de celular - Menú desplegable. */}
      <div
        // Clases dinámicas para controlar la visibilidad y animación del menú móvil.
        className={`md:hidden absolute left-0 w-full bg-blue-900 z-10 overflow-hidden transition-all duration-300 ease-in-out ${ // Azul más claro para contraste sutil
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0' // Controla la altura máxima y opacidad para la animación.
        }`}
      >
        <ul className='flex flex-col py-4 px-4'>
          {/* Mapea los enlaces para el menú móvil. */}
          {navbarLink.map((link) => (
            <li key={link.id} className='py-3 text-center border-b border-blue-800 last:border-b-0'> {/* Borde en azul intermedio */}
              <a
                href={link.link} // La URL del enlace.
                className='text-white text-lg font-semibold hover:text-sky-300 transition-colors duration-200 block w-full' // Estilos y efectos de hover.
                onClick={toggleMenu} // Cierra el menú al hacer clic en un enlace.
              >
                {link.title} {/* Texto del enlace. */}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// Exporta Navbar como el componente predeterminado.
export default Navbar;