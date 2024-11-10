import React from 'react';
import '../App.css'; // Make sure this path is correct and the CSS file is created
import BookAppointmentButton from './BookAppointmentButton';
const Home = () => {
  return (
    <section className="gradient-section">
    <section className="home">
      {/* Hero Text Section */}
      <div className="hero-text">
        <h1>Where exceptional care meets a friendly touch!</h1>
        <p>
        we offer comprehensive dental services with the latest technology. 
        our experienced team is here to help you achieve a healthy, beautiful smile in a comfortable setting.
        </p>

        <div className="btnsection">
        <BookAppointmentButton />
        <a href="#contact" >
          <button className="location-cta">Our Location</button>
        </a>
        </div>
        
      </div>

      {/* Hero Image Section */}
      <div className="hero-image">
        <img src="/hero-img.png" alt="Hero" />
      </div>
    </section>
    </section>
  );
};

export default Home;
