import React from "react";
import Card from "../components/Card";

const Home = ({ gameData, cartItems, setCartItems }) => {
  return (
    <main className="home">
      <section>
        <div className="home-games">
          {gameData.length > 0 &&
            gameData.map((game) => (
              <Card
                imageURL={game.background_image}
                name={game.name}
                year={game.released}
                rating={game.rating}
                cartItems={cartItems}
                setCartItems={setCartItems}
                id={game.id}
                key={game.id}
              />
            ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
