import React, { useContext, useState } from "react";
import './CartItems.css';
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/remove-icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount(); // Calculate the total price

  // State to manage the payment confirmation
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  // Handle the checkout form submission
  const handleCheckout = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Prepare order data; this could be an object containing necessary info
    const orderData = {
      cartItems,
      totalAmount,
      // Add more details as needed, like user info or shipping address
    };
    
    // Call the checkout function to clear the cart and handle order
    checkout(orderData);
    setPaymentConfirmed(true); // Set payment confirmation to true
  };

  if (paymentConfirmed) {
    return (
      <div className='thank-you-message'>
        <h1>Thank You for Shopping!</h1>
        <p>Your payment has been confirmed.</p>
      </div>
    );
  }

  return (
    <div className='cartitems'>
      <h1>Your Shopping Cart</h1>

      <div className="cartitems-header">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((product) => {
        if (cartItems[product.id] > 0) { // Only display items in the cart
          return (
            <div key={product.id}>
              <div className="cartitems-body">
                <img src={product.image} alt={product.name} className='cartitems-product-img' />
                <p>{product.name}</p>
                <p>${product.new_price.toFixed(2)}</p>
                <p>{cartItems[product.id]}</p>
                <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
                <img 
                  src={remove_icon} 
                  onClick={() => removeFromCart(product.id)} 
                  alt="Remove" 
                  className="cartitems-remove-icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null; // Skip products that are not in the cart
      })}

      {totalAmount > 0 ? (
        <div className="cartitems-total">
          <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>

          {/* Payment Details Section */}
          <div className="payment-details">
            <h2>Payment Details</h2>
            <form onSubmit={handleCheckout}>
              <div className="payment-row">
                <div className="payment-field">
                  <p className="payment-cardnumber">Card Number</p>
                  <input id="card-number" type="text" placeholder="1234 1234 1234 1234" className="payment-input card-number" required />
                </div>
                <div className="payment-field">
                  <p className="payment-expiration">Expiration</p>
                  <input id="expiration" type="text" placeholder="MM / YY" className="payment-input expiration" required />
                </div>
                <div className="payment-field">
                  <p className="payment-cvc">CVC</p>
                  <input id="cvc" type="text" placeholder="CVC" className="payment-input cvc" required />
                </div>
              </div>
              <div className="payment-field-full">
                <p className="payment-country">Country</p>
                <input id="country" type="text" placeholder="Country" className="payment-input-full" required />
              </div>
              <button type="submit" className="checkout-btn">Checkout</button>
            </form>
          </div>
        </div>
      ) : (
        <div className="cartitems-empty">
          <p>Your Cart Is Empty.</p>
        </div>
      )}
    </div>
  );
};

export default CartItems;
