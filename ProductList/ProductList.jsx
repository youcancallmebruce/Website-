import React from 'react';
import './ProductList.css';
import { Link } from "react-router-dom";
import all_product from '../Assets/all_product';

const ProductList = () => {
    return (
        <div>
      <h1>Men's Products</h1>
      <div className="product-list">
        {all_product
          .filter((product) => product.category === "men")
          .map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.new_price}</p>
              <Link to={`/product/${product.id}`}>View Details</Link>
            </div>
          ))}
      </div>
    </div>
    );
};

export default ProductList;

