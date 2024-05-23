"use client"
import { useState, useEffect } from 'react';
import 'animate.css';
import Typewriter from 'typewriter-effect/dist/core';
import Link from "next/link"
const HeroSection = () => {
  useEffect(() => {
    new Typewriter('.type', {
      strings: ['Sundeep Sharma'],
      autoStart: true,
      loop: true
    });
    new Typewriter('.type1', {
      strings: ['Software Developer & Full Stack Engineer'],
      autoStart: true,
      loop: true
    });
  }, []);

  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <section className="relative overflow-hidden h-screen bg-blue-900">
      {/* Second SVG Curve - Blue */}
      <svg
        className="absolute inset-x-0 bottom-0 animate__animated animate__fadeIn animate__slow wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#000b76"
          fillOpacity="1"
          d="M0,224L60,234.7C120,245,240,267,360,245.3C480,224,600,160,720,149.3C840,139,960,181,1080,170.7C1200,160,1320,96,1380,64L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

      {/* Side Navigation */}
      <div
        className={`fixed inset-0 flex items-center justify-end z-50 ${
          isSideNavOpen ? 'bg-black bg-opacity-50' : 'hidden'
        }`}
        onClick={toggleSideNav}
      >
        <div className="bg-slate-800 h-full w-3/4 lg:w-1/4 shadow-lg py-8 px-4 transform transition-transform duration-300 ease-in-out">
          <ul className="text-lg font-semibold">
            <a href="/"><li className="mb-4 text-blue-500">Home</li></a>
            <a href="#contact"><li className="mb-4 text-blue-500">Contact</li></a>
            <a href="#projects"><li className="mb-4 text-blue-500">Projects</li></a>
            <a href="#achieve"><li className="mb-4 text-blue-500">Achievements</li></a>
            <a href="#ratings"><li className="text-blue-500">Ratings</li></a>
          </ul>
          <div className="absolute top-0 right-0 m-4 cursor-pointer" onClick={toggleSideNav}>
            {/* Close Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bar Icon */}
      <div className="absolute top-0 right-0 m-4 cursor-pointer z-30" onClick={toggleSideNav}>
        {/* Menu Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center relative z-10 h-full p-3">
        {/* For small screens, image comes first */}
        <div className="lg:w-1/1 lg:pr-20 animate__animated animate__fadeInLeft animate__slow mb-5 lg:mb-0 flex flex-col lg:items-start">
        <div className="rounded-full w-48 h-48 lg:w-64 lg:h-64 mx-auto lg:ml-auto lg:mr-0 relative">
  <div className="border-8 border-dashed border-green-500 rounded-full w-full h-full overflow-hidden animate-border-spin"></div>
  <img src="/sundeep.jpg" alt="Sundeep Sharma" className="rounded-full w-full h-full absolute top-0 left-0" />
</div>

        </div>
        {/* For small screens, text comes second */}
        <div className="lg:w-1/2 lg:pl-16 animate__animated animate__fadeInRight animate__slow flex flex-col items-center justify-center lg:items-start mb-10">
          <div className="opacity-0 transform transition-opacity duration-1000 opacity-100 translate-y-0">
            <h1 className="text-4xl lg:text-4xl font-bold mb-4 text-blue-500 text-center type">Sundeep Sharma</h1>
            <h2 className="text-xl lg:text-2xl mb-6 text-gray-900 text-pink-500 text-center type1">Software Developer & Full Stack Engineer</h2><hr/>
            <p className="text-lg lg:text-xl leading-relaxed text-gray-800 text-orange-500 mt-2 animate-fade-in-out">Hi there! 👋 I'm Sundeep Sharma, a passionate software developer with expertise in creating full stack applications, software solutions, and websites. I thrive on turning ideas into reality through elegant code and intuitive user experiences.</p>

          </div>
          <div className="mt-8 flex justify-center">
  <Link href="/blog" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4 hover:animate-blink-light">Read Blog</Link>
  <a href="https://youtube.com/@codewithsundeep" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded hover:animate-blink-light">Visit YouTube</a>
</div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
