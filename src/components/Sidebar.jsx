import React from 'react';
import Logo from './Logo';
import { NavLink } from "react-router-dom";



const Sidebar = (props) => {
  console.log(props)
  return (
    <div className="sidebar">
      <div className="logo">
        <Logo />
      </div>
      <ul className="sidebar-lista overflow-y-auto overflow-x-hidden">
        {props.objLinks && props.objLinks.map(({ nome, loja }) => {
          return (
            <li key={nome}>
              <NavLink to={loja} data-loja={loja} onClick={(e) => props.handleClickLink(e)} >
              {nome}
              </NavLink>
              {/* <a
                href="#"
                onClick={(e) => props.handleClickLink(e)}
                data-loja={loja}
              
              >
                {nome}
              </a> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
