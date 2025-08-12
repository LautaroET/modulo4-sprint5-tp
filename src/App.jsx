// Importa el componente Footer.
import Footer from "./components/Footer"
// Importa el componente Navbar.
import Navbar from "./components/Navbar"
// Importa el componente Main.
import Main from "./components/Main"

// Define el componente funcional App.
function App() {
  return (
    // Usa un Fragmento (<></>) para agrupar múltiples elementos sin añadir un nodo extra al DOM.
    <>
      {/* Renderiza el componente Navbar, que actúa como la barra de navegación. */}
      <Navbar/>
      {/* Renderiza el componente Main, que contiene el contenido principal de la página, como las noticias. */}
      <Main/>
      {/* Renderiza el componente Footer, que muestra información al pie de la página. */}
      <Footer/>
    </>
  )
}

// Exporta `App` como el componente predeterminado para que pueda ser importado en `main.jsx`.
export default App
