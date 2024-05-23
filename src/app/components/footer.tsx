"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from "next/link"
const Footer = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Random Quote */}
        <div className="mb-4 lg:mb-0 w-1/3 py-5">
          <h3 className="text-lg font-bold mb-2">Quote of the Day</h3>
          <p>{quote}</p>
        </div>
        {/* Contact Info */}
        <div className="mb-4 lg:mb-0 w-1/3 py-5">
          <h3 className="text-lg font-bold mb-2">Contact Info</h3>
          <p>Address: West Sikkim, Hee-Bermiok, India</p>
          <p>Phone: +91-9339950282</p>
          <p>Email: codewithsundeep@gmail.com</p>
        </div>
        {/* Social Media Links */}
        <div className="flex items-center">
          <a href="https://facebook.com/codewithsundeep1" className="text-xl mr-4"><i className="fab fa-facebook"></i></a>
          <a href="https://instagram.com/codewithsundeep1" className="text-xl mr-4"><i className="fab fa-instagram" target="_blank" rel="nofollow noopener noreferrer"></i></a>
          <a href="https://youtube.com/@codewithsundeep" className="text-xl mr-4"><i className="fab fa-youtube" target="_blank" rel="nofollow noopener noreferrer"></i></a>
          <a href="https://github.com/codewithsundeep" target="_blank" rel="nofollow noopener noreferrer" className="text-xl"><i className="fab fa-github"></i></a>
        </div>
      </div>
      <div className="bg-gray-700 text-center py-4">
        <div className="flex justify-between p-3">
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-condition">Terms &amp; Condition</Link>
        </div>
      </div><hr />
      <div className="bg-gray-700 text-center py-4">
        <p className="text-white">© 2024 <a href="/">CodeWithSundeep</a>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
