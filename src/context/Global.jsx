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
      nome: 'All Platforms',
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
  const [timerDays, setTimerDays] = React.useState('00');
  const [timerHours, setTimerHours] = React.useState('00');
  const [timerMinutes, setTimerMinutes] = React.useState('00');
  const [timerSeconds, setTimerSeconds] = React.useState('00');
  let interval = React.useRef();

  const getData = async (plataforma) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://gamerpower.p.rapidapi.com/api/giveaways`,
        {
          method: 'GET',
          params: {platform: 'steam', type: 'game'},
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

  const handleClickLink = ({ currentTarget }, loja) => {
    setIsLoading(true);
    if (currentTarget.textContent == 'All Platforms') {
      setNomeLoja('');
      setSideBarOpen(!sidebarOpen);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return;
    }
    setNomeLoja(loja);
    setSideBarOpen(!sidebarOpen);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const startTimer = (end_date) => {
    if (end_date == 'N/A') return;
    const countdownDate = new Date(end_date).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //parar contador
        clearInterval(interval.current);
      } else {
        //atualizar contador
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
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
        timerDays,
        timerHours,
        timerMinutes,
        timerSeconds,
        setTimerDays,
        setTimerHours,
        setTimerMinutes,
        setTimerSeconds,
        interval,
        startTimer,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
