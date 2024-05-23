"use client"
import React from 'react';

const AchievementSection = () => {
  const viewCertificate = (certificateUrl) => {
    // Open the certificate PDF in a new tab
    window.open(certificateUrl, '_blank');
  };

  return (
    <section className="bg-gray-100 py-16" id="achieve">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden relative transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
              <div className="h-48 bg-gray-300 bg-cover bg-center">
                <img src={achievement.image} alt={achievement.title} className="opacity-0" />
                <button className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-900 focus:outline-none" onClick={() => viewCertificate(achievement.certificate)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" id="eye"><g><g><path d="M256,406c-30.6,0-62.2-7.6-94-22.5c-24.9-11.7-50-27.9-74.6-48.2C45.9,301,20.3,267,19.2,265.6
			c-4.3-5.7-4.3-13.5,0-19.2c1.1-1.4,26.7-35.4,68.2-69.7c24.6-20.3,49.7-36.5,74.6-48.2c31.8-14.9,63.4-22.5,94-22.5
			s62.2,7.6,94,22.5c24.9,11.7,50,27.9,74.6,48.2c41.5,34.3,67.2,68.3,68.2,69.7c4.3,5.7,4.3,13.5,0,19.2
			c-1.1,1.4-26.7,35.4-68.2,69.7c-24.6,20.3-49.7,36.5-74.6,48.2C318.2,398.4,286.6,406,256,406z M52.6,256
			c25.1,29.7,108,118,203.4,118c95.6,0,178.3-88.3,203.4-118c-25.1-29.7-108-118-203.4-118C160.4,138,77.7,226.3,52.6,256z"></path></g><g><path d="M256,328c-39.7,0-72-32.3-72-72s32.3-72,72-72s72,32.3,72,72S295.7,328,256,328z M256,216
			c-22.1,0-40,17.9-40,40s17.9,40,40,40s40-17.9,40-40S278.1,216,256,216z"></path></g></g></svg>
                  <span className="sr-only">View Certificate</span>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const achievements = [
  {
    title: "Web Development Masterclass",
    description: "Cloud Computing | Web Apps | Linux | Web Servers | DBMS | LAMP Stack | HTML | CSS | JavaScript | PHP | + More",
    image: "web_development_masterclass.jpg", // Add image URL here
    certificate: "web_development_masterclass_certificate.pdf" // Add certificate PDF URL here
  },
  {
    title: "Become a Node.js developer",
    description: "Node.js/Express.js/MongoDB/API - Learn Node.js from scratch by building a real-world Chat application and a REST API",
    image: "nodejs_developer.jpg", // Add image URL here
    certificate: "nodejs_developer_certificate.pdf" // Add certificate PDF URL here
  },
  {
    title: "Complete Progressive Web App Bootcamp",
    description: "Learn to build discoverable, engaging Progressive Webs Apps (PWAs) from scratch",
    image: "pwa_bootcamp.jpg", // Add image URL here
    certificate: "pwa_bootcamp_certificate.pdf" // Add certificate PDF URL here
  }
];

export default AchievementSection;
