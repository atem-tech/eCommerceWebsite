import { useContext } from "react";
import React from "react";
import CartContext from "../../Context/CartContext";
import "./cart.css";
import { useHistory } from "react-router";

// useContext
// cart is a global state here and it is accessable to all page on the component

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const history = useHistory();

  // this modify the # of items in the cart
  const modifyCount = (e, index) => {
    const cartCopy = [...cart];
    cartCopy[index].count = e.target.value;
    setCart(cartCopy);
  };

  // cart statu is array for is an array method it loops in each array  initial #0
  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => (total += item.price * item.count));
    return total;
  };

  return (
    <div className="cart_container">
      <div className="product_cart_container">
        {cart.map((item, index) => (
          <div className="cart_item">
            <h4>
              {index + 1}.) {item.title}
            </h4>

            <div className="cart_edit_group">
              <h4>
                ${item.price} x
                <input
                  className="count_edit"
                  onChange={(e) => {
                    modifyCount(e, index);
                  }}
                  value={item.count}
                ></input>
                = ${item.price * item.count}
              </h4>
            </div>
          </div>
        ))}
      </div>
      <h1>Total : ${calculateTotal()}</h1>
      <button
        className="checkoutButton"
        onClick={() => {
          setCart([]);
          history.push("/checkout");
        }}
      >
        <h3>Proceed to Checkout</h3>
      </button>
    </div>
  );
};

export default Cart;
