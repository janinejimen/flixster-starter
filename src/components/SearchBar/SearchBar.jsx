import React, {useState} from 'react'
import './SearchBar.css'

const SearchBar = ({currSearch, setCurrSearch}) => {

    const [search, setSearch] = useState('');

    const updateSearch = (event) => {
        setSearch(event.target.value);
    };

    const searchClick = () => {
        setCurrSearch(search);
    };

    const clearClick = () => {
        setCurrSearch('');
        setSearch('');
    };

    return (
        <>
            <div className="search-div">
                <input type="text" placeholder="Search" value={search} onChange={updateSearch} className="search-bar"/>
                <button className="search-button" onClick={searchClick}>SEARCH</button>
                <button className="clear-button" onClick={clearClick}>CLEAR</button>
            </div>
        </>
    );
};
export default SearchBar;