import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchRefugios = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/refugios`);
    return response.data;
  } catch (err) {
    console.error("Error al obtener los refugios:", err);
    throw new Error("Ocurrió un error al cargar los refugios.");
  }
};

export const fetchAllCharacters = async (name = "") => {
  let allResults = [];
  let nextUrl = `${BASE_URL}?name=${name}`;

  try {
    while (nextUrl) {
      // Uso de axios en lugar de fetch
      const response = await axios.get(nextUrl);

      const data = response.data;
      allResults = [...allResults, ...data.results];
      nextUrl = data.info.next;
    }
    return { results: allResults, count: allResults.length };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
      return { results: [], count: 0 };
    }
    console.error("Error al obtener los personajes:", error);
    throw error;
  }

  
};