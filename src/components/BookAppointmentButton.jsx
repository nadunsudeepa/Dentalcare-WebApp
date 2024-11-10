// BookAppointmentButton.jsx
import React, { useState } from 'react';
import AppointmentPopup from './AppointmentPopup';
import '../App.css'; // Adjust the path as needed

const BookAppointmentButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <button className="primary-cta" onClick={togglePopup}>Book Appointment</button>
      <AppointmentPopup isOpen={isPopupOpen} onClose={togglePopup} />
    </>
  );
};

export default BookAppointmentButton;
