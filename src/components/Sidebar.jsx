import React from 'react';
import Logo from './Logo';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <Logo />
      </div>
      <ul className="sidebar-lista">
        <li>
          <a href="#" className="active">
            Todas as plataformas
          </a>
        </li>
        <li>
          <a href="#">Epic Games</a>
        </li>
        <li>
          <a href="#">GOG</a>
        </li>
        <li>
          <a href="#">Origin</a>
        </li>
        <li>
          <a href="#">Steam</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
