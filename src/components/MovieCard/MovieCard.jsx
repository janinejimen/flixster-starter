import "./MovieCard.css";
import {useState} from 'react'
import eyeIcon from '../../assets/eye.png'

const MovieCard = ({title, key, imgPath, voterAvg}) => {
const [liked, setLiked] = useState(false);
const [viewed, setViewed] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    const toggleView = () => {
        setViewed(!viewed);
    }

    const heartStyle = {
        color: liked ? 'red' : 'white',
        fontSize: '24px',
        cursor: 'pointer',
    };

    const viewStyle = {
        filter: viewed ? 'brightness(0)' : 'opacity(0.2)',
        cursor: 'pointer',
    };


    return (
        <>
            <div className="movie-item">
                <p>{title}</p>
                <img src={`https://image.tmdb.org/t/p/w500${imgPath}`} alt={title}/>
                <p>{voterAvg}</p>
                <button className="like-button" onClick={toggleLike}>
                {liked ? (
                    <span className="heart-icon" style={heartStyle}>&#x2665;</span>
                    ) : ( 
                    <span className="heart-icon" style={heartStyle}>&#x2665;</span>
                    )}
                </button>

                <button className="viewButton" onClick={toggleView}>
                    <img style={viewStyle} src={eyeIcon}/>
                </button>
            </div>
        </>
    );
};
export default MovieCard;