// Importa React y el hook `useState` para manejar el estado del componente.
import React, { useState } from 'react';

// Define el componente funcional Card que recibe `titulo`, `imagen` y `descripcion` como props.
function Card({ titulo, imagen, descripcion }) {
  // `mostrarDescripcion` es un estado booleano que controla si la descripción de la tarjeta está visible.
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  // `handleClick` es una función que alterna el estado `mostrarDescripcion` al hacer clic en la tarjeta.
  const handleClick = () => {
    setMostrarDescripcion(!mostrarDescripcion);
  };

  return (
    // Contenedor principal de la tarjeta con estilos y comportamiento de clic.
    <div
      onClick={handleClick} // Al hacer clic, se activa `handleClick`.
      className={`bg-gray-800 rounded-xl p-4 shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center
      ${mostrarDescripcion ? 'h-auto' : 'h-[220px]'} overflow-hidden`} // Clases dinámicas para controlar la altura y el desbordamiento.
    >
      <img
        src={imagen} // Fuente de la imagen.
        alt="imagen publicitaria de torneo" // Texto alternativo para la imagen.
        className="w-24 h-24 object-cover md:w-32 md:h-32 rounded-lg shadow-md" // Estilos para la imagen.
      />
      <p className="mt-4 text-lg font-semibold text-blue-300 text-center">{titulo}</p> {/* Título de la tarjeta. */}
      <div
        // Contenedor de la descripción, con transición de opacidad y altura máxima para animación.
        className={`transition-opacity duration-300 mt-2 text-sm text-white text-center ${
          mostrarDescripcion ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0' // Controla la opacidad y altura máxima.
        } overflow-hidden`}
      >
        {descripcion} {/* Contenido de la descripción. */}
      </div>
    </div>
  );
}

// Exporta Card como el componente predeterminado.
export default Card;


