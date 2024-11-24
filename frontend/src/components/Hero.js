import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="max-w-xl mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Welcome to <span className="text-yellow-300">Wheely</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Your one-stop platform for seamless vehicle services. Explore, book, and enjoy effortless rides with our reliable mechanics and service providers.
          </p>
          <div className="space-x-4">
            <Link
              to="/services"
              className="bg-yellow-300 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Explore Services
            </Link>
            <Link
              to="/about"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="max-w-lg">
          <img
            src="https://via.placeholder.com/500"
            alt="Hero Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
