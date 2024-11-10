import React, { useState } from 'react';
import '../App.css';

const PatientReview = () => {
  const reviews = [
    {
      id: 1,
      text: "Excellent service! Very professional and caring. Highly recommend!",
      name: "John Doe",
    },
    {
      id: 2,
      text: "The staff was friendly, and the treatment was top-notch. A great experience overall!",
      name: "Jane Smith",
    },
    {
      id: 3,
      text: "They made me feel comfortable and the service exceeded my expectations!",
      name: "Michael Brown",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="patient-review">
      <h2>Patient Reviews</h2>
      <div className="review-container">
        <button className="arrow left-arrow" onClick={handlePrev}>
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        
        </button>
        <div className="review-content">
          <p>"{reviews[currentIndex].text}"</p>
          <h4>- {reviews[currentIndex].name}</h4>
        </div>
        
        <button className="arrow right-arrow" onClick={handleNext}>
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default PatientReview;
