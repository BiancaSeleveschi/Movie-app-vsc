import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DrawerAppBar from "./components/DrawerAppBar";
import { Home } from "./views/Home";
import { MovieForm } from "./views/MovieForm";
import { Favorites } from "./views/Favorites";

function App() {

  return (
    <BrowserRouter>
      <DrawerAppBar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/movie-form" element={<MovieForm />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
