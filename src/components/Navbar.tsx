import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              BJJ Flow
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="group relative hover:text-light transition">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/techniques"
              className="group relative hover:text-light transition"
            >
              Techniques
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/progress"
              className="group relative hover:text-light transition"
            >
              Progress
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/dojo-map"
              className="group relative hover:text-secondary transition"
            >
              Dojo Map
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="group relative hover:text-light transition"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-light focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="group block px-3 py-2 rounded-md text-base font-medium hover:text-light relative"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/techniques"
              className="group block px-3 py-2 rounded-md text-base font-medium hover:text-light relative"
            >
              Techniques
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/progress"
              className="group block px-3 py-2 rounded-md text-base font-medium hover:text-light relative"
            >
              Progress
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="group block px-3 py-2 rounded-md text-base font-medium hover:text-light relative"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
