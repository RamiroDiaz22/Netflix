import React from "react";
import Row from "../../Components/Row/Row.jsx";
import requests from "../../requests.js";
import "./Home.css";

export default function Home({ setDetailId }) {
  return (
    <div className="home">
      <Row
        title="Top Movies"
        fetchUrl={requests.topMovies}
        setDetailId={setDetailId}
        isLargoeRow
      />
      <Row
        title="Popular Movies"
        fetchUrl={requests.popularMovies}
        setDetailId={setDetailId}
      />
      <Row
        title="Popular Tv"
        fetchUrl={requests.popularTv}
        setDetailId={setDetailId}
      />
      <Row
        title="Coming Soon"
        fetchUrl={requests.comingSoon}
        setDetailId={setDetailId}
      />
    </div>
  );
}
