import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shineup from "./pages/Shineup";    // ✅ Corrected
import Menu from "./pages/Menu";
import Logout from "./pages/Logout";      // ✅ Corrected
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Logout />} />
        <Route path="/shineup" element={<Shineup />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
