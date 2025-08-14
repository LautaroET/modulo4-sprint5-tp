// src/Router/AppRouter.jsx
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Refugio from '../pages/Refugio';
import NotFound from '../pages/NotFound';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/refugios" element={<Refugio />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;