//SERVICE PAGE COMING SOON WITH FETCH\\

const getComingsoon = async () => {
  const comingsoon = await fetch(
    `${process.env.REACT_APP_URL_MOVIE}/movie/upcoming?api_key=${process.env.REACT_APP_URL_KEY}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return await comingsoon.json();
};

const getDetailComingsoon = async (idMovie) => {
  const detailComingsoon = await fetch(
    `${process.env.REACT_APP_URL_MOVIE}/movie/${idMovie}?api_key=${process.env.REACT_APP_URL_KEY}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return await detailComingsoon.json();
};

const getTrailerComingsoon = async (idMovie) => {
  const trailerComingsoon = await fetch(
    `${process.env.REACT_APP_URL_MOVIE}/movie/${idMovie}/videos?api_key=${process.env.REACT_APP_URL_KEY}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return await trailerComingsoon.json();
};

export { getComingsoon, getDetailComingsoon, getTrailerComingsoon };
