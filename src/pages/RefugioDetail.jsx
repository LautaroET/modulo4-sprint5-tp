import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import MascotaCard from '../components/MascotaCard'; // Importamos el nuevo componente

const RefugioDetail = () => {
  const { id } = useParams();
  const [refugio, setRefugio] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRefugioDetail = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/refugios/${id}`);
        setRefugio(response.data);
      } catch (err) {
        setError("No se pudo cargar la información del refugio. Inténtalo de nuevo más tarde.");
        console.error("Error fetching refugio detail:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRefugioDetail();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center bg-gray-100 dark:bg-gray-900 transition-colors duration-700">
        <div className="p-8 rounded-lg bg-white dark:bg-gray-800 shadow-xl">
          <p className="text-red-500 text-xl font-semibold mb-4">{error}</p>
          <button onClick={() => navigate(-1)} className="inline-block bg-indigo-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-600 transition duration-300">
            Volver
          </button>
        </div>
      </div>
    );
  }

  if (!refugio) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center bg-gray-100 dark:bg-gray-900 transition-colors duration-700">
        <p className="text-gray-600 dark:text-gray-400 text-xl font-semibold">Refugio no encontrado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-100 dark:bg-gray-900 transition-colors duration-700">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <button onClick={() => navigate(-1)} className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300 mb-4 md:mb-0">
            <i className="bi bi-arrow-left-circle-fill text-2xl mr-2"></i>
            <span className="font-semibold text-lg">Volver</span>
          </button>

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => { /* Lógica de edición aquí */ }}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
            >
              <i className="bi bi-pencil-square mr-2"></i>Editar
            </button>
            <button
              onClick={() => { /* Lógica de eliminación aquí */ }}
              className="bg-red-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-red-600 transition-colors duration-300"
            >
              <i className="bi bi-trash-fill mr-2"></i>Eliminar
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden dark:bg-gray-800">
          <div className="relative w-full h-80 md:h-96">
            <img
              src={refugio.image}
              alt={`Imagen de ${refugio.name}`}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white text-shadow-lg">
                {refugio.name}
              </h1>
            </div>
          </div>
          
          <div className="p-6 md:p-8 text-gray-800 dark:text-gray-200">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-indigo-700 dark:text-blue-400 mb-4">
                Descripción del Refugio
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {refugio.description}
              </p>
            </div>
            
            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-indigo-700 dark:text-blue-400 mb-4">
                  Contacto e Información
                </h3>
                <div className="space-y-4 text-lg">
                  <p className="flex items-center"><i className="bi bi-geo-alt-fill text-indigo-500 text-xl w-6 mr-3"></i><span className="font-semibold">Dirección:</span> {refugio.address}</p>
                  <p className="flex items-center"><i className="bi bi-telephone-fill text-indigo-500 text-xl w-6 mr-3"></i><span className="font-semibold">Teléfono:</span> {refugio.phone}</p>
                  <p className="flex items-center"><i className="bi bi-envelope-fill text-indigo-500 text-xl w-6 mr-3"></i><span className="font-semibold">Email:</span> {refugio.email}</p>
                  <p className="flex items-center"><i className="bi bi-globe2 text-indigo-500 text-xl w-6 mr-3"></i><span className="font-semibold">Web:</span> <a href={refugio.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">{refugio.website}</a></p>
                  <p className="flex items-center"><i className="bi bi-people-fill text-indigo-500 text-xl w-6 mr-3"></i><span className="font-semibold">Capacidad:</span> {refugio.capacity} mascotas</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-indigo-700 dark:text-blue-400 mb-4">
                  Proceso de Adopción
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  {refugio.adoptionProcess}
                </p>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />
            
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-indigo-700 dark:text-blue-400">
                  Mascotas Disponibles
                </h3>
                <button
                  onClick={() => { /* Lógica para agregar mascota aquí */ }}
                  className="bg-green-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 text-sm md:text-base"
                >
                  <i className="bi bi-plus-circle-fill mr-2"></i>Agregar Mascota
                </button>
              </div>
              
              {refugio.pets && refugio.pets.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Renderizamos las mascotas con el nuevo componente */}
                  {refugio.pets.map(pet => (
                    <MascotaCard key={pet.id} mascota={pet} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 dark:text-gray-400">
                  Actualmente no hay mascotas disponibles para adopción en este refugio.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefugioDetail;