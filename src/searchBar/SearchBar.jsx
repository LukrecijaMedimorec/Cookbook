import React, { useState } from 'react';
import './search_bar.css'; // Import the CSS file for styling

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        if (onSearch) {
            onSearch(query); // Call the parent function with the search query
        }
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
                className="search-input"
            />
            <button type="submit" className="search-button">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    );
};

export default SearchBar;
