const request = {
  fetchTrending: `/trending/all/week?api_key=87571f04ed0fadfef01f648e4e05e0ae&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=87571f04ed0fadfef01f648e4e05e0ae&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=87571f04ed0fadfef01f648e4e05e0ae&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=87571f04ed0fadfef01f648e4e05e0ae&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=87571f04ed0fadfef01f648e4e05e0ae&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=87571f04ed0fadfef01f648e4e05e0ae&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=87571f04ed0fadfef01f648e4e05e0ae&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=87571f04ed0fadfef01f648e4e05e0ae&with_genres=99`,
};

export default request;
