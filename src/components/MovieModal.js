import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CardMedia from "@mui/material/CardMedia";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};
export const MovieModal = ({ movie, open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClick={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            sx={{
              position: "absolute",
              borderRadius: 0,
              top: 0,
              right: 0,
              bgcolor: "black",
              color: "white",
            }}
            onClick={handleClose}
          >
            X
          </Button>
          <CardMedia
            sx={{ height: 270 }}
            component="img"
            alt={movie.title}
            image={
              typeof movie.img === "string"
                ? movie.img
                : URL.createObjectURL(movie.img)
            }
            title={movie.title}
          />

          <Typography variant="h6" sx={{ mt: 5, px: 3 }} component="h2">
            {movie.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3, px: 3, mb: 5 }}>
            <p>Genre: {movie.genre}</p>
            <p>Release year: {movie.year}</p>
            {movie.description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
