import React, { useState, useContext } from 'react';
import './Navbar.css';
import cart_icon from '../Assets/cart icon.jpeg';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext'; // Import the context

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
    const { cartItems } = useContext(ShopContext); // Access the cartItems from context

    // Calculate the total count of items in the cart
    const totalItemsInCart = Object.values(cartItems).reduce((acc, count) => acc + count, 0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <p>LUXE</p>
            </div>

            <div className="nav-toggle" onClick={toggleMenu}>
                <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
                <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
                <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
            </div>

            <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                <li onClick={() => { setMenu("shop"); setIsMenuOpen(false); }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
                    {menu === "shop" ? <hr /> : null}
                </li>
                <li onClick={() => { setMenu("mens"); setIsMenuOpen(false); }}>
                    <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>
                    {menu === "mens" ? <hr /> : null}
                </li>
                <li onClick={() => { setMenu("womens"); setIsMenuOpen(false); }}>
                    <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>
                    {menu === "womens" ? <hr /> : null}
                </li>
                <li onClick={() => { setMenu("kids"); setIsMenuOpen(false); }}>
                    <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>
                    {menu === "kids" ? <hr /> : null}
                </li>
            </ul>

            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart' className="nav-cart">
                    <img src={cart_icon} alt="cart" />
                    {totalItemsInCart > 0 && <div className="nav-cart-count">{totalItemsInCart}</div>} {/* Cart count here */}
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
