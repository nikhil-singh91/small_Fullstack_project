import React from 'react';

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <button
          type="button"
          className="search-clear-btn"
          onClick={() => setSearch('')}
          title="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;
