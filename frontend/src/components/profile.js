import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ isLoggedIn, darkMode }) => {
  // Profile image sources for dark and light modes
  const profileImgSrc = darkMode
    ? "/assets/images/profile_dark.jpg"
    : "/assets/images/profile_light.jpg";

  return (
    <button className="bg-gray-200 dark:bg-gray-700 text-blue-600 px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200 ease-in-out">
      {isLoggedIn ? (
        <Link to="/logout" className="hover:text-blue-800">
          <img
            className="h-10 w-10 rounded-full"
            src={profileImgSrc}
            alt="profile"
          />
        </Link>
      ) : (
        <Link to="/login" className="hover:text-blue-800">
          Login / Register
        </Link>
      )}
    </button>
  );
};

export default Profile;
