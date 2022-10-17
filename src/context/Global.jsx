import { MapPin } from 'phosphor-react';
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [response, setResponse] = React.useState(null);
  const [jogos, setJogos] = React.useState(null);
  const [nomeLoja, setNomeLoja] = React.useState('');
  const [temJogo, setTemJogo] = React.useState(false);
  const [textoResponse, setTextoResponse] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [sidebarOpen, setSideBarOpen] = React.useState(false);
  const [objLinks, setObjLinks] = React.useState([
    {
      nome: 'Todas as plataformas',
      loja: '',
    },
    {
      nome: 'Epic Games',
      loja: 'Epic-Games-Store',
    },
    {
      nome: 'GOG',
      loja: 'GOG',
    },
    {
      nome: 'Origin',
      loja: 'Origin',
    },
    {
      nome: 'Steam',
      loja: 'Steam',
    },
  ]);

  const getData = async (plataforma) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://gamerpower.p.rapidapi.com/api/filter?type=game&platform=epic-games-store.gog.origin.steam`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com',
          },
        },
      );

      const dataAPI = await response.json();
      if (dataAPI.status === 0 || !dataAPI) {
        setTextoResponse('Não há jogos disponíveis');
        setTemJogo(false);
        return;
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 500);

      setTemJogo(true);
      setResponse(dataAPI);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickLink = ({ currentTarget }) => {
    console.log(currentTarget.textContent);
    setIsLoading(true);
    if (currentTarget.textContent == 'Todas as plataformas') {
      setNomeLoja('');
      setSideBarOpen(!sidebarOpen);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return;
    }
    setNomeLoja(currentTarget.textContent);
    setSideBarOpen(!sidebarOpen);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    if (response) {
      setJogos(response);
    }
  }, [response]);

  React.useEffect(() => {
    if (response && nomeLoja) {
      const filterJogosPerStore = response.filter((jogo) => {
        const plataforma = jogo.platforms;
        return plataforma.includes(nomeLoja);
      });
      setJogos(filterJogosPerStore);
    } else {
      setJogos(response);
    }
  }, [nomeLoja]);

  return (
    <GlobalContext.Provider
      value={{
        objLinks,
        setObjLinks,
        jogos,
        setJogos,
        temJogo,
        setTemJogo,
        textoResponse,
        setTextoResponse,
        isLoading,
        setIsLoading,
        sidebarOpen,
        setSideBarOpen,
        getData,
        handleClickLink,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
