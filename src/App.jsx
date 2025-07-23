import Home from "./Pages/Home"
import Favourites from "./Pages/Favourites"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css"

function App() {

  return (
    <>
    <Router>
      <header className="navbar">
        <h1>🎬 Movie Explorer</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        </nav>
      </header>

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favourites />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
