import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Content from '../components/Content';
import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';
import Jogo from '../components/Jogo';
import { GlobalContext } from '../context/Global';

import {Helmet} from "react-helmet-async";
import HeaderContent from '../components/HeaderContent';


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
      className={`mx-auto w-full sm:pl-[300px] relative min-h-screen overflow-hidden flex ${isLoading ? 'justify-center items-center' : ''
        }`}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Games4Free | Jogos e DLCS grátis</title>
        <meta name="description" content="Os melhores jogos gratuitos estão aqui. Resgate as chaves por tempo limitado." />
        <link rel="canonical" href="https://games4free.app" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5442854490568457"
        crossorigin="anonymous"></script>
      </Helmet>
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
