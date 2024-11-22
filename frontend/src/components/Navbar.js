import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { LuUserCircle } from "react-icons/lu";



const Navbar = ({ userRole, isLoggedIn }) => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // When darkMode changes, update the class on <html> or <body>
  useEffect(() => {
    const htmlElement = document.documentElement;

    if (darkMode) {
      // Add classes for dark mode
      htmlElement.classList.add("dark", "bg-gray-900", "text-white");
      htmlElement.classList.remove("bg-white", "text-black");
    } else {
      // Add classes for light mode
      htmlElement.classList.add("bg-white", "text-black");
      htmlElement.classList.remove("dark", "bg-gray-900", "text-white");
    }
  }, [darkMode]);

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo on the left */}
        <Link
          to="/"
          className="flex pt-2 text-xl font-bold hover:text-gray-200"
        >
          {darkMode ? (
            <img
              src="/assets/images/logo-dark.png"
              alt="Wheely Logo"
              className="h-12 w-15 mr-2" // Adjust height and width as needed
            />
          ) : (
            <img
              src="/assets/images/logo-light.png"
              alt="Wheely Logo"
              className="h-12 w-15 mr-2" // Adjust height and width as needed
            />
          )}
          <span className="text-3xl mt-1 font-mono font-bold">wheely</span>
        </Link>

        {/* Navigation links in the middle */}
        <ul className="flex space-x-6 flex-grow justify-center">
          <li>
            <Link to="/"  className={`hover:text-gray-200 ${location.pathname === "/" ? "underline" : ""}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services"  className={`hover:text-gray-200 ${location.pathname === "/services" ? "underline" : ""}`}>
              Services
            </Link>
          </li>
          {userRole === "customer" && (
            <li>
              <Link to="/dashboard/customer"  className={`hover:text-gray-200 ${location.pathname === "/dashboard/customer" ? "underline" : ""}`}>
                Dashboard
              </Link>
            </li>
          )}
          {userRole === "admin" && (
            <>
              <li>
                <Link to="/dashboard/admin"  className={`hover:text-gray-200 ${location.pathname === "/dashboard/admin" ? "underline" : ""}`}>
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <Link to="/reports"  className={`hover:text-gray-200 ${location.pathname === "/reports" ? "underline" : ""}`}>
                  Reports
                </Link>
              </li>
            </>
          )}
          {userRole === "mechanic" && (
            <li>
              <Link to="/dashboard/mechanic"  className={`hover:text-gray-200 ${location.pathname === "/dashboard/mechanic" ? "underline" : ""}`}>
                Mechanic Dashboard
              </Link>
            </li>
          )}
          <li>
            <Link to="/about"  className={`hover:text-gray-200 ${location.pathname === "/about" ? "underline" : ""}`}>
              About Us
            </Link>
          </li>
        </ul>

        {/* Right side: Login/Register or Logout */}
        <div className="flex space-x-4 items-center">
          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className=" px-3 py-1 rounded"
          >
            {darkMode ? <MdLightMode className="h-8 w-8"/> : <MdDarkMode className="h-8 w-8"/>}
          </button>

          <button className="bg-gray-200 text-blue-600 px-3 py-1 rounded hover:bg-gray-300">
            {isLoggedIn ? (
              <Link to="/logout" className="hover:text-blue-800">
                 {darkMode ? <FaCircleUser /> : <LuUserCircle/>}
              </Link>
            ) : (
              <Link to="/login" className="hover:text-blue-800">
                Login / Register
              </Link>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
