import React from 'react';

function SearchBar({searchTerm, setSearchTerm}) {

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
        // console.log(searchTerm)
    } 
    return (
        <input className="Item__search" 
        placeholder='Search by Name' 
        type="text" 
        value={searchTerm}
        onChange={handleChange}
        />

    );
}

export default SearchBar;