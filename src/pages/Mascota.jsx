// src/pages/Mascota.jsx
import React, { useState } from 'react';
import MascotaList from "../components/MascotaList";
import Loader from "../components/Loader";
import SearchInput from "../components/SearchInput";
import Button from "../components/Button";
import { useMascotas } from "../hook/useMascotas";
import { useNavigate } from 'react-router-dom';
import Pagination from "../components/Pagination";

const Mascotas = () => {
  const [searchValue, setSearchValue] = useState("");
  const { mascotas, allMascotas, isLoading, totalPages, currentPage, handlePageChange } = useMascotas(searchValue);
  const navigate = useNavigate();

  const handleAddMascota = () => {
    navigate('/nueva-mascota');
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-8 transition-colors duration-700 rounded-lg shadow-md">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Sección de cabecera con el título y el botón */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <h1 className="text-4xl font-extrabold text-indigo-700 dark:text-blue-400 text-center sm:text-left tracking-tight">
            Mascotas en Adopción
          </h1>
          <Button onClick={handleAddMascota}>
            <i className="bi bi-plus-circle-fill mr-2"></i>Agregar Mascota
          </Button>
        </div>

        {/* Sección del buscador, centrada y con un ancho máximo */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-xl">
            <SearchInput onSearchChange={setSearchValue} />
          </div>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <MascotaList 
              mascotas={mascotas}
            />
            <Pagination 
              totalPages={totalPages} 
              currentPage={currentPage} 
              onPageChange={handlePageChange} 
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Mascotas;