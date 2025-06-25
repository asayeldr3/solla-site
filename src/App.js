import React from "react";
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Tansheef from "./pages/Tansheef";
import Workout from "./pages/workout";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tansheef" element={<Tansheef />} />
        <Route path="/workout" element={<Workout />} />
      </Routes>

    </Router>
  );
}

export default App ;
  