// src/Router/AppRouter.jsx
import { Routes, Route } from 'react-router-dom';
import Home from '../page/Home';
import Refugio from '../page/Refugio';
import RefugioDetail from '../page/RefugioDetail';
import Mascota from '../page/Mascota';
import Adoptar from '../page/Adoptar';
import Colabora from '../page/Colabora';
import Noticia from '../page/Noticia';
import Contacto from '../page/Contacto';
import NotFound from '../page/NotFound';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/refugios" element={<Refugio />} />
      <Route path="/refugios/:id" element={<RefugioDetail />} />
      <Route path="/mascotas" element={<Mascota />} />
      <Route path="/adoptar" element={<Adoptar />} />
      <Route path="/colabora" element={<Colabora />} />
      <Route path="/noticia" element={<Noticia />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;