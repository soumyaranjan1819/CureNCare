import React from "react";
import { FaSearch, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";
import LoginButton from "./UserManagement";

const Navbar: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Top Navbar */}
      <div className="w-full px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="https://www.medibuddy.in/assets/logos/medibuddyWithName.svg"
            alt="MediBuddy Logo"
            className="h-12"
          />
          <span className="bg-blue-500 text-white text-xs px-3 pb-1.5 pt-1 rounded-full font-semibold">
            Labs
          </span>
        </div>
        <div className="flex space-x-6 font-medium">
          <LoginButton />
        </div>
      </div>

      {/* Search & Location Section */}
      <div className="w-full bg-blue-500 py-4">
        <div className="w-full px-4 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Location Selector */}
          <div className="bg-[#5a91ea] text-white p-4 rounded-lg flex items-center space-x-3 w-full md:w-auto cursor-pointer">
            <FaMapMarkerAlt size={18} />
            <div>
              <p className="font-bold">Dairy Circle</p>
              <p className="text-xs">
                Bhavani Nagar, S.G. Palya, Bengaluru, Karnataka
              </p>
            </div>
            <FaChevronDown size={16} className="ml-auto cursor-pointer" />
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-2/3">
            <input
              type="text"
              placeholder="Search for Lab Tests, Scans & Health Checkup Packages"
              className="w-full p-3 rounded-xl border-none focus:outline-none text-gray-700 shadow-md"
            />
            <button className="absolute right-4 top-3 text-blue-500">
              <FaSearch size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
