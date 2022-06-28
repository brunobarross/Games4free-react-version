import React from 'react';

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
    <div className="card n">
      <div className="imagem ">
        <img src={image}></img>
      </div>
      <div className="texto ">
        <h3>{title}</h3>
        <div className="btn-container">
          <a href="#">PEGAR</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
