import { useState } from "react";
const API_KEY = "cc8e6713";
import "../App.css"

function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies();
  };

  return (
    <div className="home-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input className="input"
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="searchbtn">Search</button>
      </form>

      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div className="movie-card" key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
}

export default Home;