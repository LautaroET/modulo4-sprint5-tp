// Importa React.
import React, { useState } from 'react'

// Define el componente funcional Footer.
function Footer() {
  const [cambiarColor, setCambiarColor] = useState(false)
  const handleClick = () =>{
    setCambiarColor(!cambiarColor)
  }
  return (
    // Pie de página con fondo azul oscuro, centrado y con sombra interior.
    <footer className={` py-8 text-center text-gray-300 shadow-inner ${cambiarColor ? 'bg-red-800' : "bg-blue-950"  }` }
      onClick={handleClick}
    >
      <div className="container mx-auto px-4"> {/* Contenedor para centrar y añadir padding lateral */}
        <p className="text-lg md:text-xl font-medium tracking-wide"> {/* Tamaño de texto responsivo y ajuste de fuente */}
          &copy; <span class="text-sky-300">Catamarca Ajedrez</span> - Desarrollado por <span class="text-sky-300">Lautaro Tapia</span> - 2025
        </p>
        <p className="text-sm mt-1 text-gray-400">
          Módulo 4 - Sprint 1 Trabajo Practico
        </p>
      </div>
</footer>
  )
}

// Exporta Footer como el componente predeterminado.
export default Footer
