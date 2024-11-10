import axios from 'axios';
import React, { useState } from 'react';
import '../App.css';
import Swal from 'sweetalert2';

const AppointmentPopup = ({ isOpen, onClose }) => {
  const [selectedSlot, setSelectedSlot] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: ''
  });

  const handleSlotChange = (event) => {
    setSelectedSlot(event.target.value);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/appointments', {
        ...formData,
        timeSlot: selectedSlot,
      });
      Swal.fire({
        title: 'Success!',
        text: 'Appointment booked successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      onClose();  // Close the popup on success
    } catch (error) {
     
      Swal.fire({
        title: 'Error!',
        text: 'Error booking the appointment',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
    }
  };
  

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2>Schedule an Appointment</h2>
        <form className="appointment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Enter your name" 
              value={formData.name}
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Mobile Number</label>
            <input 
              type="tel" 
              id="phone" 
              placeholder="Enter your mobile number" 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Preferred Date</label>
            <input 
              type="date" 
              id="date" 
              value={formData.date}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label>Available Time Slots</label>
            <div className="time-slots">
              <label>
                <input
                  type="radio"
                  value="9:00 AM - 10:00 AM"
                  checked={selectedSlot === '9:00 AM - 10:00 AM'}
                  onChange={handleSlotChange}
                />
                9:00 AM - 10:00 AM
              </label>
              <label>
                <input
                  type="radio"
                  value="10:00 AM - 11:00 AM"
                  checked={selectedSlot === '10:00 AM - 11:00 AM'}
                  onChange={handleSlotChange}
                />
                10:00 AM - 11:00 AM
              </label>
              <label>
                <input
                  type="radio"
                  value="11:00 AM - 12:00 PM"
                  checked={selectedSlot === '11:00 AM - 12:00 PM'}
                  onChange={handleSlotChange}
                />
                11:00 AM - 12:00 PM
              </label>
            </div>
          </div>
          <button type="submit" className="submit-btn">Confirm Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentPopup;
