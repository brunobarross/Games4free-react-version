import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({
  id,
  description,
  end_date,
  gamepower_url,
  instructions,
  open_giveaway,
  open_giveaway_url,
  platforms,
  status,
  thumbanil,
  title,
  type,
  users,
  image,
}) => {
  return (
    <div
      className={`card ${platforms
        .toLowerCase()
        .split(',')[0]
        .replace(/ /g, '-')}`}
    >
      <div className="imagem ">
        <img src={image}></img>
      </div>
      <div className="texto ">
        <div className="flex items-center">
          <span
            className={`badge ${platforms
              .toLowerCase()
              .split(',')[0]
              .replace(/ /g, '-')
              .replace('|', '-')}`}
          >
            {platforms.split(',')[0]}
          </span>
          <span
            className={`badge ml-2 ${platforms
              .toLowerCase()
              .split(',')[0]
              .replace(/ /g, '-')
              .replace('|', '-')}`}
          >
            {platforms.split(',')[1]}
          </span>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link
          to={`/jogos/${id}`}
          class="text-primary-500 font-medium inline-flex mt-4 text-sm"
        >
          Ver detalhes
        </Link>
      </div>
      <div className="btn-container">
        <a href={open_giveaway_url} target="_blank">
          PEGAR
        </a>
      </div>
    </div>
  );
};

export default Card;
