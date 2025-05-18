import { useState } from "react";

const movieData = [
  { Title: "The Thunderbolts*", Genre: "Action" },
  { Title: "Superman", Genre: "Action" },
  { Title: "Awakenings", Genre: "Drama" },
  { Title: "Parasite", Genre: "Drama" },
  { Title: "Jurassic Park", Genre: "Sci-fi" },
  { Title: "Sinners", Genre: "Horror" },
];

export default function MovieSelector() {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);

  const listMovies = () => {
    setIsLoading(true);
    setMovies([]);

    setTimeout(() => {
      const movies = movieData.filter(movie => (movie.Genre === selectedGenre))
      setMovies(movies);
      setIsLoading(false);
    }, 500);
  }

  return (
    <div>
      <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="default">Select Genre</option>
        <option value="Action">Action</option>
        <option value="Sci-fi">Sci-fi</option>
        <option value="Drama">Drama</option>
        <option value="Horror">Horror</option>
      </select>
      <button onClick={listMovies}>Search</button>
      {isLoading && <p>Searching for {selectedGenre} movies</p>}
      {!isLoading && movies.length > 0 &&
        (<ul>
          {movies.map((movie, index) => <li key={index}>{movie.Title}</li>)}
        </ul>)}
    </div>
  )
}
