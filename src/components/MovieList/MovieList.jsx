/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react';
import axios from "axios";
import MovieCard from '../MovieCard/MovieCard';
import "./MovieList.css";
import MovieModal from '../MovieModal/MovieModal';

const MovieList = ({filterQuery, searchQuery, page, setPage}) => {
    const[movies, setMovies] = useState([])
    const[selectedMovie, setSelectedMovie] = useState(null);
    const[showModal, setShowModal] = useState(false);
    // const[page, setPage] = useState(1);
    const apiKey = import.meta.env.VITE_API_KEY


    useEffect ( () => {

    const fetchList = async() => {
            try {
                const { data } = await axios.get(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=${filterQuery}&include_adult=false&page=${page}`
                );
                if(page >1) {
                setMovies(prevMovies => [...prevMovies, ...data.results]);
                } else {
                    setMovies(data.results);
                }
            } catch (err) {
                console.error("Error fetching the list: ", err);
            }
        };


        const searchMovies = async (query) => {
        try {
            const {data} = await axios.get( `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&include_adult=false&page=${page}`);

            if(page >1) {
                setMovies(prevMovies => [...prevMovies, ...data.results]);
                } else {
                    setMovies(data.results);
                }
        } catch(err) {
            console.error("error has occurred: ", err);
        }
    };

    if(searchQuery) {
        searchMovies(searchQuery);
    } else {
        fetchList();
    }
    }, [filterQuery,searchQuery,page]);

    const handleCardClick = async (id) => {
        console.log("movie is being clicked");
        setShowModal(true);
        setSelectedMovie(null);

        try {
            const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&page=${page}`)
        setSelectedMovie(data);
        } catch (err) {
            console.error(`Error fetching`, err);
        }

    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedMovie(null);
    };

    const handleLoadMore = () => {
        let pageUpdate = page;
        pageUpdate += 1;
        setPage(pageUpdate);
        
    }


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
                {/* increase page count */}
            </div>

            <MovieModal 
                show={showModal}
                onClose={handleClose}
                movie={selectedMovie}
                />

                <button onClick={handleLoadMore}>LOAD MORE</button>
        </>
    );
};

export default MovieList;