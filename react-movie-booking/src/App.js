import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpeg";
import image3 from "./image3.jpeg";

const movies = [
  { id: 1, title: "Kalki 2898 AD", image: image1 },
  { id: 2, title: "Munjya", image: image2 },
  { id: 3, title: "Kill", image: image3 },
  // Add more movie objects here
];

function App() {
  return (
    <div className="App">
      <h1>Movies List</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="movie-item">
              <img src={movie.image} alt={movie.title} />
              <h2>{movie.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default App;
