import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import Sorting from './components/Sorting/Sorting'
import MovieList from './components/MovieList/MovieList'

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterQuery, setFilterQuery] = useState('popularity.desc');
  const [page, setPage] = useState(1);

  const handleSortChange = (e) => {
    setFilterQuery(e.target.value);
  }

  return (
    <div className="App">
      <div className="App-header">
          <h1>FLIXSTER</h1>
          <SearchBar
            currSearch={searchQuery}
            setCurrSearch={setSearchQuery}
            page={page}
            setPage={setPage}
          />
          
      </div>

      <main>
        <Sorting
          movieList={movies}
          setMovies={setMovies}
          onChange={handleSortChange}
          />
        <MovieList
            filterQuery={filterQuery}
            searchQuery={searchQuery}
            page={page}
            setPage={setPage}
        />
      </main>
      
    </div>
  )

}

export default App
