import React from "react";
import logo from "../Images/92975gdxe0361.png";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-1">
          <img
            src={logo}
            alt="Microsoft"
            className="w-[47px]"
          />
          <span className="text-lg font-semibold">Quantisys</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6 text-sm text-gray-700">
          <a href="#" className="hover:text-gray-900">
            Microsoft 365
          </a>
          <a href="#" className="hover:text-gray-900">
            Teams
          </a>
          <a href="#" className="hover:text-gray-900">
            Copilot
          </a>
          <a href="#" className="hover:text-gray-900">
            Windows
          </a>
          <a href="#" className="hover:text-gray-900">
            Surface
          </a>
          <a href="#" className="hover:text-gray-900">
            Xbox
          </a>
          <a href="#" className="hover:text-gray-900">
            Support
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
