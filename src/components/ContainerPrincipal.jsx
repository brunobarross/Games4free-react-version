import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import Content from './Content';
import Navbar from './Navbar';

const ContainerPrincipal = (props) => {
  return (
    <div className="mx-auto w-full pl-[300px] relative">
      <Content
        jogos={props.jogos}
        temJogo={props.temJogo}
        textoResponse={props.textoResponse}
      />
    </div>
  );
};

export default ContainerPrincipal;
