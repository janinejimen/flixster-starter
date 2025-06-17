import './Sorting.css'
import {useEffect, useState} from 'react'
import axios from 'axios'

const Sorting = ({ movieList, setMovies }) => {
    const[sortA, setSortA] = useState(false);
    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect ( () => {
        const sortMovies = async () => {
        try {
            const {data} = await axios.get( `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`);
            setMovies(data.results);
            console.log(data.results);
        } catch(err) {
            console.error("error has occurred: ", err);
        }
    };

    if(sortA) {
        sortMovies();
    }

    }, [apiKey, setMovies, sortA]);

    const handleSortA = () => {
        setSortA(true);
    };

    return (
        <>
            <div className="dropdown">
                <button className="dropbtn">Sort</button>
                <div className="dropdown-content">
                    <a onClick={handleSortA} href="#">A-Z</a>
                    <a href="#">release date</a>
                    <a href="#">vote average</a>
                </div>
            </div>
        </>
    );
};
export default Sorting;