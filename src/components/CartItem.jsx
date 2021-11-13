import React from "react";

const CartItem = (props) => {
  return (
    <div className="cart-item">
      <div className="product-name">
        <div className="product-image">
          <img src={props.image} alt={props.name} />
          <h4>{props.name}</h4>
        </div>
      </div>
      <h4>&#8377;{props.price}</h4>
      <div className="quantity">{props.quantity}</div>
      <h4>&#8377;{props.price * props.quantity}</h4>
    </div>
  );
};

export default CartItem;
