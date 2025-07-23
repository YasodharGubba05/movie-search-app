import { useState } from "react";

export default function Home() {
  const [searchTerm, setsearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const API_KEY = "cc8e6713";

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`
      );
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
    
  return (
    <div>
      <div className="searchbar">
        <input
          type="text"
          placeholder="enter movie name"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Submit</button>
      </div>

    
      <div className="movie-container">
        {movies.map((movie) => (
          <div key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        ))}
      </div>
    </div>
  );
}