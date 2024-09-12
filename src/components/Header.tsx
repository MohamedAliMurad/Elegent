// src/components/Header.tsx
import React, { useState } from "react";
import { FiChevronDown, FiMenu, FiSearch } from "react-icons/fi";
const [showList, setShowList] = useState<boolean>(false);

interface HeaderProps {
  handleSidebarToggle: () => void;
}

const handleListToggle = () => {
  setShowList(!showList);
};

const Header: React.FC<HeaderProps> = ({ handleSidebarToggle }) => {
  return (
    <header className=" bg-transparent px-6 p-4  mt-8 flex align-center gap-4 items-center justify-between w-full">
      <div className="flex items-center gap-6 w-1/2 ">
        <h1 className="lg:block hidden text-xl font-semibold text-gray-800 ">
          Overview
        </h1>
        <div className="search-container border border-gray-300 rounded-full p-2 flex justify-between items-center bg-white w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="search-input focus:outline-none w-full pl-4 text-gray-800 bg-transparent"
          />
          <FiSearch className="search-icon" size={20} color="#808080" />
        </div>
      </div>
      <div className="flex items-center gap-6 hidden lg:flex xl:flex">
        <img src="/src/assets/avatar.png" className="w-10 h-10" alt="Logo" />
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleListToggle}
        >
          <p className="text-gray-800 font-semibold">Aiden Max</p>
          <FiChevronDown className="text-gray-800" size={20} />
        </div>
        {showList && (
          <div className="absolute right-0 top-16 bg-white border border-gray-300 rounded-lg p-4 z-50">
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Profile
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* Sidebar Toggle Button for Small Screens */}
      <div className="lg:hidden block xl:hidden z-50 cursor-pointer ">
        <div
          className="text-gray-500 hover:text-gray-800"
          onClick={handleSidebarToggle}
        >
          <FiMenu className="w-10 h-10 text-[#FF8E29]" />
        </div>
      </div>
    </header>
  );
};

export default Header;
