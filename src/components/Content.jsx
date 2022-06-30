import React from 'react';
import Card from './Card';

const Content = (props) => {
  return (
    <div className="content ">
      <div className="cards-wrapper ">
        {props.jogos &&
          props.jogos.map((jogo) => {
            return <Card key={jogo.id} {...jogo} />;
          })}
      </div>
    </div>
  );
};

export default Content;
