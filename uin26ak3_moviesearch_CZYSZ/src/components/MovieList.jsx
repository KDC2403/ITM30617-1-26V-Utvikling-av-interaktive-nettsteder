/* Importerer filmkort fra Moviecard.jsx komponentet */
import MovieCard from "./MovieCard"

/* Hovedfunksjon til film liste på nettsiden */
function MovieList({ movies }) {
  return (
    <section>
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </section>
  )
}

/* Eksporterer film liste-komponenten */
export default MovieList