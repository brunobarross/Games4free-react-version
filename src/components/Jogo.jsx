import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GlobalContext } from '../context/Global';
import Navbar from './Navbar';

const Jogo = () => {
  const { setIsLoading, isLoading, temJogo, sidebarOpen, setSideBarOpen } =
    React.useContext(GlobalContext);
  const regex = /\d+/g;
  const [jogo, setJogo] = useState('');
  const [arrayString, setArrayString] = useState([]);
  const [instrucao, setInstrucao] = useState('');
  let { id } = useParams();

  const getData = async (url) => {
    try {
      const response = await fetch(
        `https://gamerpower.p.rapidapi.com/api/giveaway?id=${url}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'gamerpower.p.rapidapi.com',
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
          },
        },
      );
      const data = await response.json();
      setJogo(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleText = (texto) => {
    const textoAPI = texto;
    const arrayStr = textoAPI.replace(/\r\n/, '<br>').split('<br>');
    setArrayString(arrayStr);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  useEffect(() => {
    if (jogo) {
      handleText(jogo.instructions);
    }
  }, [jogo]);

  return (
    <div
      className={`mx-auto w-full sm:pl-[300px] py-16 relative min-h-screen overflow-hidden flex flex-col justify-center ${isLoading ? 'justify-center items-center' : ''
        }`}
    >
      <Navbar sidebarOpen={sidebarOpen} setSideBarOpen={setSideBarOpen} />
      {jogo && (
        <div className="card-jogo ">
          <div className="header">
            <img src={jogo.image} className="w-full h-full max-h-[300px]" />
          </div>
          <div className="informacoes">
            <div className="titulo">
              <h3>{jogo.title}</h3>
            </div>
            <div className="plataforma">
              <p>
                {jogo.type} |{' '}
                {jogo.platforms.split(',')[0] &&
                  <span
                    className={`badge inline-flex ml-2 ${jogo.platforms
                      .toLowerCase()
                      .split(',')[0]
                      .replace(/ /g, '-')
                      .replace('|', '-')}`}
                  >
                   {jogo.platforms.split(',')[0]}
                  </span>
                }
                {jogo.platforms.split(',')[1] &&
                  <span
                    className={`badge inline-flex ml-2 ${jogo.platforms
                      .toLowerCase()
                      .split(',')[0]
                      .replace(/ /g, '-')
                      .replace('|', '-')}`}
                  >
                   {jogo.platforms.split(',')[1]}
                  </span>
                }
              </p>
            </div>
            <div className="valor">
              <p>
                FREE <span>{jogo.worth}</span>
              </p>
            </div>
            <div className="descricao">
              <p>{jogo.description}</p>
            </div>
            <div className="instrucoes">
              <h3>Instructions</h3>
              {arrayString.map((i) => {
                return <p key={i}>{i}</p>;
              })}
            </div>

            <div className="btn-container">
              <a href={jogo.open_giveaway_url} target="_blank">
                GET GAME
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jogo;
