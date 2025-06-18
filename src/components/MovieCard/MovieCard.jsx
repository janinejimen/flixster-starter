import "./MovieCard.css";
import {useState} from 'react'
import eyeIcon from '../../assets/eye.png'

const MovieCard = ({title, key, imgPath, voterAvg, openModal}) => {
const [liked, setLiked] = useState(false);
const [viewed, setViewed] = useState(false);

    const toggleLike = (e) => {
        e.stopPropagation();
        setLiked(!liked);
    };

    const toggleView = (e) => {
        e.stopPropagation();
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

    const handleClick = (e) => {
        if(!e.target.classList.contains("heart-icon") && !e.target.classList.contains("viewIcon")) {
            openModal();
        }
    }


    return (
        <>
            <div className="movie-item" onClick={handleClick}>
                <img src={`https://image.tmdb.org/t/p/w500${imgPath}`} alt={title}/>
                <h3>{title}</h3>
                <p> ★{voterAvg}/10</p>
                <div className="buttonsDiv">
                <button className="like-button" onClick={toggleLike}>
                {liked ? (
                    <span className="heart-icon" style={heartStyle}>&#x2665;</span>
                    ) : ( 
                    <span className="heart-icon" style={heartStyle}>&#x2665;</span>
                    )}
                </button>

                <button className="viewButton" onClick={toggleView}>
                    <img className="viewIcon" style={viewStyle} src={eyeIcon}/>
                </button>
                </div>
            </div>
        </>
    );
};
export default MovieCard;