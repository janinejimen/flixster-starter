import './Sorting.css'


const Sorting = ({ onChange }) => {

    return (
        <>
            <select className="sort-options" onChange={onChange}>
                <option value="popularity.desc">Popularity</option>
                <option value="primary_release_date.desc">Release Date</option>
                <option value="vote_average.desc">Vote Average</option>
            </select>
        </>
    );
};
export default Sorting;