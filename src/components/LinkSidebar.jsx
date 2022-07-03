import React from 'react';
import { Link, useParams } from 'react-router-dom';

const LinkSidebar = (props) => {
  return (
    <li>
      <Link
        to={{ pathname: '/', search: props.loja }}
        onClick={(e) => props.handleClickLink(props.loja)}
      >
        {props.nome}
      </Link>
    </li>
  );
};

export default LinkSidebar;
