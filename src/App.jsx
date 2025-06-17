import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import Sorting from './components/Sorting/Sorting'
import MovieList from './components/MovieList/MovieList'

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <div className="App-header">
          <h1>FLIXSTER</h1>
          <SearchBar
            currSearch={searchQuery}
            setCurrSearch={setSearchQuery}
          />
          
      </div>

      <main>
        <Sorting
          movieList={movies}
          setMovies={setMovies}
          />
        <MovieList
            searchQuery={searchQuery}
            movieList={movies}
            setMoviesMethod={setMovies}
        />
        <button>load more</button>
      </main>
      
    </div>
  )

}

export default App
