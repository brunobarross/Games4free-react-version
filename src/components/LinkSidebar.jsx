import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const LinkSidebar = ({ handleClickLink, loja, nome }) => {
  return (
    <li>
      <NavLink to={`${loja}`} onClick={(e) => handleClickLink(loja)}>
        {nome}
      </NavLink>
    </li>
  );
};

export default LinkSidebar;
