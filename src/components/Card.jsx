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
  worth,
  users,
  image,
}) => {
  const [timerDays, setTimerDays] = React.useState('00');
  const [timerHours, setTimerHours] = React.useState('00');
  const [timerMinutes, setTimerMinutes] = React.useState('00');
  const [timerSeconds, setTimerSeconds] = React.useState('00');
  let interval = React.useRef();

  const startTimer = () => {
    if (end_date == 'N/A') return;
    const countdownDate = new Date(end_date).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //parar contador
        clearInterval(interval.current);
      } else {
        //atualizar contador
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  React.useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

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
        <div className="badges flex items-center">
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
        <div className="flex items-center justify-between mt-16">
          <div className="valor">
            <p>
              FREE <span>{worth}</span>
            </p>
          </div>
          {end_date !== 'N/A' ? (
            <span className="block text-sm font-medium text-red-400">
              {timerDays <= 9 ? `0${timerDays}` : timerDays}d
              {timerHours <= 9 ? ` 0${timerHours}` : timerHours}h:
              {timerMinutes <= 9 ? `0${timerMinutes}` : timerMinutes}m:
              {timerSeconds <= 9 ? `0${timerSeconds}` : timerSeconds}s
            </span>
          ) : (
            ''
          )}
        </div>

        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <Link
          to={`/jogos/${id}`}
          className="text-primary-500 font-medium inline-flex mt-4 text-sm"
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
