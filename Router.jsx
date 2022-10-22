import { Route, Routes } from 'react-router-dom';
import ContainerPrincipal from './src/components/ContainerPrincipal';
import Pagina404 from './src/pages/Pagina404';
import Jogo from './src/components/Jogo';
export function Router({
  jogos,
  temJogo,
  textoResponse,
  setIsLoading,
  isLoading,
  sidebarOpen,
  setSideBarOpen,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ContainerPrincipal
            jogos={jogos}
            temJogo={temJogo}
            textoResponse={textoResponse}
            isLoading={isLoading}
            sidebarOpen={sidebarOpen}
            setSideBarOpen={setSideBarOpen}
          />
        }
      />

      <Route path="*" element={<Pagina404 />} />
    </Routes>
  );
}
