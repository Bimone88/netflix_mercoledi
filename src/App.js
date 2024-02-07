import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Modifica qui
import Navbar from "./components/Navbar";
import CustomFooter from "./components/CustomFooter";
import Gallery from "./components/Gallery";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {" "}
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
          <Route
            path="/"
            element={
              <Gallery
                queries={["Harry Potter", "Lord of the Rings", "Star Wars"]}
              />
            }
          />
        </Routes>
        <CustomFooter />
      </div>
    </Router>
  );
}

export default App;
