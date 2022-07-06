import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';

const Jogo = ({
  setIsLoading,
  isLoading,
  temJogo,
  sidebarOpen,
  setSideBarOpen,
}) => {
  const [jogo, setJogo] = useState('');
  let { id } = useParams();
  const getData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://gamerpower.p.rapidapi.com/api/giveaway?id=${url}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'gamerpower.p.rapidapi.com',
            'x-rapidapi-key':
              '59df7faf5emsh2cb45c52d4b33e3p18956fjsn99432fdbfb5d',
          },
        },
      );
      const data = await response.json();
      setJogo(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <div
      className={`mx-auto w-full sm:pl-[300px] relative min-h-screen overflow-hidden flex ${
        isLoading ? 'justify-center items-center' : ''
      }`}
    >
      <Navbar sidebarOpen={sidebarOpen} setSideBarOpen={setSideBarOpen} />
      {jogo && (
        <div className="card-jogo flex flex-col h-full">
          <div className="foto">
            <img src={jogo.image} className="w-full max-h-60" />
          </div>
          <div className="header ">
            <div className="header-item">
              <h3>Platform:</h3>
              <span
                className={`badge  ${jogo.platforms
                  .toLowerCase()
                  .split(',')[0]
                  .replace(/ /g, '-')
                  .replace('|', '-')}`}
              >
                {jogo.platforms.split(',')[0]}
              </span>
            </div>

            <div className="header-item">
              <h3>Users:</h3>
              <span className="badge resgates w-max">{jogo.users}</span>
            </div>
            <div className="header-item">
              <h3>Value:</h3>
              <span>FREE</span>
              <span className="badge valor line-through">{jogo.worth}</span>
            </div>
            <div className="header-item">
              <h3>Type:</h3>

              <span className="tipo w-max">{jogo.type}</span>
            </div>
          </div>
          <div className="informacoes">
            <div className="titulo">
              <h3>{jogo.title}</h3>
            </div>
            <div className="descricao">
              <p>{jogo.description}</p>
            </div>
          </div>
          <div className="instrucoes">
            <h3>How to get the game</h3>
            <p>{jogo.instructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jogo;
