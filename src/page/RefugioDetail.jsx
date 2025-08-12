// src/pages/RefugioDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function RefugioDetail() {
  const { id } = useParams();
  const [refugio, setRefugio] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRefugio = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/refugios/${id}`);
        setRefugio(response.data);
      } catch (err) {
        console.error("Error al obtener los detalles del refugio:", err);
        setError("No se pudo cargar la información del refugio.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRefugio();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-center text-xl text-red-500 my-12">{error}</p>;
  }

  if (!refugio) {
    return <p className="text-center text-xl text-gray-600 my-12">Refugio no encontrado.</p>;
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden dark:bg-gray-800">
        <div className="relative h-64 md:h-96">
          <img
            src={refugio.image}
            alt={`Imagen de ${refugio.name}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <h1 className="text-4xl font-extrabold text-indigo-700 dark:text-blue-400 mb-4">
            {refugio.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{refugio.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-center gap-3">
              <i className="bi bi-geo-alt-fill text-2xl text-indigo-500"></i>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Ubicación</p>
                <p className="font-semibold">{refugio.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <i className="bi bi-telephone-fill text-2xl text-indigo-500"></i>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Teléfono</p>
                <p className="font-semibold">{refugio.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <i className="bi bi-envelope-fill text-2xl text-indigo-500"></i>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Email</p>
                <p className="font-semibold">{refugio.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <i className="bi bi-link-45deg text-2xl text-indigo-500"></i>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Sitio Web</p>
                <a href={refugio.website} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-blue-500">
                  Visitar sitio
                </a>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mt-8 mb-4">
            Proceso de Adopción
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{refugio.adoptionProcess}</p>
          
          {refugio.pets && refugio.pets.length > 0 && (
            <>
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mt-8 mb-4">
                Mascotas Disponibles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {refugio.pets.map(pet => (
                  <div key={pet.id} className="bg-gray-100 p-4 rounded-xl shadow-sm flex items-center gap-4 dark:bg-gray-700">
                    <img src={pet.image} alt={`Foto de ${pet.name}`} className="w-20 h-20 object-cover rounded-full" />
                    <div>
                      <h4 className="font-bold text-lg">{pet.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Tipo: {pet.type} | Raza: {pet.breed}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default RefugioDetail;