import { Link } from "react-router-dom"

function MovieCard({ movie }) {

  const slug = movie.Title.replaceAll(" ", "-").toLowerCase()

  return (
    <article>
      <Link to={`/${slug}`}>
        <figure>
          {movie.Poster !== "N/A" ? (
            <img src={movie.Poster} alt={movie.Title} />
          ) : (
            <p>No image</p>
          )}
        </figure>

        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
      </Link>
    </article>
  )
}

export default MovieCard