import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const LinkSidebar = ({ handleClickLink, loja, nome }) => {
  return (
    <li>
      <NavLink to={`${loja}`} onClick={(e) => handleClickLink(e, nome)}>
        {nome}
        <span className="hidden">{loja}</span>
      </NavLink>
    </li>
  );
};

export default LinkSidebar;
