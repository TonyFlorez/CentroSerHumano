import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Planes from "./planes.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planes" element={<Planes />} />
      </Routes>
    </Router>
  );
}

export default App;