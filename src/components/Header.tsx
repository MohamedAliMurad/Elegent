// src/components/Header.tsx
import React from "react";
import { FiChevronDown, FiChevronUp, FiMenu, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

interface HeaderProps {
  handleSidebarToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleSidebarToggle }) => {
  const [isOpenList, setIsOpenList] = React.useState<boolean>(false);
  const handleListToggle = () => {
    setIsOpenList(!isOpenList);
  };
  return (
    <header className=" bg-transparent  py-4 lg:pl-0 xl:pl-0 lg:px-6 xl:px-6 px-4  mt-8 flex align-center gap-4 items-center justify-between w-full">
      <div className="flex items-center gap-6 lg:w-1/2 w-full ">
        <h1 className="lg:block hidden text-xl font-semibold text-gray-800 ">
          Overview
        </h1>
        <div className="search-container border border-gray-300 rounded-full p-2 flex justify-between items-center bg-white w-full">
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
          {isOpenList ? (
            <FiChevronUp className="text-gray-800" size={20} />
          ) : (
            <FiChevronDown className="text-gray-800" size={20} />
          )}
        </div>
      </div>
      {isOpenList && (
        <div className="absolute right-5 top-20 bg-white border border-gray-300 rounded-lg p-4 z-50">
          <ul className="space-y-2">
            <li>
              <Link to="/profile" className="text-gray-800 hover:text-gray-600">
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="text-gray-800 hover:text-gray-600"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-800 hover:text-gray-600">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
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
