import axios from "axios";

//SERVICE PAGE TRENDING WITH AXIOS\\

const getTrendingService = async () => {
  const trendingMovie = await axios({
    method: "get",
    url: `${process.env.REACT_APP_URL_MOVIE}/trending/all/day?api_key=${process.env.REACT_APP_URL_KEY}`,
  });
  return trendingMovie;
};

const getDetailTrending = async (idMovie) => {
  const detailTrending = await axios({
    method: "get",
    url: `${process.env.REACT_APP_URL_MOVIE}/movie/${idMovie}?api_key=${process.env.REACT_APP_URL_KEY}`,
  });
  return detailTrending;
};

const getTrailerTrending = async (idMovie) => {
  const trailerTrending = await axios({
    method: "get",
    url: `${process.env.REACT_APP_URL_MOVIE}/movie/${idMovie}/videos?api_key=${process.env.REACT_APP_URL_KEY}`,
  });
  return trailerTrending;
};

export { getTrendingService, getDetailTrending, getTrailerTrending };
