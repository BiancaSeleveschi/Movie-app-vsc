import { createSlice } from "@reduxjs/toolkit";
import { movies } from "./Data";

const moviesSlice = createSlice({
  name: "movies",
  initialState: movies,
  reducers: {
    addToFavorite: (state, action) => {
      const { id } = action.payload;
      return state.map((m) => (m.id === id ? { ...m, isFavorite: true } : m));
    },
    removeFromFavorite: (state, action) => {
      const { id } = action.payload;
      return state.map((m) => (m.id === id ? { ...m, isFavorite: false } : m));
    },
    addNewMovie: (state, action) => {
        state.push(action.payload)
        console.log(action.payload)
    },
  },
});

export const { addToFavorite, removeFromFavorite, addNewMovie } =
  moviesSlice.actions;
export default moviesSlice.reducer;
