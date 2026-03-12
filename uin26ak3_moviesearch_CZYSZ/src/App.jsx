import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Movie from "./pages/Movie"

function App() {
  return (
    <>
      <header>
        <h1>Movie Search</h1>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:movie" element={<Movie />} />
        </Routes>
      </main>

      <footer>
        <p>OMDB Movie App</p>
      </footer>
    </>
  )
}

export default App