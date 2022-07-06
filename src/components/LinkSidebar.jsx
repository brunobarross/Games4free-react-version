import React from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';

const LinkSidebar = (props) => {
  return (
    <li>
      <NavLink
        to={{ pathname: `/${props.loja}` }}
        onClick={(e) => props.handleClickLink(props.loja)}
      >
        {props.nome}
      </NavLink>
    </li>
  );
};

export default LinkSidebar;
