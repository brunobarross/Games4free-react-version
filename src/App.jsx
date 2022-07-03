import { Container } from "postcss";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContainerPrincipal from "./components/ContainerPrincipal";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";


function App() {
  const [jogos, setJogos] = useState("");
  const [jogosFiltrados, setJogosFiltrados] = useState("");
  const [loja, setLoja] = useState("");
  const [temJogo, setTemJogo] = useState(false);
  const [textoResponse, setTextoResponse] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [objLinks, setObjLinks] = useState([
    {
      nome: 'Todas as plataformas',
      loja: '',
      ativo: true,
    },
    {
      nome: 'Epic Games',
      loja: 'epic-games',
      ativo: false,
    },
    {
      nome: 'GOG',
      loja: 'gog',
      ativo: false,
    },
    {
      nome: 'Origin',
      loja: 'origin',
      ativo: false,
    },
    {
      nome: 'Steam',
      loja: 'steam',
      ativo: false,
    },
  ])

  const getData = async (plataforma) => {
    try {
      const response = await fetch(
        `https://gamerpower.p.rapidapi.com/api/filter?type=game&platform=${plataforma}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "gamerpower.p.rapidapi.com",
            "x-rapidapi-key":
              "59df7faf5emsh2cb45c52d4b33e3p18956fjsn99432fdbfb5d",
          },
        }
      );

      const dataAPI = await response.json();
      if (dataAPI.status === 0) {
        setTextoResponse("Não há jogos disponíveis");
        setTemJogo(false);
        return;
      }
      setTemJogo(true);
      setJogos(dataAPI);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickLink = (e) => {
    e.preventDefault();
    const dataLoja = e.target.getAttribute("data-loja");
    // window.history.replaceState(null, null, `${dataLoja ? dataLoja : "todos"}`);

    setLoja(dataLoja);
  };

  useEffect(() => {
    getData("epic-games-store.gog.origin.steam");
  }, []);

  useEffect(() => {
    getData(`${loja ? loja : "epic-games-store.gog.origin.steam"}`);
  }, [loja]);

  return (
    <div className="flex">
      <BrowserRouter>
        <Sidebar handleClickLink={handleClickLink} objLinks={objLinks}/>
      <Routes>
        <Route path='/' element={<ContainerPrincipal jogos={jogos} textoResponse={textoResponse} temJogo={temJogo} />} />
        {objLinks.map(link => <Route key={loja} path={`/${link.loja}`} element={<ContainerPrincipal jogos={jogos} textoResponse={textoResponse} temJogo={temJogo} />} /> )}
      </Routes>
      </BrowserRouter>
    </div>
  );
}






export default App;
