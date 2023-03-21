import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import RootLayout from "../Layout/RootLayout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
