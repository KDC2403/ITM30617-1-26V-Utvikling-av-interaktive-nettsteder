/* Importerer "link-komponenten" fra REACT */
import { Link } from "react-router-dom"

/* Hovedfunksjon til filmkort på nettsiden */
function MovieCard({ movie }) {

  /* Oppretter en side med filmtittel i URL-en */
  const slug = movie.Title.replaceAll(" ", "-").toLowerCase()

  /* Filmkort med plakat, tittel og utgivelsesår*/
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

/* Eksporterer filmkort-komponenten */
export default MovieCard