import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponents/Sidebar";
import Image from "next/image";
import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  
import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <ToastContainer theme ="dark"/>
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full py-3 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Admin Panel</h3>
            <Image src={assets.profile_icon} width={40} alt="Admin Profile Icon" />
          </div>
          {/* Add a border line below the Admin Panel heading */}
          <div className="border-b border-gray-300 mt-2"></div>
        </div>
        {children || <div>No content provided</div>}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
