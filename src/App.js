
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Exercise from "./pages/Exercise";
import Food from "./pages/Food";
import Goals from "./pages/Goals";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/exercises">Exercise</Link>
              </li>
              <li>
                <Link to="/food">Food</Link>
              </li>
              <li>
                <Link to="/goals">Goals</Link>
              </li>
              <li>
                <Link to="/">Dashboard</Link>
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
