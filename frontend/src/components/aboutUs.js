import {React, useEffect} from 'react';
import './aboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
function AboutUs(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (<>
    <div className='about-us-body'>
    <div className="navbar">
        <h1>{'Welcome to Smart Education World'}</h1>
        <button onClick={() => window.history.back()}>Go Back</button>
    </div>
    <div className="about-us-container">
      <section className="about-us-content">
        <div className='about-us-heading'>
        <p>
          At Smart Education World, we are on a mission to revolutionize education and make learning an exciting journey for every individual.
        </p>
        </div>

        <div className='our-mission'>
        <h2>Our Mission</h2>
        <p>
          Empowering minds, unlocking potential, and fostering a love for learning – that's our mission. We believe that education is the key to a brighter future, and we are dedicated to providing quality educational content for learners of all ages.
        </p>
        </div>

        <div className='our-innovation'>
        <h2>What Sets Us Apart</h2>
        <ul>
          <li><strong>Innovation:</strong> We embrace cutting-edge technologies and pedagogical approaches.</li>
          <li><strong>Diversity:</strong> Our team comprises passionate educators, designers, and technologists from around the globe.</li>
          <li><strong>Accessibility:</strong> Education should be accessible to everyone.</li>
        </ul>
        </div>

        <div className='contact-us'>

        <h2>Contact Us</h2>
        <p>
          Ready to embark on a learning adventure? Have questions or suggestions? We'd love to hear from you!
        </p>

        <address>
          <strong>Smart Education World Headquarters</strong>
          <br />
          [Hyderabad]
          <br />
          <strong>Mobile:</strong> [7030683072]
          <br />
          <strong>Email:</strong> [smarteducationworld0@gmail.com]
        </address>
        </div>
        <div className='connect-us'>
        <h2>Connect With Us</h2>
        <p>Stay updated on the latest educational trends, resources, and news. Follow us on social media for daily inspiration and insights.</p>

        <a href="https://www.youtube.com/@SmartEducationWorld0" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="4x" style={{ color: '#530ae4' }} />
        <p>Watch our video on YouTube</p>
            </a>
        </div>
      </section>
    </div>
    </div>
  </>
  );
};

export default AboutUs;
