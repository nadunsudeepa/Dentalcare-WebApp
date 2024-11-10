import React from 'react';
import '../App.css';

const doctors = [
  {
    name: "Dr. Nimal Jayasinha",
    degree: "BDS, MDS - Oral and Maxillofacial Surgery",
    specialty: "Oral Surgery, Implantology",
    experience: "20 years",
    hospitals: "National Dental Hospital, Colombo Dental Care"
  },
  {
    name: "Dr. Rekha Dhamayanthi",
    degree: "BDS, MDS - Orthodontics",
    specialty: "Orthodontics, Cosmetic Dentistry",
    experience: "15 years",
    hospitals: "Smile Dental Clinic, Kandy Dental Care"
  }
];

const DoctorDetails = () => {
  return (
    <section className="doctor-details">
      <h2>Meet Our Doctors</h2>
      <div className="doctors-list">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <h3>{doctor.name}</h3>
            <p><strong>Degree:</strong> {doctor.degree}</p>
            <p><strong>Specialty:</strong> {doctor.specialty}</p>
            <p><strong>Experience:</strong> {doctor.experience}</p>
            <p><strong>Worked at:</strong> {doctor.hospitals}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorDetails;
