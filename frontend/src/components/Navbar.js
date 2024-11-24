import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ userRole }) => {
  const [darkMode, setDarkMode] = useState(false);

  // When darkMode changes, update the class on <html> or <body>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo on the left */}
        <Link to="/" className="text-xl font-bold hover:text-gray-200">
        Wheely
        </Link>

        {/* Navigation links in the middle */}
        <ul className="flex space-x-6 flex-grow justify-center">
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
          {userRole === "customer" && (
            <>
              <li>
                <Link
                  to="/dashboard/customer"
                  className="hover:text-gray-200"
                >
                  Dashboard
                </Link>
              </li>
            </>
          )}
          {userRole === "admin" && (
            <>
              <li>
                <Link
                  to="/dashboard/admin"
                  className="hover:text-gray-200"
                >
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <Link to="/reports" className="hover:text-gray-200">
                  Reports
                </Link>
              </li>
            </>
          )}
          {userRole === "mechanic" && (
            <li>
              <Link
                to="/dashboard/mechanic"
                className="hover:text-gray-200"
              >
                Mechanic Dashboard
              </Link>
            </li>
          )}
          <li>
            <Link to="/about" className="hover:text-gray-200">
              About Us
            </Link>
          </li>
        </ul>

        {/* Login/Register on the right */}
        <div className="flex space-x-4">
          <li className="">
            <Link
              to="/login"
              className="bg-gray-200 text-blue-600 px-3 py-1 rounded hover:bg-gray-300"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="bg-gray-200 text-blue-600 px-3 py-1 rounded hover:bg-gray-300"
            >
              Register
            </Link>
          </li>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-200 hover:text-gray-400 px-3 py-1 rounded"
          >
            {darkMode ? 
            "Light Mode" 
            :
             "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
