import React from 'react';
import Logo from './Logo';

const objLinks = [
  {
    nome: 'Todas as plataformas',
    loja: '',
    ativo: true,
  },
  {
    nome: 'Epic Games',
    loja: 'epic',
    ativo: false,
  },
  {
    nome: 'GOG',
    loja: 'gog',
    ativo: false,
  },
  {
    nome: 'Origin',
    loja: 'origin',
    ativo: false,
  },
  {
    nome: 'Steam',
    loja: 'steam',
    ativo: false,
  },
];

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="logo">
        <Logo />
      </div>
      <ul className="sidebar-lista overflow-y-auto overflow-x-hidden">
        {objLinks.map(({ nome, loja }) => {
          return (
            <li key={nome}>
              <a
                href="#"
                onClick={(e) => props.handleClickLink(e)}
                data-loja={loja}
                className={props.isActive ? 'active' : ''}
              >
                {nome}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
