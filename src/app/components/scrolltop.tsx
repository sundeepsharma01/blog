"use client"
import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          className="fixed bottom-8 right-8 bg-gray-800 text-white p-3 rounded-full shadow-lg focus:outline-none hover:bg-gray-700"
          onClick={scrollToTop}
        >
          <i className="fa fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
