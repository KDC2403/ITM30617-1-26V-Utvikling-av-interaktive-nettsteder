import { useState, useEffect } from "react"
import MovieList from "../components/MovieList"

const API_KEY = "3dc0e17d"

function Home() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=james+bond`)
      .then(res => res.json())
      .then(data => {
        if (data.Search) {
          setMovies(data.Search)
        }
      })
  }, [])

  function handleSearch(e) {
    const value = e.target.value
    setSearch(value)

    if (value.length >= 3) {
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}`)
        .then(res => res.json())
        .then(data => {
          if (data.Search) {
            setMovies(data.Search)
          }
        })
    }
  }

  return (
    <section>
      <form>
        <label htmlFor="search">Search movie</label>
        <input
          id="search"
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search movies..."
        />
      </form>

      <MovieList movies={movies} />
    </section>
  )
}

export default Home