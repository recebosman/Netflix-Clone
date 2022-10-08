import React, { useState, useEffect } from "react";
import { AiOutlinePlayCircle, AiOutlineInfoCircle } from "react-icons/ai";
import axios from "../axios";
import request from "../request";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchTrending);
      setMovies(requests.data.results);
      return requests;
    }

    fetchData();
  }, []);

  const randomMovie = () => {
    return movies[Math.floor(Math.random() * movies.length)];
  };

  return (
    <div className="h-[calc(100vh-80px)] w-full relative">
      <div className="absolute w-full h-full opacity-50 bg-gradient-to-r from-black">
        <img
          src={`https://image.tmdb.org/t/p/original/${
            randomMovie()?.backdrop_path
          }`}
          alt="{$randomMovie()?.name}"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-[25px] left-20">
        <h1 className="text-7xl text-white font-bold mb-5">
          {randomMovie()?.title || randomMovie()?.name}
        </h1>
        <div className="w-1/2 h-[125px] overflow-hidden ">
          <p className="text-white text-2xl mb-5">{randomMovie()?.overview}</p>
        </div>
        <div className="flex items-center mt-5">
          <button className="bg-white text-black  w-[128px] h-[56px] px-5 py-2 rounded-md text-xl font-semibold mr-5 flex items-center justify-center  ">
            <AiOutlinePlayCircle className="text-3xl mr-2" />
            Play
          </button>
          <button className="bg-gray-500 text-white w-[128px] h-[56px]  px-5 py-2 text-xl rounded-md font-semibold flex items-center justify-center">
            <AiOutlineInfoCircle className="text-3xl mr-2" />
            Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movies;
