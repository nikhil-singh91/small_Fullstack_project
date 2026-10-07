import React from 'react';

// ProductList receives 'products' array as a prop from App.jsx
function ProductList({ products }) {
  return (
    <div className="product-section">
      <h2>Products List ({products.length})</h2>

      {/* If products haven't loaded yet, show loading message */}
      {products.length === 0 ? (
        <p className="loading-text">Loading products from backend...</p>
      ) : (
        /* Container for product cards */
        <div className="card-container">
          {/* Loop over each product using map() */}
          {products.map((item) => (
            <div key={item.id} className="product-card">
              <img
                src={item.thumbnail || (item.images && item.images[0])}
                alt={item.title}
                className="card-img"
              />
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-price">${item.price}</p>
                <p className="card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
