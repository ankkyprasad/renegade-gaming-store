import { BrowserRouter, Route, Routes } from "react-router-dom";

// importing pages
import Home from "./pages/Home";
import Games from "./pages/Games";
import Account from "./pages/Account";
import Nav from "./components/Nav";

//importing styles
import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/games*" exact element={<Games />} />
        <Route path="/account" exact element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
