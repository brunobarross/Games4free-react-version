import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Content from './Content';
import Navbar from './Navbar';
import Spinner from './Spinner';
import Jogo from './Jogo';

const ContainerPrincipal = ({
  jogos,
  temJogo,
  textoResponse,
  isLoading,
  sidebarOpen,
  setSideBarOpen,
}) => {
  return (
    <div
      className={`mx-auto w-full sm:pl-[300px] relative min-h-screen overflow-hidden flex ${
        isLoading ? 'justify-center items-center' : ''
      }`}
    >
      <Navbar sidebarOpen={sidebarOpen} setSideBarOpen={setSideBarOpen} />
      {isLoading == true && (
        <div className="spinner-container ">
          <Spinner />
        </div>
      )}

      {isLoading == false && temJogo == true && (
        <Content
          jogos={jogos}
          temJogo={temJogo}
          textoResponse={textoResponse}
        />
      )}
    </div>
  );
};

export default ContainerPrincipal;
