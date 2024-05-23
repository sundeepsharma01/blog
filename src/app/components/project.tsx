"use client"
import React from 'react';

const ProjectsSection = () => {
  return (
    <section className="bg-gray-100 py-16" id="projects">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden relative transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
              <div className="h-48 bg-gray-300 bg-cover bg-center">
                <img src={project.image} alt={project.title} className="opacity-0" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 24 24">
                      <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                    </svg>
                    <span className="sr-only">GitHub</span>
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="web"><g stroke="#105286"><path fill="#8fb6d7" d="M7.569 20.774h16.806M7.57 11.17h16.806m-8.403-4.802v19.208M6.37 15.972h19.207m0 0c0 5.304-4.3 9.604-9.604 9.604-5.304 0-9.603-4.3-9.603-9.604 0-5.304 4.3-9.604 9.603-9.604 5.304 0 9.604 4.3 9.604 9.604z"></path><path fill="none" d="M12.669 7.032c-2.44 6.006-2.834 11.605-.192 17.8m6.726-17.8c2.44 6.006 2.834 11.605.192 17.8"></path><path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M5.387 22.083A12.223 12.222 0 0 1 8.53 6.275 12.223 12.222 0 0 1 24.615 7.33"></path><path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M24.636 5.533v1.819h-1.818M7.358 26.486v-1.818h1.82"></path><path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M26.613 9.917a12.222 12.223 90 0 1-3.145 15.808A12.222 12.223 90 0 1 7.384 24.67"></path></g></svg>
                    <span className="sr-only">Visit</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "AI Image Background Remover",
    description: "Using advanced AI algorithms to remove backgrounds from images automatically.",
    image: "project1.jpg" // Add image URL here
  },
  {
    title: "Institute Management System",
    description: "A comprehensive system for managing educational institutes.",
    image: "project2.jpg" // Add image URL here
  },
  {
    title: "Hotel Management System",
    description: "An efficient solution for managing hotel operations and bookings.",
    image: "project3.jpg" // Add image URL here
  },
  {
    title: "Tools Website",
    description: "A collection of useful tools for developers and designers.",
    image: "project4.jpg" // Add image URL here
  },
  {
    title: "Website Using API",
    description: "Building a website that integrates with various APIs for dynamic content.",
    image: "project5.jpg" // Add image URL here
  },
  {
    title: "Blog Website",
    description: "Creating a platform for publishing articles and blog posts.",
    image: "project6.jpg" // Add image URL here
  }
];

export default ProjectsSection;
