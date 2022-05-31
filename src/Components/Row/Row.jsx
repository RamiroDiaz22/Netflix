import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./Row.css";

export default function Row({ fetchUrl, title, isLargoeRow, setDetailId }) {
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.items);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  if (movies.length > 20) {
    let reduced = movies.slice(0, 20);
    setMovies(reduced);
  }
  function handleClick(e) {
    setDetailId(e.target.id);
    history.push("/details");
  }

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies &&
          movies.map((movie) => (
            <img
              key={movie.id}
              id={movie.id}
              className={`row_poster ${isLargoeRow && "row_posterLarge"}`}
              src={movie.image}
              alt={movie.title}
              onClick={(e) => handleClick(e)}
            />
          ))}
      </div>
    </div>
  );
}
