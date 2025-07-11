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
    console.log(e.target.value);
    setFilterQuery(e.target.value);
  }

  return (
    <div className="App">
      <div className="App-header">
          <h1> <a href="App.jsx">FLIXSTER</a></h1>
      </div>

      <div className="banner">
        <SearchBar
            currSearch={searchQuery}
            setCurrSearch={setSearchQuery}
            page={page}
            setPage={setPage}
          />

          <div className="tempDiv">
          <Sorting
                movieList={movies}
                setMovies={setMovies}
                onChange={handleSortChange}
                />
        </div>
      </div>

      <main>
        
        
        <MovieList
            filterQuery={filterQuery}
            searchQuery={searchQuery}
            page={page}
            setPage={setPage}
        />

        <footer id="footerText"> <p>&copy; Made By Janine Jimenez</p></footer>
      </main>
      
    </div>
  )

}

export default App
