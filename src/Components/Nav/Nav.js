import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import "./nav.css";
import CartContext from "../../Context/CartContext";

const Nav = () => {
  const { cart } = useContext(CartContext);

  // it is an adder function total initial 0 cartfor each yearraye method like loop
  const adder = () => {
    let total = 0;
    cart.forEach((item) => (total += item.count));
    return total;
  };

  return (
    <nav>
      <Link className="link" to="/">
        <h1 className="title">Home</h1>
      </Link>
      <Link className="link" to="/cart">
        <BsCartCheck className="icon" />
        <p>{adder()}</p>
      </Link>
    </nav>
  );
};

export default Nav;
