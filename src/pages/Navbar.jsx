import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";  // Import ikon hamburger

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link to="/" className="text-xl font-bold text-orange-500">
              HafizhR
            </Link>
          </div>

          {/* Navbar Menu */}
          <nav className="hidden md:flex md:items-center gap-6">
            <ul className="flex items-center gap-6">
              <li>
                <Link to="/" className="text-orange-500 hover:text-blue-500/75">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-orange-500 hover:text-blue-500/75">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-orange-500 hover:text-blue-500/75">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Hamburger Icon for mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleDropdown} className="text-3xl text-orange-500">
              <FaBars />  {/* Hamburger icon */}
            </button>
          </div>
        </div>

        {/* Dropdown for mobile */}
        {isDropdownOpen && (
          <div className="absolute top-16 right-4 bg-white shadow-lg rounded-md z-10 w-40">
            <ul className="flex flex-col items-start p-2">
              <li>
                <Link to="/" className="block px-4 py-2 text-orange-500 hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="block px-4 py-2 text-orange-500 hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block px-4 py-2 text-orange-500 hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
