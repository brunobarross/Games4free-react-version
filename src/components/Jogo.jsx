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
  const regex = /\d+/g;
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
      className={`bg-white mx-auto w-full sm:pl-[300px] py-16 justify-center relative min-h-screen overflow-hidden flex ${
        isLoading ? 'justify-center items-center' : ''
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
                <span className="badge inline-flex">
                  {jogo.platforms.split(',')[0]}
                </span>
                <span className="badge inline-flex ml-2">
                  {jogo.platforms.split(',')[1]}
                </span>
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
              <h3>How to get the game</h3>
              <p>{jogo.instructions}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jogo;
