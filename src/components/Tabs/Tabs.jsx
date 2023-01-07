import React from 'react'
import { GlobalContext } from '../../context/Global';
import Tab from './Tab';

const Tabs = () => {
  const { objLinks, handleChangeSelect } = React.useContext(GlobalContext)
  return (
    <ul className="flex overflow-y-auto overflow-x-hidden w-full gap-4 flex-wrap">
      {objLinks &&
        objLinks.map(({ nome, loja }) => {
          return (
            <Tab key={nome}
              handleChangeSelect={handleChangeSelect}
              nome={nome}
              loja={loja} />
          );
        })}
    </ul>
  )
}

export default Tabs