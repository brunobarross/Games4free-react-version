import { Container } from 'postcss';
import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import ContainerPrincipal from './components/ContainerPrincipal';
import Sidebar from './components/Sidebar';
import Sobre from './components/Sobre';

function App() {
  const params = useParams();

  const [jogos, setJogos] = useState('');
  const [temJogo, setTemJogo] = useState(false);
  const [textoResponse, setTextoResponse] = useState('');
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
      setTemJogo(true);
      setJogos(dataAPI);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickLink = (loja) => {
    getData(`${loja ? loja : 'epic-games-store.gog.origin.steam'}`);
  };

  useEffect(() => {
    const url = window.location.pathname.replace('/', '');
    console.log(params.search);
    getData(
      params.search ? params.search : 'epic-games-store.gog.origin.steam',
    );
  }, []);

  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar handleClickLink={handleClickLink} objLinks={objLinks} />
        <Routes>
          <Route
            path="/"
            element={
              <ContainerPrincipal
                jogos={jogos}
                temJogo={temJogo}
                textoResponse={textoResponse}
              />
            }
          />

          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
