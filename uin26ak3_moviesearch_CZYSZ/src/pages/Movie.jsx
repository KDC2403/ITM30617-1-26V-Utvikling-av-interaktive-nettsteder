/* Importerer useParams, useEffect og useState fra REACT */
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

/* API-nøkkel fra OMDB API nettsiden */
const API_KEY = "3dc0e17d"

/* Funksjoner for å hente og vise detaljer om en spesifikk film */
function Movie() {

  const { movie } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {

    const title = movie.replaceAll("-", " ")

    /* Henter detaljer om den valgte filmen fra API */
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })

  }, [movie])
  
  /* Viser lastingssmelding mens data evt. lastes */
  if (!data) return <p>Loading...</p>

  /* Viser detaljer om den valgte filmen */
  return (
    <article>
      <header>
        <h1>{data.Title}</h1>
      </header>

      <figure>
        <img src={data.Poster} alt={data.Title} />
      </figure>

      <section>
        <p>Year: {data.Year}</p>
        <p>Genre: {data.Genre}</p>
        <p>{data.Plot}</p>
      </section>
    </article>
  )
}

/* Eksporterer film-detalj-komponenten */
export default Movie