import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../../requests";
import { useHistory } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import "./Search.css";

export default function Seach({ searchApi, setDetailId, setSearchApi }) {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [similars, setSimilars] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://imdb-api.com/en/API/Search/${requests.API_KEY}/${searchApi}`
      );
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [searchApi]);

  const movieId = movies ? movies[0]?.id : null;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://imdb-api.com/en/API/Title/${requests.API_KEY}/${movieId}`
      );
      setSimilars(request.data.similars);
      return request;
    }
    fetchData();
  }, [movieId]);

  const concat = similars
    ?.map((m) => m.title)
    .slice(0, 5)
    .join(" | ");

  function handleClick(e) {
    setDetailId(e.target.id);
  }

  function handleInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchApi(search);
    history.push("/search");
  }

  function handleClickDelete(e) {
    e.preventDefault();
    setSearch("");
  }

  return (
    <div className="search">
      <div className="search__search nav">
        <form onSubmit={(e) => handleSubmit(e)} className="search__form">
          <button type="submit" className="search__search-buttons">
            <HiOutlineSearch />
          </button>
          <input
            type="text"
            placeholder="Seach..."
            value={search}
            name="seach"
            onChange={handleInputChange}
          />
          <button
            onClick={(e) => handleClickDelete(e)}
            className="search__search-buttons"
          >
            X
          </button>
        </form>
      </div>

      <div className="search__text">
        <p className="search__text-gray">Explore titles related to: </p>
        <p className="search__text-white"> {concat}</p>
      </div>

      <div className="search_posters">
        {movies &&
          movies?.map((movie) => (
            <img
              key={movie.id}
              id={movie.id}
              className="search_poster"
              src={movie.image}
              alt={movie.title}
              onClick={(e) => handleClick(e)}
            />
          ))}
      </div>
      <div className="search_posters">
        {similars &&
          similars?.map((m) => (
            <img
              key={m.id}
              className="search_poster"
              src={m.image}
              alt={m.title}
              onClick={() => handleClick()}
            />
          ))}
      </div>
    </div>
  );
}
