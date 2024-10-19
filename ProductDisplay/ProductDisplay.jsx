import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(""); // State for selected size
    const [isAnimating, setIsAnimating] = useState(false); // State for button animation

    const handleSizeSelect = (size) => {
        setSelectedSize(size); // Update selected size
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Please select a size before adding to cart");
            return;
        }
        setIsAnimating(true); // Trigger animation
        addToCart(product.id, selectedSize); // Pass product ID and size to addToCart
        console.log(`Product added: ${product.name}, Size: ${selectedSize}`);

        setTimeout(() => {
            setIsAnimating(false); // Reset animation after a short delay
        }, 300); // Match the duration of your CSS transition
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size-options">
                        {["S", "M", "L", "XL", "XXL"].map(size => (
                            <div 
                                key={size}
                                className={`${selectedSize === size ? 'selected' : ''} size-option`} 
                                onClick={() => handleSizeSelect(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <button 
                    className={isAnimating ? 'animating' : ''} 
                    onClick={handleAddToCart}
                >
                    ADD TO CART
                </button>
            </div>
        </div>
    );
}

export default ProductDisplay;