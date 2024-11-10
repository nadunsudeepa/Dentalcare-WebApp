const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// POST request to book an appointment
router.post('/', async (req, res) => {
  const { name, phone, date, timeSlot } = req.body;

  try {
    const newAppointment = new Appointment({
      name,
      phone,
      date,
      timeSlot,
    });

    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error booking the appointment' });
  }
});

module.exports = router;
