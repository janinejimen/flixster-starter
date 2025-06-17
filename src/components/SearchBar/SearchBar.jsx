import React, {useState} from 'react'
import './SearchBar.css'

const SearchBar = ({currSearch, setCurrSearch, page, setPage}) => {

    const [search, setSearch] = useState('');

    const updateSearch = (event) => {
        setSearch(event.target.value);
    };

    const searchClick = () => {
        if(page != 1) {
            setPage(1);
        }
        setCurrSearch(search);
    };

    const clearClick = () => {
        if(page != 1) {
            setPage(1);
        }
        setCurrSearch('');
        setSearch('');
    };

    const handleEnter = (event) => {
        if(event.key === 'Enter') {
            searchClick();
        }
    }

    return (
        <>
            <div className="search-div">
                <input type="text" onKeyDown={handleEnter} placeholder="Search" value={search} onChange={updateSearch} className="search-bar"/>
                <button className="search-button" onClick={searchClick}>SEARCH</button>
                <button className="clear-button" onClick={clearClick}>CLEAR</button>
            </div>
        </>
    );
};
export default SearchBar;