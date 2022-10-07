import React, { useEffect, useState } from "react";
import "./Row.css";

const Row = ({ title, fetchURL, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
     async function fetchData() {
      await fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
     }
     fetchData();
  },);

  return (
    <div className="row">
      <h2>{title}</h2>
    <div className="row__posters">
    {movies.map(
      (movie) => ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
        <img  
          className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
          key={movie.id}
          src={`${base_url}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.name}
        />
      ))}
    </div>
 
    </div>
  );
};

export default Row;
