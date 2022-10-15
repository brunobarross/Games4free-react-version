import React from 'react';
import Logo from './Logo';
import LinkSidebar from './LinkSidebar';
import { X } from 'phosphor-react';
import { GlobalContext } from '../context/Global';

const Sidebar = () => {
  const { objLinks, sidebarOpen, handleClickLink, setSideBarOpen } =
    React.useContext(GlobalContext);
  return (
    <div
      className={`sidebar ${
        sidebarOpen
          ? 'translate-x-0 md:translate-x-0'
          : '-translate-x-full md:translate-x-0'
      }`}
    >
      <div className="flex md:hidden justify-end px-8 pt-4">
        <button className="w-8 h-8 bg-white rounded-full grid place-items-center">
          <X size={24} onClick={() => setSideBarOpen(!sidebarOpen)} />
        </button>
      </div>

      <div className="logo">
        <Logo />
      </div>
      <ul className="sidebar-lista overflow-y-auto overflow-x-hidden">
        {objLinks &&
          objLinks.map(({ nome, loja }) => {
            return (
              <LinkSidebar
                key={nome}
                handleClickLink={handleClickLink}
                nome={nome}
                loja={loja}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default Sidebar;
