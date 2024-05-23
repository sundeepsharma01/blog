"use client"
import React, { useState, useEffect } from 'react';
const Card = ({ question }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{question.title}</div>
        <p className="text-gray-700 text-base">
          {showMore ? question.body : question.body.substring(0, 100)}
        </p>
        {question.body.length > 100 && (
          <button onClick={toggleShowMore} className="text-blue-500 mt-2">
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
    </div>
  );
};

const Disapp = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.stackexchange.com/2.3/questions?key=YOUR_API_KEY&site=stackoverflow&accepted=true'
        );
        const data = await response.json();
        setQuestions(data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {questions.map((question) => (
          <Card key={question.question_id} question={question} />
        ))}
      </div>
    </div>
  );
};

export default Disapp;
