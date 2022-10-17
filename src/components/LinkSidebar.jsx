import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const LinkSidebar = ({ handleClickLink, loja, nome }) => {
  return (
    <li>
      <NavLink to={`${loja.trim(' ')}`} onClick={(e) => handleClickLink(e)}>
        {nome}
      </NavLink>
    </li>
  );
};

export default LinkSidebar;
