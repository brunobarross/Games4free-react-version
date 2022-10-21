import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { GlobalContext } from "../context/Global"
import Navbar from "./Navbar"

const Jogo = () => {
  const { setIsLoading, isLoading, temJogo, sidebarOpen, setSideBarOpen } =
    React.useContext(GlobalContext)
  const regex = /\d+/g
  const [jogo, setJogo] = useState("")
  const [instrucao, setInstrucao] = useState("")
  let { id } = useParams()

  const getData = async (url) => {
    try {
      const response = await fetch(
        `https://gamerpower.p.rapidapi.com/api/giveaway?id=${url}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "gamerpower.p.rapidapi.com",
            "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
          },
        }
      )
      const data = await response.json()
      setJogo(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleText = (texto) => {
    const textoAPI = texto
    const arrayString = textoAPI.split(/\r\n[0-9][.]/)
    setInstrucao(arrayString)
    console.log(arrayString)
  }

  useEffect(() => {
    getData(id)
  }, [id])

  // useEffect(() => {
  //   if (jogo) {
  //     handleText(jogo.instructions)
  //   }
  // }, [jogo])

  return (
    <div
      className={`bg-white mx-auto w-full sm:pl-[300px] py-16 relative min-h-screen overflow-hidden flex flex-col justify-center ${
        isLoading ? "justify-center items-center" : ""
      }`}
    >
      <Navbar sidebarOpen={sidebarOpen} setSideBarOpen={setSideBarOpen} />
      {jogo && (
        <div className="card-jogo ">
          <div className="header">
            <img src={jogo.image} className="w-full h-full max-h-[300px]" />
          </div>
          <div className="informacoes">
            <div className="titulo">
              <h3>{jogo.title}</h3>
            </div>
            <div className="plataforma">
              <p>
                {jogo.type} |{" "}
                <span className="badge inline-flex">
                  {jogo.platforms.split(",")[0]}
                </span>
                <span className="badge inline-flex ml-2">
                  {jogo.platforms.split(",")[1]}
                </span>
              </p>
            </div>
            <div className="valor">
              <p>
                FREE <span>{jogo.worth}</span>
              </p>
            </div>
            <div className="descricao">
              <p>{jogo.description}</p>
            </div>

            <div className="btn-container">
              <a href={jogo.open_giveaway_url} target="_blank">
                PEGAR
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Jogo
