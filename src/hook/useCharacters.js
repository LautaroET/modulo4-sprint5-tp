import { useState, useEffect, useCallback, useRef } from "react";
import { toast } from "react-toastify";
import { fetchAllCharacters } from "../services/apiService";

/**
 * @hook useCharacters
 * @description Hook personalizado para obtener y gestionar los datos de los personajes de Rick and Morty.
 * Encapsula la lógica de búsqueda, carga y paginación.
 * @returns {{
 * characters: Array,
 * allCharacters: Array,
 * isLoading: boolean,
 * setQuery: Function,
 * setAmount: Function,
 * handleShowMore: Function
 * }} Un objeto con el estado y las funciones necesarias para los personajes.
 */
export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [amount, setAmount] = useState(20);

  const debounceTimeoutRef = useRef(null);

  /**
   * @async
   * @function handleFetchCharacters
   * @param {string} name - El nombre del personaje a buscar.
   * @description Llama al servicio de API para obtener personajes y actualiza los estados.
   */
  const handleFetchCharacters = useCallback(async (name) => {
    setIsLoading(true);
    try {
      const { results, count } = await fetchAllCharacters(name);

      if (count > 0) {
        toast.success(`Se encontraron ${count} personajes.`);
      } else {
        toast.info("No se encontraron personajes con ese nombre.");
      }
      setAllCharacters(results);
      setCharacters(results.slice(0, amount));
    } catch (err) {
      console.error("Error al buscar personajes:", err);
      toast.error("Ocurrió un error al buscar los personajes.");
      setAllCharacters([]);
      setCharacters([]);
    } finally {
      setIsLoading(false);
    }
  }, [amount]);

  /**
   * @function handleShowMore
   * @description Agrega 20 personajes adicionales a la lista visible desde la lista completa.
   */
  const handleShowMore = useCallback(() => {
    const newAmount = 20; 
    setCharacters(prevCharacters => {
        const currentLength = prevCharacters.length;
        const moreCharacters = allCharacters.slice(currentLength, currentLength + newAmount);
        return [...prevCharacters, ...moreCharacters];
    });
  }, [allCharacters]);

  /**
   * Hook de efecto para gestionar la lógica de búsqueda con 'debounce'.
   * Se ejecuta cada vez que cambia `query` o `amount`.
   */
  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    if (query.trim() === "") {
      handleFetchCharacters("");
      return;
    }

    debounceTimeoutRef.current = setTimeout(() => {
      handleFetchCharacters(query);
    }, 500);

    return () => {
      clearTimeout(debounceTimeoutRef.current);
    };
  }, [query, handleFetchCharacters]);

  return {
    characters,
    allCharacters,
    isLoading,
    setQuery,
    setAmount,
    handleShowMore
  };
};