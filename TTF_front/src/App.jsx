import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Insight from "./pages/Insight";
import World from "./pages/World";
import Enemies from "./pages/Enemies";
import Maps from "./pages/Maps";
import MapDetail from "./pages/MapDetail";
import Heroes from "./pages/Heroes";
import HeroDetail from "./pages/HeroDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insight" element={<Insight />} />
        <Route path="/world" element={<World />} />
        <Route path="/enemies" element={<Enemies />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/maps/:id" element={<MapDetail />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/heroes/:id" element={<HeroDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
