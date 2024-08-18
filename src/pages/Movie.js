import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Movie() {
  const { id } = useParams();
  
  // Assume you have a way to fetch movie data based on id
  const movie = {
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Adventure", "Fantasy"]
  };

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time} minutes</p>
      {movie.genres.map((genre, index) => (
        <span key={index}>{genre} </span>
      ))}
    </div>
  );
}

export default Movie;