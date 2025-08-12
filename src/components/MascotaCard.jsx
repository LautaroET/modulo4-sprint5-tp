// src/components/MascotaCard.jsx
import React from 'react';

function MascotaCard({ mascota }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center dark:bg-gray-800 dark:text-white">
      <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-indigo-300 dark:border-blue-400">
        <img
          src={mascota.image}
          alt={`Foto de ${mascota.name}`}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="font-bold text-xl mb-1 text-indigo-700 dark:text-blue-400">{mascota.name}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {mascota.type} | {mascota.breed}
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        Edad: {mascota.age} años
      </p>
    </div>
  );
}

export default MascotaCard;