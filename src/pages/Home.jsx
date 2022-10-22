import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Content from '../components/Content';
import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';
import Jogo from '../components/Jogo';
import { GlobalContext } from '../context/Global';


const Home = () => {
  const {
    jogos,
    temJogo,
    textoResponse,
    isLoading,
    sidebarOpen,
    setSideBarOpen,
  } = React.useContext(GlobalContext);
  return (
    <div
      className={`mx-auto w-full sm:pl-[300px] relative min-h-screen overflow-hidden flex ${
        isLoading ? 'justify-center items-center' : ''
      }`}
    >
      <Navbar />
      {isLoading == true && (
        <div className="spinner-container ">
          <Spinner />
        </div>
      )}

      {isLoading == false && temJogo == true && <Content />}
    </div>
  );
};

export default Home;
