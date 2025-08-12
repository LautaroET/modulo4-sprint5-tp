// Importa `StrictMode` de React para habilitar comprobaciones adicionales y advertencias en el modo de desarrollo.
import { StrictMode } from 'react'
// Importa `createRoot` de 'react-dom/client' para inicializar la aplicación React.
import { createRoot } from 'react-dom/client'
// Importa los estilos CSS globales de la aplicación.
import './index.css'
// Importa el componente principal de la aplicación.
import App from './App.jsx'

// Crea una raíz de React para la aplicación, renderizando el componente `App` dentro del elemento con el ID 'root' en el HTML.
// `StrictMode` envuelve la aplicación para activar advertencias y análisis adicionales durante el desarrollo.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
