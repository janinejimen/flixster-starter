import './Sorting.css'


const Sorting = ({ onChange }) => {

    return (
        <>
            <select className="sort-options" onChange={onChange}>
                <option value="">Sort</option>
                <option value="original_title.asc">Title (A-Z)</option>
                <option value="primary_release_date.desc">Release Date</option>
                <option value="vote_average.desc">Vote Average</option>
            </select>
        </>
    );
};
export default Sorting;