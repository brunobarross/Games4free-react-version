
import React from 'react'
import Tabs from './Tabs/Tabs'
import { GlobalContext } from '../context/Global'



const HeaderContent = () => {

  const { quantidade, nomeLoja, tipo, setTipo, objLinks, handleChangeSelect, setNomeLoja } = React.useContext(GlobalContext)
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="input-box">
        <label className='text-base text-white  block'>Selecione a plataforma</label>
        <select className='mt-2 outline-none py-3 px-3 text-white rounded bg-neutral-70 border border-white w-full' value={nomeLoja} onChange={({ target }) => handleChangeSelect(target)}>
          {objLinks && objLinks.map(({ nome }) => {
            return <option value={nome} key={nome}>{nome}</option>

          })}
        </select>
      </div>

      <p className="text-white text-base  mt-8 md:mt-0 ">Mostrando {quantidade} {quantidade > 1 ? 'itens disponiveis' : 'item disponivel'}  {nomeLoja ? `para ${nomeLoja}` : 'em todas as plataformas'}</p>



    </div>
  )
}

export default HeaderContent