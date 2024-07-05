// MovieDetails.js
import React from "react";
import { Link, useParams } from "react-router-dom";
import image1 from "./image1.jpg";
import image2 from "./image2.jpeg";
import image3 from "./image3.jpeg";

const movies = [
  {
    id: 1,
    title: "Kalki 2898 AD",
    image: image1,
    description: "When the world is taken over by darkness. A force will rise.",
  },
  {
    id: 2,
    title: "Munjya",
    image: image2,
    description:
      "A young man`s visit to his native village unveils a family secret and a vengeful spirit, Munjya, who wants to get married. Now the young man must fight to protect himself and his love from Munjya`s clutches leading to a humorously chaotic and terrifying adventure.",
  },
  {
    id: 3,
    title: "Kill",
    image: image3,
    description:
      "Army commando Amrit (Lakshya) finds out his true love Tulika (Tanya Maniktala) is en-route, he boards a New Delhi-bound train in a daring quest to derail the their eventual seperation. But when a gang of knife-wielding thieves led by the ruthless leader (Raghav Juyal) begin to terrorize innocent passengers on his train, Amrit takes them on himself in a death-defying kill-spree to save those around him - turning what should have been a typical commute into an adrenaline-fueled thrill ride.",
  },
  {
    id: 4,
    title: "Kalki 2898 AD",
    image: image1,
    description: "When the world is taken over by darkness. A force will rise.",
  },
  {
    id: 5,
    title: "Munjya",
    image: image2,
    description:
      "A young man`s visit to his native village unveils a family secret and a vengeful spirit, Munjya, who wants to get married. Now the young man must fight to protect himself and his love from Munjya`s clutches leading to a humorously chaotic and terrifying adventure.",
  },
  {
    id: 6,
    title: "Kill",
    image: image3,
    description:
      "Army commando Amrit (Lakshya) finds out his true love Tulika (Tanya Maniktala) is en-route, he boards a New Delhi-bound train in a daring quest to derail the their eventual seperation. But when a gang of knife-wielding thieves led by the ruthless leader (Raghav Juyal) begin to terrorize innocent passengers on his train, Amrit takes them on himself in a death-defying kill-spree to save those around him - turning what should have been a typical commute into an adrenaline-fueled thrill ride.",
  },
  {
    id: 7,
    title: "Kalki 2898 AD",
    image: image1,
    description: "When the world is taken over by darkness. A force will rise.",
  },
  {
    id: 8,
    title: "Munjya",
    image: image2,
    description:
      "A young man`s visit to his native village unveils a family secret and a vengeful spirit, Munjya, who wants to get married. Now the young man must fight to protect himself and his love from Munjya`s clutches leading to a humorously chaotic and terrifying adventure.",
  },
  {
    id: 9,
    title: "Kill",
    image: image3,
    description:
      "Army commando Amrit (Lakshya) finds out his true love Tulika (Tanya Maniktala) is en-route, he boards a New Delhi-bound train in a daring quest to derail the their eventual seperation. But when a gang of knife-wielding thieves led by the ruthless leader (Raghav Juyal) begin to terrorize innocent passengers on his train, Amrit takes them on himself in a death-defying kill-spree to save those around him - turning what should have been a typical commute into an adrenaline-fueled thrill ride.",
  },
  {
    id: 10,
    title: "Kalki 2898 AD",
    image: image1,
    description: "When the world is taken over by darkness. A force will rise.",
  },
  {
    id: 11,
    title: "Munjya",
    image: image2,
    description:
      "A young man`s visit to his native village unveils a family secret and a vengeful spirit, Munjya, who wants to get married. Now the young man must fight to protect himself and his love from Munjya`s clutches leading to a humorously chaotic and terrifying adventure.",
  },
  {
    id: 12,
    title: "Kill",
    image: image3,
    description:
      "Army commando Amrit (Lakshya) finds out his true love Tulika (Tanya Maniktala) is en-route, he boards a New Delhi-bound train in a daring quest to derail the their eventual seperation. But when a gang of knife-wielding thieves led by the ruthless leader (Raghav Juyal) begin to terrorize innocent passengers on his train, Amrit takes them on himself in a death-defying kill-spree to save those around him - turning what should have been a typical commute into an adrenaline-fueled thrill ride.",
  },
  {
    id: 13,
    title: "Kalki 2898 AD",
    image: image1,
    description: "When the world is taken over by darkness. A force will rise.",
  },
  {
    id: 14,
    title: "Munjya",
    image: image2,
    description:
      "A young man`s visit to his native village unveils a family secret and a vengeful spirit, Munjya, who wants to get married. Now the young man must fight to protect himself and his love from Munjya`s clutches leading to a humorously chaotic and terrifying adventure.",
  },
  {
    id: 15,
    title: "Kill",
    image: image3,
    description:
      "Army commando Amrit (Lakshya) finds out his true love Tulika (Tanya Maniktala) is en-route, he boards a New Delhi-bound train in a daring quest to derail the their eventual seperation. But when a gang of knife-wielding thieves led by the ruthless leader (Raghav Juyal) begin to terrorize innocent passengers on his train, Amrit takes them on himself in a death-defying kill-spree to save those around him - turning what should have been a typical commute into an adrenaline-fueled thrill ride.",
  },
  {
    id: 16,
    title: "Kalki 2898 AD",
    image: image1,
    description: "When the world is taken over by darkness. A force will rise.",
  },
];

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.description}</p>
      <Link to="/book-seat">
        <button className="book-seat-button">Book Seat</button>
      </Link>
    </div>
  );
}

export default MovieDetails;
