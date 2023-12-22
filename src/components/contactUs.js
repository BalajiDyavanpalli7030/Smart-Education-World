import React from 'react';
import './contactUs.css'
import '../style.css'
import company from '../images/company.jpeg'
function ContactUs(){
  return (
    <div className="contact-container">
      <div className="navbar">
        <h1>Smart Education World</h1>
        <button onClick={() => window.history.back()}>Go Back</button>
    </div>
      <img
        className="contact-image"
        src={company}
        alt="Contact Us"
      />
      <div className='content-container'>
        <h1>Contact Us</h1>
        <p>
            We would love to hear from you! Feel free to reach out to us with any
            questions, feedback, or inquiries.
        </p>
        <p>Mobile: +91 7030683072</p>
        <p>Email: smarteducationworld0@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactUs;
