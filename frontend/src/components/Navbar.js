import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/reducers/darkModeReducer"; // Redux action
import { MdLightMode, MdDarkMode } from "react-icons/md";
import Logo from "./Logo";
import Profile from "../components/profile"; // Import Profile component

const Navbar = ({ userRole, isLoggedIn }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className={`bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-lg`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold hover:text-gray-200">
          <Logo darkMode={darkMode} />
          <span className="text-3xl mt-1 font-mono font-bold">Wheely</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 flex-grow justify-center">
          <li>
            <Link
              to="/"
              className={`hover:text-gray-200 m ${location.pathname === "/" ? "border-b-2 border-solid border-yellow-300 font-semibold" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`hover:text-gray-200 ${location.pathname === "/services" ? "border-b-2 border-solid border-yellow-300 font-semibold" : ""}`}
            >
              Services
            </Link>
          </li>
          {userRole === "customer" && (
            <li>
              <Link
                to="/dashboard/customer"
                className={`hover:text-gray-200 ${
                  location.pathname === "/dashboard/customer" ? "border-b-2 border-solid border-yellow-300 font-semibold" : ""
                }`}
              >
                Dashboard
              </Link>
            </li>
          )}
          {userRole === "admin" && (
            <>
              <li>
                <Link
                  to="/dashboard/admin"
                  className={`hover:text-gray-200 ${
                    location.pathname === "/dashboard/admin" ? "border-b-2 border-solid border-yellow-300 font-semibold" : ""
                  }`}
                >
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/reports"
                  className={`hover:text-gray-200 ${
                    location.pathname === "/reports" ? "border-b-2 border-solid border-yellow-300 font-semibold" : ""
                  }`}
                >
                  Reports
                </Link>
              </li>
            </>
          )}
          {userRole === "mechanic" && (
            <li>
              <Link
                to="/dashboard/mechanic"
                className={`hover:text-gray-200 ${
                  location.pathname === "/dashboard/mechanic" ? "border-b-2 border-solid border-yellow-300 font-semibold" : ""
                }`}
              >
                Mechanic Dashboard
              </Link>
            </li>
          )}
          <li>
            <Link
              to="/about"
              className={`hover:text-gray-200 ${location.pathname === "/about" ? "border-b-2 border-solid border-yellow-300 font-semibold" : ""}`}
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex space-x-4 items-center">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => dispatch(toggleDarkMode())}
            className="px-3 py-1 rounded transition duration-200 ease-in-out transform hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {darkMode ? (
              <MdLightMode className="h-8 w-8" />
            ) : (
              <MdDarkMode className="h-8 w-8" />
            )}
          </button>

          {/* Profile / Login */}
          <Profile isLoggedIn={isLoggedIn} darkMode={darkMode} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
