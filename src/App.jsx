import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchInput from "./components/SearchInput";
import CharacterList from "./components/CharacterList";
import Loader from "./components/Loader";
import FavoritesModal from "./components/FavoritesModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FavoritosProvider from "./context/FavoritosContext";
import TemaProvider from "./context/TemaContext";
import { useCharacters } from "../src/hook/useCharacters";

/**
 * @component App
 * @description Componente principal de la aplicación.
 * Gestiona el estado de la UI y utiliza hooks personalizados y contextos para la lógica de datos y el tema.
 */
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Usa el custom hook para gestionar toda la lógica relacionada con los personajes
  const { 
    characters, 
    allCharacters, 
    isLoading, 
    setQuery, 
    setAmount, 
    handleShowMore 
  } = useCharacters();

  /**
   * @function toggleModal
   * @description Alterna la visibilidad del modal de favoritos.
   */
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <TemaProvider>
      <FavoritosProvider>
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 text-gray-800 transition-colors duration-700 dark:from-gray-950 dark:to-blue-950 dark:text-gray-100">
          <Header onToggleFavorites={toggleModal} />
          <main className="container mx-auto p-4 py-12">
            <SearchInput onInputChange={setQuery} onAmountChange={setAmount} />
            {isLoading ? (
              <Loader />
            ) : (
              <CharacterList 
                characters={characters} 
                allCharacters={allCharacters} 
                onShowMore={handleShowMore} 
              />
            )}
          </main>
          {isModalOpen && <FavoritesModal onClose={toggleModal} />}
          <Footer />
          <ToastContainer position="bottom-right" theme="colored" />
        </div>
      </FavoritosProvider>
    </TemaProvider>
  );
}

export default App;









