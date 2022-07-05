import React from 'react';
import Logo from './Logo';
import LinkSidebar from './LinkSidebar';
import { Link } from 'react-router-dom';
import { X } from 'phosphor-react';

const Sidebar = (props) => {
  return (
    <div
      className={`sidebar ${
        props.sidebarOpen
          ? 'translate-x-0 md:translate-x-0'
          : '-translate-x-full md:translate-x-0'
      }`}
    >
      <div className="flex md:hidden justify-end px-8 pt-4">
        <button className="w-8 h-8 bg-white rounded-full grid place-items-center">
          <X
            size={24}
            onClick={() => props.setSideBarOpen(!props.sidebarOpen)}
          />
        </button>
      </div>

      <div className="logo">
        <Logo />
      </div>
      <ul className="sidebar-lista overflow-y-auto overflow-x-hidden">
        {props.objLinks &&
          props.objLinks.map(({ nome, loja }) => {
            return (
              <LinkSidebar
                key={nome}
                nome={nome}
                loja={loja}
                handleClickLink={props.handleClickLink}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default Sidebar;
