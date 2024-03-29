import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

// importing pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Nav from "./components/Nav";
import Foot from "./components/Foot";

//importing styles
import "./styles/App.scss";

function App() {
  const [gameData, setGameData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchGames = async () => {
    try {
      const res = await axios.get(
        `https://api.rawg.io/api/games?key=${process.env.REACT_APP_GAME_API}`
      );
      const data = await res.data;
      setGameData(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              gameData={gameData}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        <Route path="/cart" exact element={<Cart cartItems={cartItems} />} />
        <Route path="/account" exact element={<Account />} />
      </Routes>
      <Foot />
    </BrowserRouter>
  );
}

export default App;
