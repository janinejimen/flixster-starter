import {useState, useEffect} from 'react';
import axios from "axios";
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({searchQuery}) => {
    const[movies, setMovies] = useState([])
    const[selectedMovies, setSelectedMovie] = useState(null);
    const[showModal, setShowModal] = useState(false);

    useEffect ( () => {
        const fetchList = async() => {
            const apiKey = import.meta.env.VITE_API_KEY
            try {
                const { data } = await axios.get(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&include_adult=false`
                );
                setMovies(data.results);
            } catch (err) {
                console.error("Error fetching the list: ", err);
            }
        };
        fetchList();
    }, []);

    useEffect ( () => {
        const filterMovies = async (query) => {
            const apiKey = import.meta.env.VITE_API_KEY
        try {
            const {data} = await axios.get( `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&include_adult=false`);
            setMovies(data.results);
        } catch(err) {
            console.error("WOMP WOMP", err);
        }
    };

    if(searchQuery) {
        filterMovies(searchQuery);
    }
    }, [searchQuery]);
   


    return (
        <>
            <div className="movie-list">
                
                {movies.map ((m) => (
                    <MovieCard
                        key={m.id}
                        title={m.title}
                        imgPath={m.poster_path}
                        voterAvg={m.vote_average}
                    />
                ))}
            </div>
        </>
    );
};

export default MovieList;