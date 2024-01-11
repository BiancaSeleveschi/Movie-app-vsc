import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { MovieCard } from "../components/MovieCard";

export const MovieList = ({movies, title}) => {

  return (
    <div>
      <Typography
        variant="h2"
        sx={{ marginTop: 10, marginBottom: 5, textAlign: "center", padding: 5 }}
        component="h2"
      >
        {title}
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {movies.map((movie, index) => (
          <Box sx={{ margin: 2 }} key={index}>
            <MovieCard movie={movie} index={index} />
          </Box>
        ))}
      </Box>
    </div>
  );
};
