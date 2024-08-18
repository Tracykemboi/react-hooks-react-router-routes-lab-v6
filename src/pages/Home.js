import React from 'react';
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';

function Home() {
  const movies = [
    { id: 1, title: "Doctor Strange" },
    { id: 2, title: "Trolls" },
    { id: 3, title: "Jack Reacher: Never Go Back" },
    { id: 4, title: "The Imitation Game" },
    { id: 5, title: "Pitch Perfect" }
  ];

  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} id={movie.id} title={movie.title} />
      ))}
    </div>
  );
}

export default Home;