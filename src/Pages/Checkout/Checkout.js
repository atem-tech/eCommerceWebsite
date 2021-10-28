import React, { useContext } from "react";
import "./checkout.css";
import { useHistory } from "react-router";
import CartContext from "../../Context/CartContext";

const Checkout = () => {
  const history = useHistory();
  const { cart, setCart } = useContext(CartContext);

  const adder = () => {
    let total = 0;
    cart.forEach((item) => (total += item.count));
    return total;
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => (total += item.price * item.count));
    return total;
  };

  return (
    <div>
      <h3>Total items in cart: {parseInt(adder())}</h3>
      <div className="form-container">
        <form className="register-form">
          <div className="success-message">Payment Information</div>

          <input
            id="full-name"
            className="form-field"
            type="text"
            placeholder="Full Name"
            name="fulltName"
          />
          <input
            id="address"
            className="form-field"
            type="text"
            placeholder="Shipping Address"
            name="address"
          />

          <input
            id="billing Address"
            className="form-field"
            type="text"
            placeholder="Billing Address"
            name="billing address"
          />
          <input
            id="text"
            className="form-field"
            type="text"
            placeholder="Credit Card Informattion"
            name="credit card"
          />

          <button
            className="form-field"
            type="submit"
            onClick={() => history.push("/")}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
