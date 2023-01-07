import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const LinkSidebar = ({ handleChangeSelect, loja, nome }) => {
  return (
    <li>
      <NavLink to={`${loja}`} onClick={(e) => handleChangeSelect(e, nome)}>
        {nome}
        <span className="hidden">{loja}</span>
      </NavLink>
    </li>
  );
};

export default LinkSidebar;
