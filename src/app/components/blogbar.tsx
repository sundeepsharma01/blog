"use client";
import React, { useState } from 'react';
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="bg-slate-500 py-6 px-4 flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Link href="/" style={{
            fontFamily: "cursive",
            letterSpacing: "0.5em"
          }}>CODEWITHSUNDEEP</Link>
        </div>
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
          width: "50%"
        }}
        className={`lg:w-64 bg-slate-800 text-white fixed h-full top-0 right-0 z-20 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar content */}
        <div className="p-4">
          <button
            onClick={toggleSidebar}
            className="text-white text-xl mb-4 focus:outline-none"
          >
            <i className="fas fa-times"></i>
          </button>
          <ul className="space-y-2">
            <li className="w-full text-center font-bold underline bg-slate-200 p-2">
              <Link href="/">Home</Link>
            </li>
            <li className="w-full text-center font-bold underline bg-slate-200 p-2">
            <Link href="/blog">Blog</Link>
            </li>
            {/* Add more links as needed */}
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
