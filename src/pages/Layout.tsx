// src/components/Dashboard.tsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex  ">
      <Sidebar isOpen={isOpen} />
      <div className="w-full min-h-screen flex flex-col align-center">
        <Header handleSidebarToggle={handleSidebarToggle} />
        <div className="w-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
