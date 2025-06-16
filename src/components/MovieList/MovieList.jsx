import {useState, useEffect} from 'react';
import axios from "axios";
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({searchQuery}) => {
    const[movies, setMovies] = useState([]);
    const[selectedMovies, setSelectedMovie] = useState(null);
    const[showModal, setShowModal] = useState(false);

    useEffect ( () => {
        const fetchList = async() => {
            try {
                const { data } = await axios.get(
                    "https://api.themoviedb.org/3/movie/popular?api_key=c356a35283f1d5c90c51bd354c741d8b"
                );
                setMovies(data.results);
            } catch (err) {
                console.error("Error fetching the list: ", err);
            }
        };
        fetchList();
    }, []);


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