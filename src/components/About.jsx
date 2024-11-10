import React, { useState, useEffect, useRef } from "react";
import Counter from "./Counter"; // Import the Counter component
import BookAppointmentButton from './BookAppointmentButton';

const About = () => {
  const [startCounter, setStartCounter] = useState(false); // Control when to start the counter
  const sectionRef = useRef(null); // Ref to track the "About Us" section

  // Use Intersection Observer to detect when the "About Us" section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounter(true); // Start the counter when the section comes into view
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the section is visible
    );

    // Copy the current value of sectionRef to a local variable
    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection); // Start observing the "About Us" section
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection); // Cleanup observer using the local variable
      }
    };
  }, []); // No need to add sectionRef as a dependency

  return (
    <section ref={sectionRef} className="about-us">
      <div className="about-us-header">
        <h1>About Us</h1>
      </div>
      <div className="about-us-content">
        <div className="ahero-image">
          <img src="/aboutimg.png" alt="About Us" />
        </div>
        <div className="about-us-details">
          <div className="ahero-text">
            <h2>Meet Our Team: Dedicated to Your Dental Wellness</h2>
            <p>
              Our experienced team is committed to providing top-quality dental
              services in a warm, welcoming environment. From routine checkups
              to advanced procedures, we offer comprehensive care to help you
              achieve and maintain a healthy smile. We prioritize building
              lasting relationships with our patients based on trust and
              communication. At Colombo Dental Clinic, you're not just a
              patient, you're part of our dental family.
            </p>
            <div className="btnsection">
            <BookAppointmentButton />
              
            </div>
          </div>
        </div>
      </div>

      <div className="trust-section">
        <div className="trust-item">
          <Counter targetNumber={999} duration={3000} start={startCounter} />
          <p>Customer Satisfaction</p>
        </div>
        <div className="trust-item">
          <Counter targetNumber={20} duration={1800} start={startCounter} />
          <p>Years Experience</p>
        </div>
        <div className="trust-item">
          <Counter targetNumber={89} duration={2500} start={startCounter} />
          <p>Appointments Booked</p>
        </div>
      </div>
    </section>
  );
};

export default About;
