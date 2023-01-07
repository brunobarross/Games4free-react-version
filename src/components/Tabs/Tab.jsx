import React from 'react'

const Tab = ({handleChangeSelect,nome,loja}) => {
  return (
    <>
      <button className="text-white border border-white text-base infline-flex  py-2 px-4 rounded transition-all hover:bg-white hover:border-transparent hover:text-neutral-70 " key={nome}
        onClick={(e) => handleChangeSelect(e, nome)}>{nome}
        <span className="hidden">{loja}</span>
      </button>
    </>
  )
}

export default Tab