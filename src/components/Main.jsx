// Importa React y el hook useContext.
import React, { useContext } from 'react';
// Importa el contexto del tema que creaste.
import { TemaContext } from '../context/TemaContext';

// Define el componente funcional Main.
function Main() {
  // Accede al estado del tema desde el contexto.
  const { temaOscuro } = useContext(TemaContext);

  // Define las clases de CSS dinámicamente según el estado del tema.
  const mainClasses = temaOscuro
    ? 'bg-gray-800 text-gray-100 min-h-screen py-8 px-4' // Clases para el tema oscuro
    : 'bg-white text-gray-900 min-h-screen py-8 px-4'; // Clases para el tema claro

  const h1Classes = temaOscuro
    ? 'text-4xl font-bold text-center mb-10 text-blue-400' // Clases para tema oscuro
    : 'text-4xl font-bold text-center mb-10 text-blue-600'; // Clases para tema claro

  return (
    <main className={mainClasses}> {/* Usa las clases dinámicas aquí */}
      <div className="max-w-6xl mx-auto">
        <h1 className={h1Classes}> {/* Usa las clases dinámicas para el título */}
          Noticias
        </h1>
        {/* Contenedor de la cuadrícula para las tarjetas de noticias, responsivo. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Aquí se renderizarán las tarjetas de noticias */}
        </div>
      </div>
    </main>
  );
}

// Exporta Main como el componente predeterminado.
export default Main;
