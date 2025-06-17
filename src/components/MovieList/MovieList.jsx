import {useState, useEffect} from 'react';
import axios from "axios";
import MovieCard from '../MovieCard/MovieCard';
import "./MovieList.css";
import MovieModal from '../MovieModal/MovieModal';

const MovieList = ({searchQuery, movieList, setMoviesMethod}) => {
    const[movies, setMovies] = useState([])
    const[selectedMovie, setSelectedMovie] = useState(null);
    const[showModal, setShowModal] = useState(false);
    // const[pageVal, setPageVal] = useState(1);
    const apiKey = import.meta.env.VITE_API_KEY


    const fetchList = async() => {
            try {
                const { data } = await axios.get(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&include_adult=false`
                );
                setMovies(data.results);
            } catch (err) {
                console.error("Error fetching the list: ", err);
            }
        };

    useEffect ( () => {
        const filterMovies = async (query) => {
        try {
            const {data} = await axios.get( `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&include_adult=false`);
            setMovies(data.results);
        } catch(err) {
            console.error("error has occurred: ", err);
        }
    };

    if(searchQuery) {
        filterMovies(searchQuery);
    } else {
        fetchList();
    }
    }, [searchQuery, apiKey]);

    const handleCardClick = async (id) => {
        console.log("movie is being clicked");
        setShowModal(true);
        setSelectedMovie(null);

        try {
            // there may be an error here
            const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
        setSelectedMovie(data);
        console.log("selected movie: " + data);
        } catch (err) {
            console.error(`Error fetching`, err);
        }

    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedMovie(null);
    };


    return (
        <>
            <div className="movie-list">
                {movies.map ((m) => (
                    <MovieCard
                        key={m.id}
                        title={m.title}
                        imgPath={m.poster_path}
                        voterAvg={m.vote_average}
                        openModal={() => handleCardClick(m.id)}
                    />
                ))}
                <button>LOAD MORE</button>
            </div>

            <MovieModal 
                show={showModal}
                onClose={handleClose}
                movie={selectedMovie}
                />
        </>
    );
};

export default MovieList;