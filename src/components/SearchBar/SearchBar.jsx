import React, {useState} from 'react'
import './SearchBar.css'

const SearchBar = ({currSearch, setCurrSearch}) => {

    const updateSearch = (event) => {
        setCurrSearch(event.target.value);
        console.log("current search: " + currSearch);
    }

    return (
        <>
            <div className="search-div">
                <input type="text" placeholder="Search" value={currSearch} onChange={updateSearch} className="search-bar"/>
                <button className="search-button">SEARCH</button>
                <button className="clear-button">CLEAR</button>
            </div>
        </>
    );
};
export default SearchBar;