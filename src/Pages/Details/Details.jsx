import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../../requests";
import "./Details.css";

export default function Details({ detailId }) {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://imdb-api.com/en/API/Title/${requests.API_KEY}/${detailId}`
      );
      setMovie(request.data);
      return request;
    }
    fetchData();
  }, [detailId]);
  const actors = movie.actorList?.map((i) => i.name).join(", ");

  return (
    <div className="details">
      <h3>{movie.title}</h3>
      <div className="details__contenedor">
        <img src={movie.image} alt={movie.title} />
        <div className="details__content">
          <p className="details__text-gray">Description: </p>
          <p>{movie.plot}</p>
        </div>
      </div>
      <div className="details__content details__text">
        <p className="details__text-gray">Actors: </p>
        <p>{actors}</p>
      </div>

      <h2>Explore titles</h2>
      <div className="details__posters">
        {movie &&
          movie.similars?.map((movie) => (
            <img
              key={movie.id}
              className="details__poster"
              src={movie.image}
              alt={movie.title}
            />
          ))}
      </div>
    </div>
  );
}
