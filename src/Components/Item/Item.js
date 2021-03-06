import React from "react";
import "./item.css";
import { useHistory } from "react-router";

const Item = (props) => {
  const history = useHistory();

  const imgStyles = {
    height: "200px",
    width: "100%",
    backgroundImage: `url(${props.product.image})`,
    backgroundSize: "cover",
    position: "center",
  };

  const containerPadding = {
    paddingLeft: "10px",
    paddingRight: "10px",
  };

  const textMargin = {
    marginTop: "10px",
  };

  return (
    <div className="product">
      <div style={containerPadding}>
        <div style={imgStyles}></div>
        <h4 style={textMargin}>{props.product.title}</h4>
        <h4 style={textMargin}>${props.product.price}</h4>
      </div>
      <div className="info_container">
        <h3>{props.product.rating.rate}</h3>
        <button
          onClick={() => history.push(`/product/${props.product.id}`)}
          className="infoButton"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Item;
