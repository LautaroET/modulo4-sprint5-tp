import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FavoritesModal from "./components/FavoritesModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FavoritosProvider from "./context/FavoritosContext";
import TemaProvider from "./context/TemaContext";
import AppRouter from "../src/Router/AppRouter"

import { BrowserRouter } from 'react-router-dom';

/**
 * @component App
 * @description Componente principal de la aplicación.
 * Gestiona el estado de la UI y utiliza hooks personalizados y contextos para la lógica de datos y el tema.
 */
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <TemaProvider>
        <FavoritosProvider>
          <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 text-gray-800 transition-colors duration-700 dark:from-gray-950 dark:to-blue-950 dark:text-gray-100">
            <Header onToggleFavorites={toggleModal} />
            <main className="container mx-auto p-4 py-12">
              <AppRouter/>
            </main>
            {isModalOpen && <FavoritesModal onClose={toggleModal} />}
            <Footer />
            <ToastContainer position="bottom-right" theme="colored" />
          </div>
        </FavoritosProvider>
      </TemaProvider>
    </BrowserRouter>
  );
}

export default App;









