import "./MovieModal.css";

const MovieModal = ({show, onClose, movie}) => {
    if (!show || !movie) return null;

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <button onClick={onClose}>X</button>
                </div>
                <div className="modal-body">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                    <h2>{movie.title}</h2>
                    <h4>{movie.genres[0].name}</h4>
                    <h4>{movie.runtime} min</h4>
                    <h5>{movie.release_date}</h5>
                    <p>{movie.overview}</p>
                    {/* <iframe id="trailer" width="560" height="315" src="" allowfullscreen/> */}
                </div>
            </div>
        </div>
    );
};
export default MovieModal;