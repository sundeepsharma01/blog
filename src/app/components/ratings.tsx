"use client"
import React, { useState, useEffect } from 'react';

const RatingSection = () => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=6');
        const data = await response.json();
        const results = data.results;
        const fakeRatings = results.map((user, index) => ({
          id: index + 1,
          name: `${user.name.first} ${user.name.last}`,
          rating: 5, // Generate random rating (0 to 5)
          description: [
            "This developer is absolutely amazing! They delivered exactly what I wanted and exceeded my expectations.",
            "Highly skilled and professional developer. They understand my requirements perfectly and implemented them flawlessly.",
            "Incredible talent! I am impressed by the quality of their work and their attention to detail.",
            "A true expert in web development. Their solutions are innovative and they always go the extra mile to ensure client satisfaction.",
            "Exceptional developer! Their coding skills are top-notch and they have a great eye for design.",
            "Outstanding work! This developer has the ability to turn complex ideas into functional and user-friendly websites effortlessly."
          ][index],
          imageUrl: user.picture.medium, // User's profile picture
        }));
        setRatings(fakeRatings);
      } catch (error) {
        console.error('Error fetching ratings:', error);
      }
    };

    fetchRatings();
    
  }, []);

  return (
    <section className="bg-gray-200 py-16" id="ratings">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Ratings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {ratings.map(rating => (
            <div key={rating.id} className="bg-white rounded-lg shadow-lg overflow-hidden relative transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img src={`${rating.imageUrl}`} alt={rating.name} className="h-20 w-20 rounded-full border-4 border-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{rating.name}</h3>
                <p className="text-gray-600">{rating.description}</p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fas fa-star text-yellow-500 mr-1 ${i < rating.rating ? 'opacity-100' : 'opacity-25'}`}></i>
                  ))}
                  <span className="text-gray-800">{rating.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatingSection;

