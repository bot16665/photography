import React from "react";
import visualViewLogo from "./assets/visualview.png"; // <-- your PNG here
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import bg from "./assets/bg.png";         // your background

const Footer = () => {
  return (
    <footer className=" text-white px-8 md:px-16 py-10 relative"
     style={{ backgroundImage: `url(${bg})` }}
     >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 border-b border-gray-800 pb-8">
        {/* Links */}
        <div className="flex gap-10 text-sm">
          <a href="#" className="hover:opacity-70">About</a>
          <a href="#" className="hover:opacity-70">Contact</a>
          <a href="#" className="hover:opacity-70">Home</a>
        </div>

        {/* Newsletter */}
        <div className="text-sm">
          <p className="mb-2">Keep up with me if you can.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="px-3 py-2 text-xs text-white border-1 rounded-l-md focus:outline-none"
            />
            <button className="bg-orange-500 text-white text-xs px-4 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col md:flex-row md:justify-between items-center text-xs text-gray-400 mt-6 gap-4">
        {/* Email */}
        <p>
          Email:{" "}
          <span className="text-white font-semibold">
            azharshaikh@gmail.com
          </span>
        </p>

        {/* Policies */}
        <div className="flex gap-6">
          <a href="#" className="hover:opacity-70">Privacy Policy</a>
          <a href="#" className="hover:opacity-70">Refund Policy</a>
          <a href="#" className="hover:opacity-70">Terms of Use</a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400">
          ©2025 creted by Azhar shaikh. All Rights Reserved
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mt-6">
        <a href="#" className="text-white text-xl hover:opacity-70">
          <FaInstagram />
        </a>
        <a href="#" className="text-white text-xl hover:opacity-70">
          <FaLinkedin />
        </a>
      </div>

      {/* Bottom PNG */}
      <div className="mt-10">
        <img
          src={visualViewLogo}
          alt="Visualview Media"
          className="w-[1280%] object-contain"
        />
      </div>
    </footer>
  );
};

export default Footer;
