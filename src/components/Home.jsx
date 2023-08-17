import React, { useState } from "react";
import "../index.css";
import HeroSection from "./Herosection"; // Make sure the filename is correct
import ServicesSection from "./Services"; // Make sure the filename is correct
import PortfolioSection from "./Portfolio";
import Testimonials from "./Testimonials";
import WhyUs from "./WhyUs";
import LetsTalk from "./LetsTalk";

const Home = () => {
//   // Define the handleCardClick function
//   const handleCardClick = (index) => {
//     // Toggle the flipped state of the clicked card
//     setFlippedCards((prevFlippedCards) => {
//       const newFlippedCards = [...prevFlippedCards];
//       newFlippedCards[index] = !newFlippedCards[index];
//       return newFlippedCards;
//     });
//   };

//   // Maintain the flipped state of each card
//   const [flippedCards, setFlippedCards] = useState([false, false]);

  return (
    <div>
      <HeroSection />
      <ServicesSection/>
      <PortfolioSection/>
      <Testimonials/>
      <WhyUs/>
      <LetsTalk/>

      {/* Other sections can go here */}
    </div>
  );
};

export default Home;



//      {/* About Us Section */}
//      <section className="about-section">
//      <div className="container">
//          <div className="about-content">
//              <h2>About Phoenix Tech Solutions</h2>
//              <p>
//                  At Phoenix Tech Solutions, we are a team of passionate and
//                  creative web developers who are dedicated to delivering
//                  innovative and cutting-edge solutions. Our mission is to
//                  transform your ideas into reality and provide a seamless
//                  online experience for your customers.
//              </p>
//              {/* Add team information and images here */}
//          </div>
//      </div>
//  </section>

//  {/* Services Section */}
//  <section className="services-section">
//      <div className="container">
//          <div className="services-content">
//              <h2>Our Services</h2>
//              <div className="service-card">
//                  {/* Service 1 - Web Development */}
//                  <div className="service-item">
//                      <img
//                          src="/path/to/web-development-icon.png"
//                          alt="Web Development"
//                      />
//                      <h3>Web Development</h3>
//                      <p>
//                          We specialize in building dynamic and responsive
//                          websites tailored to your business needs. From
//                          e-commerce platforms to corporate sites, we've got you
//                          covered.
//                      </p>
//                  </div>
//                  {/* Service 2 - Mobile Development */}
//                  <div className="service-item">
//                      <img
//                          src="/path/to/mobile-development-icon.png"
//                          alt="Mobile Development"
//                      />
//                      <h3>Mobile Development</h3>
//                      <p>
//                          Elevate your brand with mobile apps that engage users
//                          on the go. Our team crafts user-friendly and
//                          feature-rich applications for both iOS and Android
//                          platforms.
//                      </p>
//                  </div>
//              </div>
//          </div>
//      </div>
//  </section>

//  {/* Work Portfolio/Projects Section */}
//  <section className="portfolio-section">
//      <div className="container">
//          <div className="portfolio-content">
//              <h2>Our Work</h2>
//              {/* Showcase your portfolio/projects here */}
//          </div>
//      </div>
//  </section>

//  {/* Testimonials Section */}
//  <section className="testimonials-section">
//      <div className="container">
//          <div className="testimonials-content">
//              <h2>Client Testimonials</h2>
//              {/* Add client testimonials here */}
//          </div>
//      </div>
//  </section>

//  {/* Contact Section */}
//  <section className="contact-section">
//      <div className="container">
//          <div className="contact-content">
//              <h2>Contact Us</h2>
//              <p>
//                  Ready to take your business to the next level? Let's discuss
//                  your project requirements and create a digital solution that
//                  stands out from the competition.
//              </p>
//              <button className="cta-btn">Let's Talk</button>
//          </div>
//      </div>
//  </section>

//  {/* Footer Section */}
//  <footer className="footer-section">
//      <div className="container">
//          <div className="footer-content">
//              {/* Add footer links and social media icons here */}
//          </div>
//      </div>
//  </footer>
