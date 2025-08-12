// Importa React y los hooks `useState` y `useContext`.
import React, { useState, useContext } from 'react';
// Importa los enlaces de la barra de navegación.
import { navbarLink } from '../utils/link';
// Importa el contexto del tema.
import { TemaContext } from "../context/TemaContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { temaOscuro, alternarTema } = useContext(TemaContext);

  // Clases dinámicas para el header
  const headerClasses = temaOscuro
    ? 'w-full bg-gray-900 shadow-lg relative' // Tema oscuro
    : 'w-full bg-blue-950 shadow-lg relative'; // Tema claro

  const textClasses = temaOscuro
    ? 'text-white text-2xl font-extrabold tracking-wide' // Tema oscuro
    : 'text-white text-2xl font-extrabold tracking-wide'; // Ambas clases son iguales, puedes dejarlas así o eliminarlas.

  return (
    <nav className={headerClasses}> {/* Usa la clase dinámica */}
      <div className='flex justify-between items-center px-4 py-3 sm:px-12'>
        <div className='flex items-center gap-3'>
          <img
            src={'/peon.png'}
            alt='Logo de Ajedrez de Catamarca'
            className='w-16 h-16 object-contain'
          />
          <p className={textClasses}>
            Catamarca <span className='text-sky-300'>Ajedrez</span>
          </p>
          <button
            onClick={alternarTema}
            className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300 hover:scale-105 transition-transform duration-300"
          >
            {temaOscuro ? (
              <i className="bi bi-sun-fill text-xl"></i>
            ) : (
              <i className="bi bi-moon-fill text-xl"></i>
            )}
          </button>
        </div>

        <button
          className='md:hidden text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300'
          onClick={toggleMenu}
          aria-label='Abrir menú de navegación'
        >
          <svg
            className='w-7 h-7'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className='hidden md:block'>
          <ul className='flex space-x-6'>
            {navbarLink.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className='text-white text-base font-medium hover:text-sky-300 transition-colors duration-300 transform hover:scale-105 inline-block'
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`md:hidden absolute left-0 w-full z-10 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } ${temaOscuro ? 'bg-gray-800' : 'bg-blue-900'}`} // Clases dinámicas para el menú móvil
      >
        <ul className='flex flex-col py-4 px-4'>
          {navbarLink.map((link) => (
            <li key={link.id} className='py-3 text-center border-b border-blue-800 last:border-b-0'>
              <a
                href={link.link}
                className='text-white text-lg font-semibold hover:text-sky-300 transition-colors duration-200 block w-full'
                onClick={toggleMenu}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;