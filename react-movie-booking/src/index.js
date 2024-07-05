import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import MovieDetails from "./MovieDetails";
import BookSeat from "./BookSeat";
import BookingConfirmation from "./BookingConfirmation";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/book-seat" element={<BookSeat />} />
      <Route path="/confirmation" element={<BookingConfirmation />} />
    </Routes>
  </BrowserRouter>
);
