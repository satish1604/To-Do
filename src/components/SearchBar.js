import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    navigate(`/?search=${query}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        name="search"
        placeholder="Search tasks..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
