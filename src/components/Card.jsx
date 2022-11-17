import React from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/Global';

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
  isLoading,
  setIsLoading,
}) => {
  const {
    timerDays,
    timerHours,
    timerMinutes,
    timerSeconds,
    setTimerDays,
    setTimerHours,
    setTimerMinutes,
    setTimerSeconds,
    startTimer,
    interval,
  } = React.useContext(GlobalContext);

  // React.useEffect(() => {
  //   startTimer(end_date);
  //   return () => {
  //     clearInterval(interval.current);
  //   };
  // });

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
        <div className="flex items-center justify-between mt-4">
          <div className="valor">
            <p>
              FREE <span>{worth}</span>
            </p>
          </div>
          {/* {end_date !== 'N/A' ? (
            <span className="block text-xs font-medium text-red-400">
              {timerDays <= 9 ? `0${timerDays}` : timerDays}d{' '}
              {timerHours <= 9 ? ` 0${timerHours}` : timerHours}h:
              {timerMinutes <= 9 ? `0${timerMinutes}` : timerMinutes}m:
              {timerSeconds <= 9 ? `0${timerSeconds}` : timerSeconds}s
            </span>
          ) : (
            ''
          )} */}
        </div>

        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <Link
          to={`/jogos/${id}`}
          className="text-primary-500 font-medium inline-flex mt-4 text-sm"
        >
          More details
        </Link>
      </div>
      <div className="btn-container">
        <a href={open_giveaway_url} target="_blank">
          GET GAME
        </a>
      </div>
    </div>
  );
};

export default Card;
