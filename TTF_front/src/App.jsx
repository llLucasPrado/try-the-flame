import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Insight from "./pages/Insight";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insight" element={<Insight />} />
      </Routes>
    </BrowserRouter>
  );
}
