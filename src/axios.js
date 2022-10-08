import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "87571f04ed0fadfef01f648e4e05e0ae",
    language: "en-US",
  },
});

export default axios;
