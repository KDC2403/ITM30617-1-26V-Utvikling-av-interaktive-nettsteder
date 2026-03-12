import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const API_KEY = "3dc0e17d"

function Movie() {

  const { movie } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {

    const title = movie.replaceAll("-", " ")

    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })

  }, [movie])

  if (!data) return <p>Loading...</p>

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

export default Movie