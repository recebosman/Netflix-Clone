import React, { useEffect } from "react";
import { useState } from "react";
import axios from "../axios";

const Lists = ({ title, fetchUrl }) => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchUrl);
      setLists(requests.data.results);
      return requests;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white pl-2 my-5">{title}</h1>
      <div className="flex overflow-x-scroll  cursor-pointer relative p-2 scroll-smooth scrollbar-hide">
        {lists.map((list, index) => {
          return (
            <div key={index} className="flex-none w-64 h-96 relative mr-5">
              <img
                src={`https://image.tmdb.org/t/p/original/${list.poster_path}`}
                alt={list.name}
                className="w-full h-full object-cover"
              />
              <div className="hover:opacity-100 opacity-0 absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <h1 className="text-white text-2xl font-bold p-2">
                  {list.title || list.name}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Lists;
