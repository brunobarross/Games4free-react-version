import { Container } from 'postcss';
import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
} from 'react-router-dom';
import Jogo from './components/Jogo';

import Sidebar from './components/Sidebar';
import { GlobalStorage } from './context/Global';
import Home from './pages/Home';

function App() {
  return (
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
  );
}

export default App;
