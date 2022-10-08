import React from "react";
import Cards from "./Cards";
import request from "../request";

const Row = () => {
  return (
    <div>
      <Cards title="Trending" fetchUrl={request.fetchTrending} />
      <Cards title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Cards title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Cards title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Cards title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Cards title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Cards title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
};

export default Row;
