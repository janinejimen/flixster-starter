import './Sorting.css'

const Sorting = () => {
    return (
        <>
            <div className="dropdown">
                <button className="dropbtn">Sort</button>
                <div className="dropdown-content">
                    <a href="#">A-Z</a>
                    <a href="#">release date</a>
                    <a href="#">vote average</a>
                </div>
            </div>
        </>
    );
};
export default Sorting;