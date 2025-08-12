// Importa los componentes necesarios.
import Footer from "./components/Footer"
import Main from "./components/Main"
import Header from "./components/Header"
import React from 'react'
// ¡IMPORTACIÓN CORREGIDA! Se añade la importación del TemaProvider.
import TemaProvider from "./context/TemaContext";

// Define el componente funcional App.
function App() {
  return (
    // Usa un Fragmento (<></>) para agrupar múltiples elementos sin añadir un nodo extra al DOM.
    <>
      <TemaProvider>
        {/* Renderiza el componente Header, que actúa como la barra de navegación. */}
        <Header/>
        {/* Renderiza el componente Main, que contiene el contenido principal de la página, como las noticias. */}
        <Main/>
        {/* Renderiza el componente Footer, que muestra información al pie de la página. */}
        <Footer/>
      </TemaProvider>
    </>
  )
}

// Exporta `App` como el componente predeterminado para que pueda ser importado en `main.jsx`.
export default App
