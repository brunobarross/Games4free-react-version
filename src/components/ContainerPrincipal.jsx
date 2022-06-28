import React from 'react';
import Content from './Content';

const ContainerPrincipal = (props) => {
  return (
    <div className="mx-auto w-full pl-[300px]">
      <Content jogos={props.jogos} />
    </div>
  );
};

export default ContainerPrincipal;
