import "./App.scss";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//route paths for each component and page
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
