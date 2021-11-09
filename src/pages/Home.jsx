import React from "react";
import Card from "../components/Card";

const Home = ({ gameData }) => {
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
                key={game.id}
              />
            ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
