import React from 'react';
import Card from './Card';

const Content = (props) => {
  return (
    <div className="mx-auto max-w-[1448px] my-[3rem] flex flex-col items-center px-[3rem]">
      <div className="cards-wrapper md:grid md:grid-cols-3 gap-8 justify-center">
        {props.jogos &&
          props.jogos.map((jogo) => {
            return <Card key={jogo.id} {...jogo} />;
          })}
      </div>
    </div>
  );
};

export default Content;
