import React from "react";

function SearchBar({ setSortType, setFilterType }) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="alphabetical"
          name="sort"
          onChange={(e) => setSortType(e.target.value)}
        />
        Alphabetical
      </label>
      <label>
        <input
          type="radio"
          value="price"
          name="sort"
          onChange={(e) => setSortType(e.target.value)}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => setFilterType(e.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Finance">Finance</option>
          <option value="Healthcare">Healthcare</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;