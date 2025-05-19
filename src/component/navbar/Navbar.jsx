import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUser, FaUserPlus } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-800 to-green-600 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-white text-3xl font-bold tracking-wide">
          <Link to="/">EcoShop</Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          
          {/* Signup Button */}
          <Link to="/shineup">
            <button className="flex items-center gap-2 bg-yellow-400 text-green-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300">
              <FaUserPlus /> Sign Up
            </button>
          </Link>

          {/* Login Button */}
          <Link to="/login">
            <button className="flex items-center gap-2 border border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-green-800 transition-all duration-300">
              <FaUser /> Login
            </button>
          </Link>

          <NavLink to="/card">
            <button className="bg-white text-green-800 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
              🛒 Cart
            </button>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-3xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-700 text-white flex flex-col items-center py-4 space-y-4 transition-all duration-300">
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/menu" onClick={() => setIsOpen(false)}>Menu</NavLink>
          
          <Link to="/shineup" onClick={() => setIsOpen(false)}>
            <button className="flex items-center gap-2 bg-yellow-400 text-green-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500">
              <FaUserPlus /> Sign Up
            </button>
          </Link>

          <Link to="/login" onClick={() => setIsOpen(false)}>
            <button className="flex items-center gap-2 border border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-green-800">
              <FaUser /> Login
            </button>
          </Link>

          <NavLink to="/card" onClick={() => setIsOpen(false)}>
            <button className="bg-white text-green-800 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400">
              🛒 Cart
            </button>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

// Reusable NavLink Component
const NavLink = ({ to, children, onClick }) => (
  <Link to={to} onClick={onClick} className="text-white text-lg font-medium hover:text-yellow-300">
    {children}
  </Link>
);

export default Navbar;
