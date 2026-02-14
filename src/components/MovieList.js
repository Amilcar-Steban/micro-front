import React from 'react';
import '../styles/MovieList.css';

function MovieList({ movies }) {
  if (movies.length === 0) {
    return <p className="no-movies">No hay películas disponibles</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <div className="movie-poster">
            <img src={movie.poster} alt={movie.title} onError={(e) => { e.target.src = 'https://via.placeholder.com/200x300?text=Sin+imagen'; }} />
          </div>
          <div className="movie-info">
            <h2>{movie.title}</h2>
            <p className="year"><strong>Año:</strong> {movie.year}</p>
            <p className="director"><strong>Director:</strong> {movie.director}</p>
            <p className="rating"><strong>Calificación:</strong> <span className="rating-value">⭐ {movie.rating}/10</span></p>
            <p className="description">{movie.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
