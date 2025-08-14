import React, { useContext } from 'react';
import { FavoritosContext } from '../context/FavoritosContext';

const MascotaCard = ({ mascota }) => {
  const { agregarAFavoritos, eliminarDeFavoritos, favoritos } = useContext(FavoritosContext);

  const isFavorite = favoritos.some((fav) => fav.id === mascota.id);

  const handleClick = (e) => {
    e.stopPropagation(); // Evita que el clic en el corazón active cualquier acción de la tarjeta (si la hubiera)
    isFavorite ? eliminarDeFavoritos(mascota.id) : agregarAFavoritos(mascota);
  };

  const ariaLabel = isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos";

  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      {/* Botón de corazón de favorito */}
      <button
        onClick={handleClick}
        className={`absolute top-3 right-3 p-2 rounded-full z-10 transition-colors duration-300
          ${isFavorite
            ? "text-red-500 bg-white/70 dark:bg-gray-700/70"
            : "text-gray-400 bg-white/70 dark:bg-gray-700/70 hover:text-red-500"
          }`}
        aria-label={ariaLabel}
      >
        <i className={`bi bi-heart${isFavorite ? "-fill" : ""} text-lg`}></i>
      </button>

      {/* Imagen de la mascota */}
      <div className="relative w-full h-48 sm:h-52 overflow-hidden">
        <img
          src={mascota.image}
          alt={`Imagen de ${mascota.name}`}
          className="w-full h-full object-cover object-center"
        />
        {/* Status */}
        <div className={`absolute bottom-0 left-0 px-3 py-1 rounded-tr-xl text-sm font-semibold text-white
          ${mascota.status === 'En adopción' ? 'bg-green-500' : 'bg-yellow-500'}`}>
          {mascota.status}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h4 className="text-xl font-bold text-indigo-700 dark:text-blue-400 mb-1">
          {mascota.name}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{mascota.type} - {mascota.breed}</p>

        {/* Detalles principales */}
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
          <p><i className="bi bi-clock-fill text-indigo-500 mr-2"></i>{mascota.age} años</p>
          <p><i className={`bi bi-gender-${mascota.gender.toLowerCase()} text-indigo-500 mr-2`}></i>{mascota.gender}</p>
          <p><i className="bi bi-tag-fill text-indigo-500 mr-2"></i>{mascota.size}</p>
          <p className="flex items-center">
            <i className={`bi bi-heart-fill mr-2 ${mascota.sterilized ? 'text-green-500' : 'text-gray-400'}`}></i>
            {mascota.sterilized ? 'Esterilizado' : 'Sin esterilizar'}
          </p>
          <p className="flex items-center">
            <i className={`bi bi-shield-fill-plus mr-2 ${mascota.vaccinated ? 'text-green-500' : 'text-gray-400'}`}></i>
            {mascota.vaccinated ? 'Vacunado' : 'Sin vacunar'}
          </p>
        </div>

        {/* Descripción corta */}
        <p className="text-sm text-gray-500 dark:text-gray-400 flex-grow">
          <span className="font-semibold">Personalidad:</span> {mascota.personality}
        </p>
      </div>
    </div>
  );
};

export default MascotaCard;