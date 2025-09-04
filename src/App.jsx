import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";            // ✅ import here if not in main.jsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Course from "./pages/Course";

function App() {
  return (
    <Router>
      <div className="app">            {/* ✅ matches your CSS */}
        <Navbar />
        <div className="app-content">  {/* ✅ matches your CSS */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/course/:id" element={<Course />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
