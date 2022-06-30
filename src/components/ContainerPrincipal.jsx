import React from 'react';
import Content from './Content';
import Navbar from './Navbar';

const ContainerPrincipal = (props) => {
  return (
    <div className="mx-auto w-full pl-[300px] relative">
      <Navbar />
      <Content jogos={props.jogos} />
    </div>
  );
};

export default ContainerPrincipal;
