// Importamos la librería axios
import axios from 'axios';

// Obtiene la URL base de la API desde la variable de entorno
const BASE_URL = import.meta.env.VITE_API_URL;


export const fetchAllRefugios = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/refugios`);
    return response.data; 
  } catch (error) {
    console.error("Error al obtener los refugios:", error);
    throw error;
  }
};