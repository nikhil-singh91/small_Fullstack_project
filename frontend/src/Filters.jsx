import React from 'react';

function Filters({ category, setCategory, sort, setSort, categories = [] }) {
  // Default list of categories if not provided dynamically
  const defaultCategories = ['beauty', 'fragrances', 'furniture', 'groceries'];
  const categoryOptions = categories.length > 0 ? categories : defaultCategories;

  return (
    <div className="filters">
      <div className="filter-group">
        <label htmlFor="category-select" className="filter-label">Category</label>
        <select
          id="category-select"
          className="filter-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categoryOptions.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="sort-select" className="filter-label">Sort By</label>
        <select
          id="sort-select"
          className="filter-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Default (No Sorting)</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating-high">Rating: High to Low</option>
          <option value="rating-low">Rating: Low to High</option>
        </select>
      </div>

      {(category !== 'all' || sort !== '') && (
        <button
          type="button"
          className="reset-filters-btn"
          onClick={() => {
            setCategory('all');
            setSort('');
          }}
        >
          Reset Filters
        </button>
      )}
    </div>
  );
}

export default Filters;
