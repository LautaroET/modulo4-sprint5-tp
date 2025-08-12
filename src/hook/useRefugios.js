// src/hooks/useRefugios.js
import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const useRefugios = (searchInput = '') => {
  const [allRefugios, setAllRefugios] = useState([]);
  const [filteredRefugios, setFilteredRefugios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRefugios = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/refugios`);
        setAllRefugios(response.data);
      } catch (err) {
        console.error("Error al obtener los refugios:", err);
        setError("Ocurrió un error al cargar los refugios.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchRefugios();
  }, []);

  useEffect(() => {
    if (allRefugios.length > 0) {
      const filtered = allRefugios.filter(refugio =>
        refugio.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        refugio.address.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredRefugios(filtered);
    }
  }, [searchInput, allRefugios]);

  return { refugios: filteredRefugios, isLoading, error };
};