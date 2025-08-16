import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Refugios from '../pages/Refugio';
import RefugioDetail from '../pages/RefugioDetail';
import NotFound from '../pages/NotFound';
import Mascotas from '../pages/Mascota'; // Importación correcta
import MascotaDetail from '../pages/MascotaDetail';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/refugios" element={<Refugios />} />
      <Route path="/refugios/:id" element={<RefugioDetail />} />
      <Route path="/mascotas" element={<Mascotas />} />
      <Route path="/mascotas/:id" element={<MascotaDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;