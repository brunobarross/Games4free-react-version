import React, { useEffect } from 'react';
import { Navigate, useParams, useSearchParams } from 'react-router-dom';

import Content from './Content';
import Navbar from './Navbar';
import Spinner from './Spinner';

const ContainerPrincipal = ({
  jogos,
  temJogo,
  textoResponse,
  setLojaUrl,
  lojaUrl,
  isLoading,
  sidebarOpen,
  setSideBarOpen,
}) => {
  const { loja } = useParams();

  useEffect(() => {
    console.log(isLoading);
    if (loja) {
      setLojaUrl(loja);
    }
  }, [loja]);
  return (
    <>
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
    </>
  );
};

export default ContainerPrincipal;
