import React from "react";
import { useSelector } from "react-redux";
import { MovieList } from "../components/MovieList";

export const Favorites = () => {
  const movies = useSelector((state) => state.movies);
  const favorites = movies.filter((m) => m.isFavorite);

  return (
    <div>
      <MovieList movies={favorites} title={"FAVORITES"} />
    </div>
  );
};
