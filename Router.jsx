import { Route, Routes } from 'react-router-dom';
import ContainerPrincipal from './src/components/ContainerPrincipal';
import Pagina404 from './src/pages/Pagina404';
import pagina404 from './src/pages/Pagina404';

export function Router(props) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ContainerPrincipal
            jogos={props.jogos}
            temJogo={props.temJogo}
            textoResponse={props.textoResponse}
            lojaUrl={props.lojaUrl}
            setLojaUrl={props.setLojaUrl}
            isLoading={props.isLoading}
            sidebarOpen={props.sidebarOpen}
            setSideBarOpen={props.setSideBarOpen}
          />
        }
      />

      {props.parametroCorreto ? (
        <Route
          path="/:loja"
          element={
            <ContainerPrincipal
              jogos={props.jogos}
              temJogo={props.temJogo}
              textoResponse={props.textoResponse}
              lojaUrl={props.lojaUrl}
              setLojaUrl={props.setLojaUrl}
              isLoading={props.isLoading}
              sidebarOpen={props.sidebarOpen}
              setSideBarOpen={props.setSideBarOpen}
            />
          }
        />
      ) : (
        <Route path="*" element={<Pagina404 />} />
      )}
    </Routes>
  );
}
