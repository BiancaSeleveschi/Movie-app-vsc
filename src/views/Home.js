import React from "react";
import { useSelector } from "react-redux";
import { MovieList } from "../components/MovieList";

export const Home = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div>
      <MovieList movies={movies} title={"MOVIES"} />
    </div>
  );
};
