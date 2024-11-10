import React from 'react';
import '../App.css';

const ContactPage = () => {
  return (
    <section className="contact-page">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>Feel free to get in touch. We’d love to hear from you!</p>
      </div>

      <div className="contact-container">
        {/* Left side - Map and Contact Info */}
        <div className="contact-info">
          <iframe 
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.367624962298!2d144.963058!3d-37.813611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727a1a4d2a29b1!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1590100145789!5m2!1sen!2sau" 
            allowFullScreen=""
            className="map"
            aria-hidden="false"
          />
          <div className="contact-details">
            <p><strong>Address:</strong> 123 Main Street, City, Country</p>
            <p><strong>Phone:</strong> +1 234 567 890</p>
            <p><strong>Email:</strong> info@company.com</p>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="contact-form">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
