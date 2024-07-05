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
  { id: 4, title: "Kalki 2898 AD", image: image1 },
  { id: 5, title: "Munjya", image: image2 },
  { id: 6, title: "Kill", image: image3 },
  { id: 7, title: "Kalki 2898 AD", image: image1 },
  { id: 8, title: "Munjya", image: image2 },
  { id: 9, title: "Kill", image: image3 },
  { id: 10, title: "Kalki 2898 AD", image: image1 },
  { id: 11, title: "Munjya", image: image2 },
  { id: 12, title: "Kill", image: image3 },
  { id: 13, title: "Kalki 2898 AD", image: image1 },
  { id: 14, title: "Munjya", image: image2 },
  { id: 15, title: "Kill", image: image3 },
  { id: 16, title: "Kalki 2898 AD", image: image1 },
];

function App() {
  return (
    <div className="App">
      <h1>Book Your Show</h1>
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
