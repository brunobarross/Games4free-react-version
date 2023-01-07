import { Container } from 'postcss';
import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
} from 'react-router-dom';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import Jogo from './components/Jogo';

import Sidebar from './components/Sidebar';
import { GlobalStorage } from './context/Global';
import Home from './pages/Home';

function App() {
  return (
    <HelmetProvider>
    <GlobalStorage>
      <BrowserRouter>
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:loja" element={<Home />} />
            <Route path="/jogos/:id" element={<Jogo />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GlobalStorage>
    </HelmetProvider>
  );
}

export default App;
