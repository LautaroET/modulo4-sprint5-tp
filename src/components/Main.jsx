// Importa React.
import React from 'react'
// Importa los datos de las noticias desde un archivo de utilidades.
import { noticia } from '../utils/noticia'
// Importa el componente Card.
import Card from './Card'

// Define el componente funcional Main.
function Main() {
  return (
    // Contenedor principal del contenido, con fondo gris oscuro y texto blanco.
    <main className="bg-gray-900 text-white min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto"> {/* Contenedor centrado y con ancho máximo. */}
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-400">
          Noticias {/* Título de la sección. */}
        </h1>
        {/* Contenedor de la cuadrícula para las tarjetas de noticias, responsivo. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Mapea sobre el array `noticia` para renderizar una `Card` por cada noticia. */}
          {noticia.map((noticia) => (
            <Card
              key={noticia.id} // `key` única para cada elemento de la lista.
              titulo={noticia.titulo} // Pasa el título como prop.
              imagen={noticia.image} // Pasa la URL de la imagen como prop.
              descripcion={noticia.descripcion} // Pasa la descripción como prop.
            />
          ))}
        </div>
      </div>
    </main>
  )
}

// Exporta Main como el componente predeterminado.
export default Main
