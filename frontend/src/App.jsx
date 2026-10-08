import React, { useEffect, useState, useMemo } from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import Filters from './Filters';
import './App.css'; // Import CSS styles

function App() {
  // State to store the products list received from backend
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter & Search states
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('');

  // useEffect with empty array [] runs only ONCE when the component loads
  useEffect(() => {
    // Async function to fetch data from backend API
    async function APIcall() {
      try {
        setLoading(true);
        console.log("Fetching products from backend...");
        let response = await fetch("https://small-fullstack-project-2.onrender.com/api/products");
        let data = await response.json();
        console.log("Fetched products:", data);
        setProducts(data); // save fetched products into state
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    APIcall();
  }, []); // [] runs only one time on page load

  // Extract unique categories dynamically from products
  const availableCategories = useMemo(() => {
    const cats = new Set();
    products.forEach((p) => {
      if (p.category) {
        cats.add(p.category.toLowerCase());
      }
    });
    return Array.from(cats);
  }, [products]);

  // Compute filtered & sorted products based on search, category, and sort state
  const filteredProducts = useMemo(() => {
    return products
      .filter((item) => {
        // Search filter (matches title or description)
        const query = search.trim().toLowerCase();
        const matchesSearch =
          !query ||
          item.title?.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query);

        // Category filter
        const matchesCategory =
          category === 'all' ||
          item.category?.toLowerCase() === category.toLowerCase();

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sort === 'price-low') {
          return a.price - b.price;
        }
        if (sort === 'price-high') {
          return b.price - a.price;
        }
        if (sort === 'rating-high') {
          return (b.rating || 0) - (a.rating || 0);
        }
        if (sort === 'rating-low') {
          return (a.rating || 0) - (b.rating || 0);
        }
        return 0;
      });
  }, [products, search, category, sort]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Product Store</h1>
        <p className="app-subtitle">Search, filter, and discover products easily</p>
      </header>

      {/* Search and Filters Controls */}
      <section className="controls-panel">
        <SearchBar search={search} setSearch={setSearch} />

        <Filters
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
          categories={availableCategories}
        />
      </section>

      {/* Product List */}
      {loading ? (
        <p className="loading-text">Loading products from backend...</p>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
}

export default App;