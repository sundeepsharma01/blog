"use client"
import React, { useState } from 'react';
import Link from "next/link"
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="bg-slate-500 py-6 px-4 flex justify-between items-center">
        <div className="text-white font-bold text-lg"><Link href="/">CODEWITHSUNDEEP</Link></div>
        <button
          onClick={toggleSidebar}
          className="text-white text-xl focus:outline-none"
        >
          {isOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </div>
      <div
      style={{
        width:"50%"
      }}
        className={`lg:w-64 bg-gray-200 w-25 h-full fixed lg:relative inset-y-0 left-0 z-10 transition-all duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Add other sidebar content here */}
        <div>
            <ul type="none">
                <Link href="#"><li className="w-100 text-center font-bold underline">Home</li></Link>
            </ul>
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:hidden fixed inset-0 bg-black opacity-25 z-10`}
        onClick={toggleSidebar}
      ></div>
    </div>
  );
};

export default Sidebar;
