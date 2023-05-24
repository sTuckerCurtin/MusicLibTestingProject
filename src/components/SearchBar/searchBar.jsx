import React from 'react';

const SearchBar = (props) => {

    return (
        <div>
        <input
            data-cy="search-bar"
            type="text"
            placeholder="Search"
            onChange={(event) => props.filterSongs(event)}
        />
        </div>
    );
}

export default SearchBar;