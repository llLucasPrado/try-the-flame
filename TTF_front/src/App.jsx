import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Insight from "./pages/Insight";
import World from "./pages/World";
import Enemies from "./pages/Enemies";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insight" element={<Insight />} />
        <Route path="/world" element={<World />} />
        <Route path="/enemies" element={<Enemies />} />
      </Routes>
    </BrowserRouter>
  );
}