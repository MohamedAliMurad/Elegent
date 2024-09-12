import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiChevronUp, FiLogOut, FiMenu } from "react-icons/fi";
import { FaShoppingCart, FaLock } from "react-icons/fa";
import {
  AiFillAppstore,
  AiFillBell,
  AiFillCalendar,
  AiFillHome,
  AiFillMessage,
} from "react-icons/ai";
import { SiPowerpages } from "react-icons/si";
import { RiApps2Fill } from "react-icons/ri";
import "../styles/Sidebar.css";

interface SidebarProps {
  handleSidebarToggle: () => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ handleSidebarToggle, isOpen }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const isActive = (menu: string) => activeMenu === menu;

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed  bg-white transition-transform transform m-7 rounded-3xl p-2 flex flex-col  ${
          isOpen ? "translate-x-0" : "-translate-x-full hidden lg:block 2xl:block "
        } lg:translate-x-0 lg:relative w-60 lg:w-72 2xl:w-80 shadow-lg lg:shadow-none`}
      >
        {/* Logo */}
        <div className="flex items-center pb-6 my-5 justify-center space-x-2">
          <img src="/src/assets/logo.png" className="w-10 h-10" alt="Logo" />
          <h1 className="text-2xl font-semibold text-gray-800">Elegant</h1>
        </div>

        <nav className="justify-between mb-10">
          <ul>
            <li
              className={`py-2 flex justify-between items-center cursor-pointer px-2 rounded-t-2xl border-b border-[#fff] ${
                isActive("home") ? "bg-[#FF8E29] text-white" : ""
              }`}
              onClick={() => toggleMenu("home")}
            >
              <Link
                to="/home"
                className="flex items-center text-gray-500 hover:text-gray-800"
              >
                <AiFillHome className="mr-2" />
                Home
              </Link>
              {activeMenu === "home" ? (
                <FiChevronUp className="ml-2" size={20} color="#808080" />
              ) : (
                <FiChevronDown className="ml-2" size={20} color="#808080" />
              )}
            </li>
            {isActive("home") && (
              <ul className="pl-6 space-y-1 bg-[#FF8E29] text-white px-2 rounded-b-2xl">
                <li className="py-1 cursor-pointer">
                  <Link
                    to="/home/dashboard"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="py-1 cursor-pointer">
                  <Link
                    to="/home/analytics"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    Analytics
                  </Link>
                </li>
                <li className="py-1 cursor-pointer">
                  <Link
                    to="/home/reports"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    Reports
                  </Link>
                </li>
              </ul>
            )}
            <li
              className={`py-2 flex justify-between items-center cursor-pointer px-2 rounded-t-2xl border-b border-[#fff] ${
                isActive("pages") ? "bg-[#FF8E29] text-white" : ""
              }`}
              onClick={() => toggleMenu("pages")}
            >
              <Link
                to="/pages"
                className="flex items-center text-gray-500 hover:text-gray-800"
              >
                <SiPowerpages className="mr-2" />
                Pages
              </Link>
              {activeMenu === "pages" ? (
                <FiChevronUp className="ml-2" size={20} color="#808080" />
              ) : (
                <FiChevronDown className="ml-2" size={20} color="#808080" />
              )}
            </li>
            {isActive("pages") && (
              <ul className="pl-6 space-y-1 bg-[#FF8E29] text-white px-2 rounded-b-2xl">
                <li className="py-1 cursor-pointer flex justify-between">
                  <Link
                    to="/profile"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    Profile
                  </Link>
                  <FiChevronUp className="ml-2" size={20} color="#808080" />
                </li>
                <ul className="pl-6 space-y-1 bg-[#FF8E29] text-white px-2 rounded-b-2xl">
                  <li className="py-1 cursor-pointer">
                    <Link
                      to="/profile/overview"
                      className="text-gray-500 hover:text-gray-800"
                    >
                      Overview
                    </Link>
                  </li>
                  <li className="py-1 cursor-pointer">
                    <Link
                      to="/pages/all-projects"
                      className="text-gray-500 hover:text-gray-800"
                    >
                      All Projects
                    </Link>
                  </li>
                </ul>
                <li className="py-1 cursor-pointer flex justify-between">
                  <Link
                    to="/pages/users"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    Users
                  </Link>
                  <FiChevronDown className="ml-2" size={20} color="#808080" />
                </li>
                <li className="py-1 cursor-pointer flex justify-between">
                  <Link
                    to="/pages/account"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    Account
                  </Link>
                  <FiChevronDown className="ml-2" size={20} color="#808080" />
                </li>
                <li className="py-1 cursor-pointer flex justify-between">
                  <Link
                    to="/pages/projects"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    Projects
                  </Link>
                  <FiChevronDown className="ml-2" size={20} color="#808080" />
                </li>
              </ul>
            )}
            <li
              className={`py-2 flex justify-between items-center cursor-pointer px-2 rounded-t-2xl border-b border-[#fff] ${
                isActive("applications") ? "bg-[#FF8E29] text-white" : ""
              }`}
              onClick={() => toggleMenu("applications")}
            >
              <Link
                to="/applications"
                className="flex items-center text-gray-500 hover:text-gray-800"
              >
                <AiFillAppstore className="mr-2" />
                applications
              </Link>
              {activeMenu === "applications" ? (
                <FiChevronUp className="ml-2" size={20} color="#808080" />
              ) : (
                <FiChevronDown className="ml-2" size={20} color="#808080" />
              )}
            </li>
            {isActive("applications") && (
              <ul className="pl-6 space-y-1 bg-[#FF8E29] text-white px-2 rounded-b-2xl">
                <li className="py-1 cursor-pointer">
                  <Link
                    to="/applications/overview"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    Overview
                  </Link>
                </li>
                <li className="py-1 cursor-pointer">
                  <Link
                    to="/applications/all-projects"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    All Projects
                  </Link>
                </li>
                <li className="py-1 cursor-pointer">
                  <Link
                    to="/applications/reports"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    Reports
                  </Link>
                </li>
              </ul>
            )}
            <li
              className={`py-2 flex justify-between items-center cursor-pointer px-2 rounded-t-2xl border-b border-[#fff] ${
                isActive("ecommerce") ? "bg-[#FF8E29] text-white" : ""
              }`}
              onClick={() => toggleMenu("ecommerce")}
            >
              <Link
                to="/ecommerce"
                className="flex items-center text-gray-500 hover:text-gray-800"
              >
                <FaShoppingCart className="mr-2" />
                Ecommerce
              </Link>
              {activeMenu === "ecommerce" ? (
                <FiChevronUp className="ml-2" size={20} color="#808080" />
              ) : (
                <FiChevronDown className="ml-2" size={20} color="#808080" />
              )}
            </li>
            {isActive("ecommerce") && (
              <ul className="pl-6 space-y-1 bg-[#FF8E29] text-white px-2 rounded-b-2xl">
                <li className="py-1 cursor-pointer">
                  <Link
                    to="/ecommerce/overview"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="py-1 cursor-pointer">
                  <Link
                    to="/ecommerce/analytics"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    Analytics
                  </Link>
                </li>
                <li className="py-1 cursor-pointer">
                  <Link
                    to="/ecommerce/reports"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    Reports
                  </Link>
                </li>
              </ul>
            )}
            <li
              className={`py-2 flex justify-between items-center cursor-pointer px-2 rounded-t-2xl border-b border-[#fff] ${
                isActive("auth") ? "bg-[#FF8E29] text-white" : ""
              }`}
              onClick={() => toggleMenu("auth")}
            >
              <Link
                to="/auth"
                className="flex items-center text-gray-500 hover:text-gray-800"
              >
                <FaLock className="mr-2" />
                Authentication
              </Link>
              {activeMenu === "auth" ? (
                <FiChevronUp className="ml-2" size={20} color="#808080" />
              ) : (
                <FiChevronDown className="ml-2" size={20} color="#808080" />
              )}
            </li>
            {isActive("auth") && (
              <ul className="pl-6 space-y-1 bg-[#FF8E29] text-white px-2 rounded-b-2xl">
                <li className="py-1 cursor-pointer">
                  <Link
                    to="/auth/overview"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="py-1 cursor-pointer">
                  <Link
                    to="/auth/analytics"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    Analytics
                  </Link>
                </li>
                <li className="py-1 cursor-pointer">
                  <Link
                    to="/auth/reports"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    Reports
                  </Link>
                </li>
              </ul>
            )}
            <li
              className={`py-2 flex justify-between items-center cursor-pointer px-2 `}
            >
              <Link
                to="/notifications"
                className="flex items-center text-gray-500 hover:text-gray-800"
              >
                <AiFillBell className="mr-2" />
                Notifications
              </Link>
            </li>
            <li
              className={`py-2 flex justify-between items-center cursor-pointer px-2 `}
            >
              <Link
                to="/calendar"
                className="flex items-center text-gray-500 hover:text-gray-800"
              >
                <AiFillCalendar className="mr-2" />
                Calendar
              </Link>
            </li>
            <li
              className={`py-2 flex justify-between items-center cursor-pointer px-2 `}
            >
              <Link
                to="/messages"
                className="flex items-center text-gray-500 hover:text-gray-800"
              >
                <AiFillMessage className="mr-2" />
                Messages
              </Link>
            </li>

            {/* Other sidebar sections (Pages, Apps, etc.) */}
            {/* Apply similar logic for responsiveness */}
          </ul>
        </nav>

        <div className="flex items-center justify-center  mt-20">
          <div className="text-[#FF8E29]  py-2 rounded-full cursor-pointer">Logout</div>
          <FiLogOut className="ml-2 cursor-pointer" size={20} color="#FF8E29" />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
