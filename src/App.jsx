import { Container } from 'postcss';
import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
} from 'react-router-dom';
import { Router } from '../Router';
import ContainerPrincipal from './components/ContainerPrincipal';
import Sidebar from './components/Sidebar';

function App() {
  const [jogos, setJogos] = useState('');
  const [temJogo, setTemJogo] = useState(false);
  const [textoResponse, setTextoResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const [objLinks, setObjLinks] = useState([
    {
      nome: 'Todas as plataformas',
      loja: '',
    },
    {
      nome: 'Epic Games',
      loja: 'epic-games-store',
    },
    {
      nome: 'GOG',
      loja: 'gog',
    },
    {
      nome: 'Origin',
      loja: 'origin',
    },
    {
      nome: 'Steam',
      loja: 'steam',
    },
  ]);

  const getData = async (plataforma) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://gamerpower.p.rapidapi.com/api/filter?type=game&platform=${plataforma}`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              '59df7faf5emsh2cb45c52d4b33e3p18956fjsn99432fdbfb5d',
            'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com',
          },
        },
      );

      const dataAPI = await response.json();
      if (dataAPI.status === 0) {
        setTextoResponse('Não há jogos disponíveis');
        setTemJogo(false);
        return;
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 500);

      setTemJogo(true);
      setJogos(dataAPI);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickLink = (loja) => {
    getData(`${loja ? loja : 'epic-games-store.gog.origin.steam'}`);
    setSideBarOpen(!sidebarOpen);
  };

  useEffect(() => {
    getData('epic-games-store.gog.origin.steam');
  }, []);

  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar
          handleClickLink={handleClickLink}
          objLinks={objLinks}
          sidebarOpen={sidebarOpen}
          setSideBarOpen={setSideBarOpen}
        />
        <Router
          jogos={jogos}
          temJogo={temJogo}
          textoResponse={textoResponse}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
          sidebarOpen={sidebarOpen}
          setSideBarOpen={setSideBarOpen}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
