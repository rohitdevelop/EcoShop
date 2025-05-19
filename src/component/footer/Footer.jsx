import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold">EcoShop</h2>
          <p className="text-gray-300 mt-2">Your one-stop shop for eco-friendly and organic products.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/menu" className="hover:text-yellow-400">Menu</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="text-gray-300 mt-2">📍 Noida, India</p>
          <p className="text-gray-300">📧 support@ecoshop.com</p>
          <p className="text-gray-300">📞 +91 98765 43210</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-yellow-400"><FaFacebookF size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-yellow-400"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-yellow-400"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-yellow-400"><FaLinkedinIn size={20} /></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-8 text-center border-t border-gray-600 pt-4 text-gray-400">
        &copy; {new Date().getFullYear()} EcoShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
