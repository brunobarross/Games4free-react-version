import { Container } from 'postcss';
import { useEffect, useState } from 'react';
import ContainerPrincipal from './components/ContainerPrincipal';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

function App() {
  const [jogos, setJogos] = useState('');
  const [jogosFiltrados, setJogosFiltrados] = useState('');
  const [loja, setLoja] = useState('');
  const [temJogo, setTemJogo] = useState(false);
  const [textoResponse, setTextoResponse] = useState('');
  const [isActive, setIsActive] = useState(false);

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

  const handleClickLink = (e) => {
    e.preventDefault();
    const dataLoja = e.target.getAttribute('data-loja');
    window.history.replaceState(null, null, `${dataLoja ? dataLoja : 'todos'}`);

    setLoja(dataLoja);
  };

  useEffect(() => {
    getData('epic-games-store.gog.origin.steam');
  }, []);

  useEffect(() => {
    getData(`${loja ? loja : 'epic-games-store.gog.origin.steam'}`);
  }, [loja]);

  return (
    <div className="flex">
      <Sidebar handleClickLink={handleClickLink} isActive={isActive} />
      <ContainerPrincipal
        jogos={jogos}
        textoResponse={textoResponse}
        temJogo={temJogo}
      />
    </div>
  );
}

export default App;