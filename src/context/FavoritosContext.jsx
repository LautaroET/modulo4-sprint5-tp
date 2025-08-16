import { createContext, useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

// Crea el contexto para los favoritos.
export const FavoritosContext = createContext();


const FavoritosProvider = ({ children }) => {
  // Estado para la lista de favoritos, inicializado desde localStorage.
  const [favoritos, setFavoritos] = useState(() => {
    return JSON.parse(localStorage.getItem("favoritos")) || [];
  });

  // Usamos una ref para guardar el estado anterior de favoritos.
  const prevFavoritosRef = useRef(favoritos);

  /**
   * Hook de efecto para guardar los favoritos en localStorage y mostrar notificaciones.
   * Se ejecuta cada vez que la lista `favoritos` cambia.
   */
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    
    // Comparamos el estado actual con el anterior para detectar si se agregó un nuevo personaje.
    if (favoritos.length > prevFavoritosRef.current.length) {
      const nuevoFavorito = favoritos[favoritos.length - 1];
      if (nuevoFavorito) {
        toast.success(`"${nuevoFavorito.name}" agregado a favoritos.`);
      }
    }
    
    // Actualizamos la ref con el estado actual para la próxima comparación.
    prevFavoritosRef.current = favoritos;
    
  }, [favoritos]);


  const agregarAFavoritos = (character) => {
    setFavoritos((prev) => {
      const existente = prev.find((item) => item.id === character.id);
      if (existente) {
        toast.info("Este personaje ya está en tus favoritos.");
        return prev;
      } else {
        return [...prev, character];
      }
    });
  };


  const eliminarDeFavoritos = (id) => {
    setFavoritos((prev) => prev.filter((item) => item.id !== id));
    toast.warn("Personaje eliminado de favoritos.");
  };


  const vaciarFavoritos = () => {
    setFavoritos([]);
    toast.warn("Se ha vaciado la lista de favoritos.");
  };

  return (
    <FavoritosContext.Provider
      value={{
        favoritos,
        agregarAFavoritos,
        eliminarDeFavoritos,
        vaciarFavoritos,
      }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosProvider;






