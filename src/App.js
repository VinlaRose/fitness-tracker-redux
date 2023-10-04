
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Exercise from "./pages/Exercise";
import Food from "./pages/Food";
import Goals from "./pages/Goals";
import Dashboard from "./pages/Dashboard";
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/exercises" className="nav-link">
            Exercise
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/food" className="nav-link">
            Food
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/goals" className="nav-link">
            Goals
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>

          <Routes>
            <Route path="/exercises" element={<Exercise />} />
            <Route path="/food" element={<Food />} />
            <Route path="/goals" element={<Goals/>} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
