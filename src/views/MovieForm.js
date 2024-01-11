import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "@mui/material/Input";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { addNewMovie } from "../redux/MovieReducer";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const MovieForm = () => {
  const movies = useSelector((state) => state.movies);
  const [newTitle, setNewTitle] = useState("");
  const [newGenre, setNewGenre] = useState("");
  const [newYear, setNewYear] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [showTtitleAlert, setShowTitleAlert] = useState(false);
  const [showGenreAlert, setShowGenreAlert] = useState(false);
  const [showDescriptionAlert, setShowDescriptionAlert] = useState(false);
  const [showYearAlert, setShowYearAlert] = useState(false);
  const [showImageAlert, setShowImageAlert] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddMovie = () => {
    let newMovie = {
      id: movies.length,
      title: newTitle,
      genre: newGenre,
      img: selectedImage,
      isFavorite: false,
      year: newYear,
      description: newDescription,
    };
    setShowYearAlert(newYear === "");
    setShowTitleAlert(newTitle === "");
    setShowGenreAlert(newGenre === "");
    setShowDescriptionAlert(newDescription === "");
    setSelectedImage(selectedImage === null);
    if (
      newTitle !== "" &&
      newYear !== "" &&
      newDescription !== "" &&
      newGenre !== "" &&
      selectedImage !== null
    ) {
      dispatch(addNewMovie(newMovie));
      setShowYearAlert(false);
      setShowTitleAlert(false);
      setShowGenreAlert(false);
      setShowDescriptionAlert(false);
      setShowImageAlert(false);
      navigate("/home");
    }
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
  return (
    <div>
      <Typography
        variant="h2"
        sx={{ marginTop: 15, mb: 8, textAlign: "center" }}
      >
        Add movie
      </Typography>

      <Input
        value={newTitle}
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
        type="text"
        placeholder="Title"
        color="primary"
        sx={{ display: "flex", margin: "auto", width: 300, mb: 2 }}
      />
      {showTtitleAlert && (
        <p style={{ color: "red", textAlign: "center" }}>Type a title</p>
      )}
      <Input
        value={newYear}
        onChange={(e) => {
          setNewYear(e.target.value);
        }}
        type="number"
        placeholder="Year"
        color="warning"
        sx={{ display: "flex", margin: "auto", width: 200 }}
      />
      {showYearAlert && (
        <p style={{ color: "red", textAlign: "center" }}>Type the year</p>
      )}
      <Select
       color="success"
        sx={{ display: "flex", margin: "auto", width: 150, mt: 4, mb: 2 }}
        value={newGenre}
        onChange={(event) => setNewGenre(event.target.value)}
        displayEmpty
        inputProps={{ "aria-label": "Select option" }}
      >
        <MenuItem value="" disabled>
          Select a genre
        </MenuItem>
        <MenuItem value="drama">Drama</MenuItem>
        <MenuItem value="Crime">Crime</MenuItem>
        <MenuItem value="scifi">Sci-Fi </MenuItem>
        <MenuItem value="action">Action </MenuItem>
        <MenuItem value="biography">Biography </MenuItem>
        <MenuItem value="adventure">Adventure </MenuItem>
      </Select>
      {showGenreAlert && (
        <p style={{ color: "red", textAlign: "center", mb: 2 }}>
          Choose a genre
        </p>
      )}
      <TextareaAutosize
        value={newDescription}
        onChange={(event) => setNewDescription(event.target.value)}
        aria-label="empty textarea"
        placeholder="Write the description of the movie..."
        minRows={10}
        style={{ width: "30%", display: "flex", margin: "auto" }}
      />
      {showDescriptionAlert && (
        <p style={{ color: "red", textAlign: "center" }}>Type a description</p>
      )}
      <Input
        type="file"
        accept="image/*"
        id="upload-image"
        onChange={handleImageChange}
        sx={{ display: "none" }}
        inputProps={{ "aria-label": "Upload image" }}
      />

      <label htmlFor="upload-image">
        <Button
          component="span"
          variant="contained"
          color="success"
          sx={{
            display: "flex",
            m: "auto",
            mt: 5,
            width: 300,
            height: 150,
          }}
        >
          <AddCircleIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
              />
            </svg>
          </AddCircleIcon>
        </Button>
      </label>
      {showImageAlert && (
        <p style={{ color: "red", textAlign: "center" }}>Upload image</p>
      )}
      {showDescriptionAlert && (
        <p style={{ color: "red", textAlign: "center" }}>Type a description</p>
      )}
      <Button
        sx={{ display: "flex", m: "auto", mt: 5, mb: 15 }}
        variant="contained"
        color="primary"
        onClick={handleAddMovie}
      >
        Add
      </Button>
    </div>
  );
};
