import React from 'react';
import Logo from './Logo';
import LinkSidebar from './LinkSidebar';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
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
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
