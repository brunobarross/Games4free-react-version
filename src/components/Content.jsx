import React, { useEffect } from "react"
import { GlobalContext } from "../context/Global"
import Card from "./Card"
import HeaderContent from "./HeaderContent"

const Content = () => {
  const {
    isLoading,
    setIsLoading,
    handleChangeSelect,
    jogos,
    temJogo,
    textoResponse,
    setLojaUrl,
    lojaUrl,
    tipo
  } = React.useContext(GlobalContext)
  return (
    <div className="content ">

  
      <HeaderContent />
      <div
        className={`cards-wrapper  mt-16 ${!jogos.length ? "!grid-cols-1  h-full" : ""
          }`}
      >
        {jogos.length ? (
          jogos.map((jogo) => {
            return (
              <Card
                key={jogo.id}
                {...jogo}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            )
          })
        ) : (
          <div className="message flex flex-col justify-center">
            <p className="text-2xl text-white text-center ">Não há jogos disponíveis no momento.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Content
