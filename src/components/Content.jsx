import React, { useEffect } from 'react';
import Card from './Card';
import { useSearchParams } from 'react-router-dom';

const Content = ({ jogos, temJogo, textoResponse, setLojaUrl, lojaUrl }) => {
  return (
    <div className="content ">
      {temJogo ? (
        <div className="cards-wrapper ">
          {jogos &&
            jogos.map((jogo) => {
              return <Card key={jogo.id} {...jogo} />;
            })}
        </div>
      ) : (
        <p>{textoResponse}</p>
      )}
    </div>
  );
};

export default Content;
