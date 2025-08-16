// src/pages/MascotaDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Button from '../components/Button';
import { useMascotaDetail } from '../hook/useMascotaDetail';

const MascotaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { mascota, isLoading, error } = useMascotaDetail(id);

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

  if (!mascota) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center bg-gray-100 dark:bg-gray-900 transition-colors duration-700">
        <p className="text-gray-600 dark:text-gray-400 text-xl font-semibold">Mascota no encontrada.</p>
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
            <Button onClick={() => navigate(`/mascotas/${mascota.id}/editar`)}>
              <i className="bi bi-pencil-square mr-2"></i>Editar
            </Button>
            <Button onClick={() => { /* Lógica de eliminación aquí */ }}>
              <i className="bi bi-trash-fill mr-2"></i>Eliminar
            </Button>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden dark:bg-gray-800">
          <div className="relative w-full h-80 md:h-96">
            <img
              src={mascota.image}
              alt={`Imagen de ${mascota.name}`}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white text-shadow-lg">
                {mascota.name}
              </h1>
              <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold text-white uppercase tracking-wider
                ${mascota.status === 'En adopción' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                {mascota.status}
              </div>
            </div>
          </div>
          
          <div className="p-6 md:p-8 text-gray-800 dark:text-gray-200">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-indigo-700 dark:text-blue-400 mb-4">
                  Información Básica
                </h2>
                <div className="space-y-4 text-lg">
                  <p className="flex items-center">
                    <i className="bi bi-clock-fill text-indigo-500 text-xl w-6 mr-3"></i>
                    <span className="font-semibold">Edad:</span> {mascota.age} años
                  </p>
                  <p className="flex items-center">
                    <i className={`bi bi-gender-${mascota.gender.toLowerCase()} text-indigo-500 text-xl w-6 mr-3`}></i>
                    <span className="font-semibold">Sexo:</span> {mascota.gender}
                  </p>
                  <p className="flex items-center">
                    <i className="bi bi-tag-fill text-indigo-500 text-xl w-6 mr-3"></i>
                    <span className="font-semibold">Tamaño:</span> {mascota.size}
                  </p>
                  <p className="flex items-center">
                    <i className="bi bi-droplet-fill text-indigo-500 text-xl w-6 mr-3"></i>
                    <span className="font-semibold">Raza:</span> {mascota.breed || 'No especificada'}
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-indigo-700 dark:text-blue-400 mb-4">
                  Personalidad
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  {mascota.personality}
                </p>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-blue-400 mb-4">
                Historia
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {mascota.history || 'No hay información adicional sobre la historia de esta mascota.'}
              </p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-blue-400 mb-4">
                Requisitos de Adopción
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {mascota.adoptionRequirements || 'No hay requisitos especiales para la adopción de esta mascota.'}
              </p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <div>
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-blue-400 mb-4">
                Refugio
              </h2>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-blue-300 mb-2">
                  {mascota.refugio.name}
                </h3>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <i className="bi bi-geo-alt-fill text-indigo-500 mr-2"></i>
                    {mascota.refugio.address}
                  </p>
                  <p className="flex items-center">
                    <i className="bi bi-telephone-fill text-indigo-500 mr-2"></i>
                    {mascota.refugio.phone}
                  </p>
                </div>
                <Button 
                  onClick={() => navigate(`/refugios/${mascota.refugio.id}`)}
                  className="mt-4"
                >
                  <i className="bi bi-building mr-2"></i>Ver Refugio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MascotaDetail;