import { Container } from 'postcss';
import { useEffect, useState } from 'react';
import ContainerPrincipal from './components/ContainerPrincipal';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

function App() {
  const [jogos, setJogos] = useState('');

  const getData = async () => {
    const response = await fetch(
      'https://gamerpower.p.rapidapi.com/api/filter?type=game',
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
    setJogos(dataAPI);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <ContainerPrincipal jogos={jogos} />
    </div>
  );
}

export default App;
