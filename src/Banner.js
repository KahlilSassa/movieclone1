import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Request";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [play, setPlay] = useState(false);
  
  const handleClick = () => {
    setPlay(true)
  };

  useEffect(() => {
    async function fetchData() {
      await fetch(requests.bannerMovie)
        .then((res) => res.json())
        .then((data) => setMovie(data));
    }

    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
  }

  return play ? 
    (
    <iframe width="100%" height="700" src="https://www.youtube.com/embed/BcDK7lkzzsU?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ) : (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button type="button" onClick={handleClick} className="banner__button">Play</button>
          <button type="button" className="banner__button">My Lists</button>
        </div>
        <h1 className="banner__description">
          {truncate(`${movie?.overview}`, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
