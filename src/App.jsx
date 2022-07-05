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
  const [lojaUrl, setLojaUrl] = useState('');
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
  const isLoja = objLinks.some((i) => i.loja === lojaUrl);
  const [parametroCorreto, setParametroCorreto] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSideBarOpen] = useState(false);

  const getData = async (plataforma) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://gamerpower.p.rapidapi.com/api/filter?type=game&platform=${plataforma}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'gamerpower.p.rapidapi.com',
            'x-rapidapi-key':
              '59df7faf5emsh2cb45c52d4b33e3p18956fjsn99432fdbfb5d',
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
    console.log(isLoja, lojaUrl);
    if (!isLoja && isLoja !== '') {
      setParametroCorreto(false);
      return;
    }
    getData(lojaUrl ? lojaUrl : 'epic-games-store.gog.origin.steam');
    setParametroCorreto(true);
  }, [lojaUrl]);

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
          setLojaUrl={setLojaUrl}
          lojaUrl={lojaUrl}
          isLoja={isLoja}
          parametroCorreto={parametroCorreto}
          isLoading={isLoading}
          sidebarOpen={sidebarOpen}
          setSideBarOpen={setSideBarOpen}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
