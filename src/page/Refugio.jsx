// src/page/Refugio.jsx
import React, { useState } from "react";
import RefugioCard from "../components/RefugioCard";
import SearchInput from "../components/SearchInput";
import Loader from "../components/Loader";
import { useRefugios } from "../hook/useRefugios";

function Refugio() {
  const [searchInput, setSearchInput] = useState('');
  const { refugios, isLoading, error } = useRefugios(searchInput);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-center text-xl text-red-500 my-12">{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white my-8">
        Refugios de Animales
      </h2>
      <SearchInput onInputChange={setSearchInput}
        placeholder="Buscar por nombre o ubicación..."
      />
      
      {refugios.length === 0 && !isLoading ? (
        <p className="text-center text-gray-500 text-xl my-12 dark:text-gray-400">
          No se encontraron refugios con el nombre o ciudad "{searchInput}".
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {refugios.map((refugio) => (
            <RefugioCard key={refugio.id} refugio={refugio} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Refugio;