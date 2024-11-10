import React, { useState } from 'react';
import '../App.css'; // Ensure the path to the CSS file is correct

const Services = () => {
  const services = [
    { id: 1, imgSrc: '/1.png', description: 'Restorative Dentistry' },
    { id: 2, imgSrc: '/2.png', description: 'General Dentistry' },
    { id: 3, imgSrc: '/3.png', description: 'Kids’  Dentistry' },
    { id: 4, imgSrc: '/4.png', description: 'Smile Enhancement' },
    { id: 5, imgSrc: '/5.png', description: 'Specialist Services' },
    { id: 6, imgSrc: '/6.png', description: 'Root Canals' },
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 3);

  const toggleViewAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="services">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>Discover the range of services we offer to help you achieve your goals</p>
      </div>

      <div className="services-list">
        {visibleServices.map((service, index) => (
          <div key={service.id} className="service-item">
            <div className={`service-index service-index${index + 1}`}></div>
            <img src={service.imgSrc} alt={`Service ${index + 1}`} />
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="view-all-container">
        <button className="view-all-btn" onClick={toggleViewAll}>
          {showAll ? 'View Less' : 'View All'}
        </button>
      </div>
    </section>
  );
};

export default Services;
