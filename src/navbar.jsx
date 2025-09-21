import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2  z-50">
      <nav className="flex items-center justify-between bg-black/90 text-white rounded-2xl px-4 py-2 shadow-md backdrop-blur-md border border-gray-700">
        {/* Left Icon */}
        <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
          <FaEnvelope size={20} />
        </button>

        {/* Links */}
        <ul className="flex gap-6 px-6 font-medium">
          <li className="hover:text-gray-300 cursor-pointer transition">
            Portfolio
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition">
            Our Process
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition">
            Reviews
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition">
            Pricing
          </li>
        </ul>

        {/* Right Icon */}
        <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
          <FaPhoneAlt size={20} />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
