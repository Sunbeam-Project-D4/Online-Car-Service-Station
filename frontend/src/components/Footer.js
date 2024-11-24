import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section: Logo and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Tagline */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Logo />
            <span className="text-lg font-semibold">Wheely</span>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-200">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-200">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-400 my-4" />

        {/* Bottom Section: Social Media */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="www.facebook.com" className="hover:text-gray-200">
            <FaFacebookF />
          </a>
          <a href="www.facebook.com" className="hover:text-gray-200">
            <FaTwitter />
          </a>
          <a href="www.facebook.com" className="hover:text-gray-200">
            <FaInstagram />
          </a>
          <a href="www.facebook.com" className="hover:text-gray-200">
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm">
          <p>
            © {new Date().getFullYear()} Wheely. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
