import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="absolute w-full py-4 px-6 md:px-20 flex justify-between items-center z-10">
      {/* Logo */}
      <div className="flex items-center space-x-3">
      <img
        src={`${process.env.PUBLIC_URL}/logo.png`}
        alt="Barbershop Logo"
        className="h-12 w-auto"
      />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 text-sm font-semibold text-gray-300">
      <a href="#home" className="hover:text-yellow-500">
        Home
      </a>
      <a href="#services" className="hover:text-yellow-500">
        Services and Prices
      </a>
      <a href="#about" className="hover:text-yellow-500">
        About Us
      </a>
      <a href="#franchise" className="hover:text-yellow-500">
        Franchise
      </a>
      <a href="#team" className="hover:text-yellow-500">
        Our Team
      </a>
      <a href="#contact" className="hover:text-yellow-500">
        Contact
      </a>
      </div>
    </div>
  );
};

export default Navbar;
