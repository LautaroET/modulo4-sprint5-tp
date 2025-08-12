// src/hooks/useMascotas.js
import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const useMascotas = (searchInput = '') => {
  const [allMascotas, setAllMascotas] = useState([]);
  const [filteredMascotas, setFilteredMascotas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMascotas = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/refugios`);
        const refugios = response.data;
        const todasLasMascotas = refugios.flatMap(refugio => refugio.pets || []);
        
        setAllMascotas(todasLasMascotas);
      } catch (err) {
        console.error("Error al obtener las mascotas:", err);
        setError("Ocurrió un error al cargar las mascotas.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchMascotas();
  }, []);

  useEffect(() => {
    if (allMascotas.length > 0) {
      const filtered = allMascotas.filter(mascota =>
        mascota.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        mascota.type.toLowerCase().includes(searchInput.toLowerCase()) 
      );
      setFilteredMascotas(filtered);
    }
  }, [searchInput, allMascotas]);

  return { mascotas: filteredMascotas, isLoading, error };
};