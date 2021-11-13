import React from "react";
import CartItem from "../components/CartItem";

const Cart = () => {
  const data = [
    {
      id: 3498,
      name: "Grand Theft Auto V",
      background_image:
        "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
      quantity: 4,
    },
  ];
  return (
    <main className="cart">
      <section>
        <ul>
          <li>Product</li>
          <li>Price</li>
          <li>Quatity</li>
          <li>Total</li>
        </ul>
        <CartItem
          name={data[0].name}
          image={data[0].background_image}
          price={data[0].id}
          quantity={data[0].quantity}
        />
        <CartItem
          name={data[0].name}
          image={data[0].background_image}
          price={data[0].id}
          quantity={data[0].quantity}
        />
      </section>
    </main>
  );
};

export default Cart;
