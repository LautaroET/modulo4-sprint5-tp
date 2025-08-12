// src/components/RefugioCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function RefugioCard({ refugio }) {
  return (
    <Link to={`/refugios/${refugio.id}`} className="block h-full">
      <div className="bg-white p-6 rounded-2xl text-gray-800 shadow-xl transition-transform duration-300 hover:scale-105 dark:bg-gray-800 dark:text-gray-100 dark:shadow-2xl flex flex-col h-full">
        {/* Contenedor de la imagen */}
        <div className="relative h-48 mb-4 overflow-hidden rounded-xl">
          <img
            src={refugio.image}
            alt={`Imagen del refugio ${refugio.name}`}
            className="w-full h-full object-cover"
          />
          {/* Etiqueta de capacidad en la esquina */}
          <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            Capacidad: {refugio.capacity}
          </span>
        </div>

        {/* Cuerpo de la tarjeta */}
        <div className="text-left flex-grow">
          <h3 className="text-2xl md:text-3xl font-extrabold text-indigo-700 dark:text-blue-400 mb-4 break-words">
            {refugio.name}
          </h3>
          <div className="space-y-3 text-gray-600 dark:text-gray-300">
            <p className="flex items-center gap-2">
              <i className="bi bi-geo-alt-fill text-xl text-indigo-500"></i>
              <span className="font-medium">Ubicación: <strong>{refugio.address}</strong></span>
            </p>
            <p className="flex items-center gap-2">
              <i className="bi bi-telephone-fill text-xl text-indigo-500"></i>
              <span className="font-medium">Teléfono: {refugio.phone}</span>
            </p>
            <p className="flex items-center gap-2">
              <i className="bi bi-envelope-fill text-xl text-indigo-500"></i>
              <a href={`mailto:${refugio.email}`} className="font-medium hover:underline break-all" onClick={(e) => e.stopPropagation()}>
                {refugio.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RefugioCard;








