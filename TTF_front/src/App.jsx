import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Insight from "./pages/Insight";
import World from "./pages/World";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insight" element={<Insight />} />
        <Route path="/world" element={<World />} />
      </Routes>
    </BrowserRouter>
  );
}