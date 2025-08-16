import React, { useContext } from 'react';
import { FavoritosContext } from '../context/FavoritosContext';

const MascotaCard = ({ mascota }) => {
  const { agregarAFavoritos, eliminarDeFavoritos, favoritos } = useContext(FavoritosContext);

  const isFavorite = favoritos.some((fav) => fav.id === mascota.id);

  const handleClick = (e) => {
    e.stopPropagation();
    isFavorite ? eliminarDeFavoritos(mascota.id) : agregarAFavoritos(mascota);
  };

  const ariaLabel = isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos";

  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
      {/* Botón de corazón de favorito */}
      <button
        onClick={handleClick}
        className={`absolute top-4 right-4 p-3 rounded-full z-10 transition-colors duration-300
          ${isFavorite
            ? "text-red-500 bg-white/80 dark:bg-gray-700/80"
            : "text-gray-400 bg-white/80 dark:bg-gray-700/80 hover:text-red-500"
          } focus:outline-none focus:ring-2 focus:ring-red-500`}
        aria-label={ariaLabel}
      >
        <i className={`bi bi-heart${isFavorite ? "-fill" : ""} text-2xl`}></i>
      </button>

      {/* Imagen de la mascota */}
      <div className="relative w-full h-56 md:h-64 lg:h-72 overflow-hidden">
        <img
          src={mascota.image}
          alt={`Imagen de ${mascota.name}`}
          className="w-full h-full object-cover object-center"
        />
        {/* Status */}
        <div className={`absolute bottom-0 left-0 px-4 py-2 rounded-tr-2xl text-sm font-bold text-white uppercase tracking-wider
          ${mascota.status === 'En adopción' ? 'bg-green-500' : 'bg-yellow-500'}`}>
          {mascota.status}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-2xl font-extrabold text-indigo-700 dark:text-blue-400">
            {mascota.name}
          </h4>
        </div>

        {/* Detalles principales - con íconos de Bootstrap */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-gray-700 dark:text-gray-300 mb-5">
          <p className="flex items-center">
            <i className="bi bi-clock-fill text-indigo-500 mr-2 text-lg"></i>
            <span>{mascota.age} años</span>
          </p>
          <p className="flex items-center">
            {/* Ícono de género: bi-gender-male o bi-gender-female */}
            <i className={`bi bi-gender-${mascota.gender.toLowerCase()} text-indigo-500 mr-2 text-lg`}></i>
            <span className="capitalize">{mascota.gender}</span>
          </p>
          <p className="flex items-center">
            <i className="bi bi-tag-fill text-indigo-500 mr-2 text-lg"></i>
            <span>{mascota.size}</span>
          </p>
          {/* Personalidad ahora está aquí */}
          <p className="flex items-center col-span-2">
            <i className="bi bi-person-fill text-indigo-500 mr-2 text-lg"></i>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Personalidad:</span>
            <span className="ml-1 text-gray-500 dark:text-gray-400">{mascota.personality}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MascotaCard;