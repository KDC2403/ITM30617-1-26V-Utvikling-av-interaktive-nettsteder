import MovieCard from "./MovieCard"

function MovieList({ movies }) {
  return (
    <section>
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </section>
  )
}

export default MovieList