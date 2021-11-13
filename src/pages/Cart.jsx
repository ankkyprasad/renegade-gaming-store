import React from "react";
import CartItem from "../components/CartItem";

const Cart = ({ cartItems }) => {
  return (
    <main className="cart">
      <section>
        <ul>
          <li>Product</li>
          <li>Price</li>
          <li>Quatity</li>
          <li>Total</li>
        </ul>
        {cartItems.map((item) => (
          <CartItem
            name={item.name}
            image={item.background_image}
            price={item.id}
            quantity={item.quantity}
          />
        ))}
      </section>
    </main>
  );
};

export default Cart;
