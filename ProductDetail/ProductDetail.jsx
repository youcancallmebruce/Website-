import React from 'react';
import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import all_product from '../Assets/all_product';

const ProductDetail = () => {
    const { id } = useParams();
    const product = all_product.find((item) => item.id === parseInt(id));
  
    if (!product) {
      return <div>Product not found</div>;
    }
  
    return (
      <div>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <p>New Price: ${product.new_price}</p>
        <p>Old Price: ${product.old_price}</p>
      </div>
    );
  };
  
  export default ProductDetail;