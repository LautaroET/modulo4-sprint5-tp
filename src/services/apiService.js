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
