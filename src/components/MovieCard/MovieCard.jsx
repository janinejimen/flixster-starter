import "./MovieCard.css";

const MovieCard = ({title, key, imgPath, voterAvg}) => {
    return (
        <>
            <div className="movie-item">
                <p>{title}</p>
                <img src={`https://image.tmdb.org/t/p/w500${imgPath}`} alt={title}/>
                <p>{voterAvg}</p>
            </div>
        </>
    );
};
export default MovieCard;