import React, { useEffect } from 'react';
import { GlobalContext } from '../context/Global';
import Card from './Card';

const Content = () => {
  const {
    isLoading,
    setIsLoading,
    jogos,
    temJogo,
    textoResponse,
    setLojaUrl,
    lojaUrl,
  } = React.useContext(GlobalContext);
  return (
    <div className="content ">
      <div
        className={`cards-wrapper ${
          !jogos.length ? '!grid-cols-1  h-full' : ''
        }`}
      >
        {jogos.length ? (
          jogos.map((jogo) => {
            return (
              <Card
                key={jogo.id}
                {...jogo}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            );
          })
        ) : (
          <div className="message flex flex-col justify-center">
            <p className="text-2xl ">Não há jogos disponíveis</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
