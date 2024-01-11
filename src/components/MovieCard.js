import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { MovieModal } from "./MovieModal";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { addToFavorite, removeFromFavorite } from "../redux/MovieReducer";

export const MovieCard = (props) => {
  const { movie, index } = props;
  const movies = useSelector((state) => state.movies);
  const [indexMovie, setIndexMovie] = React.useState(-1);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const learnMore = (id) => {
    const index = movies.findIndex((m) => m.id === id);
    setIndexMovie(indexMovie !== index ? index : -1);
    handleOpen();
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddToFavorite = (movie) => {
    dispatch(addToFavorite({ id: movie.id, isFavorite: true }));
    console.log("is true?", movie.isFavorite);
  };
  const handleRemoveFromFavorite = (movie) => {
    dispatch(removeFromFavorite({ id: movie.id, isFavorite: false }));
    console.log("is false?", movie.isFavorite);
  };
  return (
    <div>
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          component="img"
          alt={movie.title}
          image={
            typeof movie.img === "string"
              ? movie.img
              : URL.createObjectURL(movie.img)
          }
          title={movie.title}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
        </CardContent>
        <Button
          sx={{ pl: 2, pb: 1 }}
          onClick={() => {
            learnMore(movie.id);
          }}
          size="small"
        >
          Learn More
        </Button>

        {!movie.isFavorite ? (
          <StarBorderIcon
            sx={{ float: "right", mr: 1, cursor: "pointer", color: "blue" }}
            onClick={() => handleAddToFavorite(movie)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
              />
            </svg>
          </StarBorderIcon>
        ) : (
          <StarIcon
            sx={{ float: "right", mr: 1, cursor: "pointer", color: "blue" }}
            onClick={() => {
              handleRemoveFromFavorite(movie);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
              />
            </svg>
          </StarIcon>
        )}
      </Card>
      <div>
        {indexMovie === index && (
          <MovieModal movie={movie} open={open} handleClose={handleClose} />
        )}
      </div>
    </div>
  );
};
