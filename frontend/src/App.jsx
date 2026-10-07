import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import './App.css'; // Import CSS styles

function App() {
  // State to store the products list received from backend
  const [products, setProducts] = useState([]);

  // useEffect with empty array [] runs only ONCE when the component loads
  useEffect(() => {
    // Async function to fetch data from backend API
    async function APIcall() {
      try {
        console.log("Fetching products from backend...");
        let response = await fetch("http://localhost:3000/api/products");
        let data = await response.json();
        console.log(data);
        setProducts(data); // save fetched products into state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    APIcall();
  }, []); // [] runs only one time on page load

  return (
    <div className="app-container">
      {/* Render only products data using ProductList component */}
      <ProductList products={products} />
    </div>
  );
}

export default App;