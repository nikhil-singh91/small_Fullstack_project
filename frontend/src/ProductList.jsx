import React from 'react';

// ProductList receives 'products' array as a prop from App.jsx
function ProductList({ products }) {
  return (
    <div className="product-section">
      <div className="product-header">
        <h2>Products List ({products.length})</h2>
      </div>

      {/* If products haven't loaded yet or none match */}
      {products.length === 0 ? (
        <div className="no-products">
          <p className="loading-text">No products found matching your criteria.</p>
        </div>
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
                loading="lazy"
              />
              <div className="card-body">
                <div className="card-meta">
                  {item.category && (
                    <span className="card-badge category-badge">
                      {item.category}
                    </span>
                  )}
                  {item.rating && (
                    <span className="card-badge rating-badge">
                      ★ {item.rating}
                    </span>
                  )}
                </div>
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
