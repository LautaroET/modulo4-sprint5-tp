import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchAllRefugios = async (search = "") => {
  try {
    // Hacer las peticiones de forma independiente
    const [byName, byAddress] = await Promise.allSettled([
      axios.get(`${BASE_URL}/refugios?name=${search}`),
      axios.get(`${BASE_URL}/refugios?address=${search}`),
    ]);

    // Procesar respuestas (incluso si una falló)
    const dataByName = byName.status === "fulfilled" ? byName.value.data : [];
    const dataByAddress = byAddress.status === "fulfilled" ? byAddress.value.data : [];

    // Combinar y eliminar duplicados
    const allRefugios = [...dataByName, ...dataByAddress];
    const uniqueRefugios = allRefugios.filter(
      (refugio, index, self) => self.findIndex(r => r.id === refugio.id) === index
    );

    return uniqueRefugios;

  } catch (error) {
    console.error("Error inesperado:", error);
    return []; // O lanzar error, según tu necesidad
  }
};

export const fetchRefugioById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/refugios/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching refugio with id ${id}:`, error);
    throw new Error("No se pudo cargar la información del refugio.");
  }
};

// apiService.js
export const getAllMascotas = async (search = "") => {
  try {
    const refugios = await fetchAllRefugios();
    
    const mascotasPromises = refugios.map(async (refugio) => {
      try {
        // Cambiamos la petición para que el filtrado lo haga el backend
        const response = await axios.get(`${BASE_URL}/refugios/${refugio.id}/pets`, {
          params: { search } // Enviamos el parámetro de búsqueda
        });
        
        return response.data.map(mascota => ({
          ...mascota,
          refugio: {
            id: refugio.id,
            name: refugio.name,
            address: refugio.address,
            phone: refugio.phone
          }
        }));
      } catch (error) {
        console.error(`Error obteniendo mascotas del refugio ${refugio.id}:`, error);
        return [];
      }
    });

    const allMascotas = (await Promise.all(mascotasPromises)).flat();
    return allMascotas;

  } catch (error) {
    console.error("Error inesperado:", error);
    return [];
  }
};
// apiService.js
export const getMascotaById = async (idMascota) => {
  try {
    const refugios = await fetchAllRefugios();
    
    // Buscar en todos los refugios
    for (const refugio of refugios) {
      try {
        const response = await axios.get(`${BASE_URL}/refugios/${refugio.id}/pets/${idMascota}`);
        if (response.data) {
          return {
            ...response.data,
            refugio: {
              id: refugio.id,
              name: refugio.name,
              address: refugio.address,
              phone: refugio.phone
            }
          };
        }
      } catch (error) {
        // Continuar si no es error 404
        if (error.response?.status !== 404) {
          console.error(`Error en refugio ${refugio.id}:`, error);
        }
      }
    }
    
    throw new Error(`Mascota con ID ${idMascota} no encontrada en ningún refugio`);
  } catch (error) {
    console.error(`Error buscando mascota ${idMascota}:`, error);
    throw error;
  }
};

// apiService.js (extensión)

// Operaciones CRUD para mascotas
export const createMascota = async (refugioId, mascotaData) => {
  try {
    const response = await axios.post(`${BASE_URL}/refugios/${refugioId}/pets`, mascotaData);
    return response.data;
  } catch (error) {
    console.error(`Error creando mascota en refugio ${refugioId}:`, error);
    throw error;
  }
};

export const updateMascota = async (refugioId, mascotaId, mascotaData) => {
  try {
    const response = await axios.put(`${BASE_URL}/refugios/${refugioId}/pets/${mascotaId}`, mascotaData);
    return response.data;
  } catch (error) {
    console.error(`Error actualizando mascota ${mascotaId}:`, error);
    throw error;
  }
};

export const deleteMascota = async (refugioId, mascotaId) => {
  try {
    await axios.delete(`${BASE_URL}/refugios/${refugioId}/pets/${mascotaId}`);
  } catch (error) {
    console.error(`Error eliminando mascota ${mascotaId}:`, error);
    throw error;
  }
};