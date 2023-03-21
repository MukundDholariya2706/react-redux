import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/api/movieApi";
import { APIKey } from "../../common/api/MovieApiKey";

const Home = () => {
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovie = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("err", err);
        });
        console.log('response', response)
    };

    fetchMovie()
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing></MovieListing>
    </div>
  );
};

export default Home;
