// src/page/Mascota.jsx
import React, { useState } from 'react';
import MascotaCard from '../components/MascotaCard';
import SearchInput from '../components/SearchInput';
import Loader from '../components/Loader';
import { useMascotas } from '../hook/useMascotas';

function Mascota() {
  const [searchInput, setSearchInput] = useState('');
  const { mascotas, isLoading, error } = useMascotas(searchInput);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-center text-xl text-red-500 my-12">{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white my-8">
        Todas las Mascotas Disponibles
      </h2>
      <SearchInput 
        onInputChange={setSearchInput} 
        placeholder="Buscar por nombre o tipo de animal..." 
      />

      {mascotas.length === 0 && !isLoading ? (
        <p className="text-center text-gray-500 text-xl my-12 dark:text-gray-400">
          No se encontraron mascotas que coincidan con "{searchInput}".
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mascotas.map(mascota => (
            <MascotaCard key={mascota.id} mascota={mascota} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Mascota;