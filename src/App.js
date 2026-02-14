import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/movies');
      if (!response.ok) {
        throw new Error('Error al obtener las películas');
      }
      const data = await response.json();
      setMovies(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎬 PelisFree</h1>
      </header>
      <main className="App-main">
        {loading && <p className="loading">Cargando películas...</p>}
        {error && <p className="error">Error: {error}</p>}
        {!loading && !error && <MovieList movies={movies} />}
      </main>
    </div>
  );
}

export default App;
