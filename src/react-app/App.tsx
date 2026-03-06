import { BrowserRouter as Router, Routes, Route } from "react-router";
import CategoryPage from "@/react-app/pages/CategoryPage";
import Categories from "@/react-app/pages/Categories";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
