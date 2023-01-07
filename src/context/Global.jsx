import { MapPin } from 'phosphor-react';
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import axios from 'axios';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [response, setResponse] = React.useState(null);
  const [jogos, setJogos] = React.useState(null);
  const [nomeLoja, setNomeLoja] = React.useState('');
  const [temJogo, setTemJogo] = React.useState(false);
  const [textoResponse, setTextoResponse] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [sidebarOpen, setSideBarOpen] = React.useState(false);
  const [tipo, setTipo] = React.useState('game');
  const [quantidade, setQuantidade] = React.useState();
  const [objLinks, setObjLinks] = React.useState([
    {
      nome: 'Todos',
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
      nome: 'Playstation 4',
      loja: 'Playstation 4',
    },
    {
      nome: 'Steam',
      loja: 'Steam',
    },
    {
      nome: 'Xbox One',
      loja: 'Xbox One',
    },
    {
      nome: 'Xbox 360',
      loja: 'Xbox 360',
    }
  ]);
  const [timerDays, setTimerDays] = React.useState('00');
  const [timerHours, setTimerHours] = React.useState('00');
  const [timerMinutes, setTimerMinutes] = React.useState('00');
  const [timerSeconds, setTimerSeconds] = React.useState('00');
  let interval = React.useRef();


  const getData = () => {
    setIsLoading(true);
    const options = {
      method: 'GET',
      url: 'https://gamerpower.p.rapidapi.com/api/giveaways',
      params: { type: tipo },
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      const dataAPI = response.data;
      console.log(dataAPI)
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
    }).catch(function (error) {
      console.error(error);
    });



  };

  const handleClickLink = ({ currentTarget }) => {
    const text = currentTarget.textContent
    let content = text == "DLC's" ? "loot" : 'game'
    setTipo(content)
    setSideBarOpen(!sidebarOpen);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }

  const handleChangeSelect = (target) => {
    setIsLoading(true);
    if (target.value == 'Todos') {
      setNomeLoja('');
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return;
    }

    setNomeLoja(target.value);
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


  function someGetStoresIWant(response) {
    if (response) {
      const filtroInicial = response.filter((jogo, index) => {
        const plataforma = jogo.platforms
        return plataforma.includes('Epic Games Store') || plataforma.includes('Steam') || plataforma.includes('GOG') || plataforma.includes('Playstation 4') || plataforma.includes('Xbox 360') || plataforma.includes('Xbox One')
      });
      setQuantidade(filtroInicial.length)
      return filtroInicial
    }

  }

  React.useEffect(() => {
    getData();
  }, [tipo]);

  React.useEffect(() => {
    setJogos(someGetStoresIWant(response));
  }, [response]);

  React.useEffect(() => {
    if (response && nomeLoja) {
      console.log(nomeLoja)
      const filterJogosPerStore = response.filter((jogo) => {
        const plataforma = jogo.platforms;
        const tipoBrinde = jogo.type;
        return plataforma.includes(nomeLoja);
      });
      setJogos(filterJogosPerStore);
      setQuantidade(filterJogosPerStore.length)

    } else {
      setJogos(someGetStoresIWant(response));
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
        handleChangeSelect,
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
        tipo,
        setTipo,
        nomeLoja,
        quantidade,
        setQuantidade,
        setNomeLoja
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
