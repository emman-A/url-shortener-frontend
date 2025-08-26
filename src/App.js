import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Urlcode from "./pages/Urlcode";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Static route */}
        <Route path="/" element={<Home />} />

        {/* Dynamic route */}
        <Route path="/:id" element={<Urlcode/>} />
      </Routes>
    </Router>
  );
}
