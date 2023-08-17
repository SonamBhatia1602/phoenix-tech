import React from "react";
import "../styles/WhyUs.css";

const WhyUs = () => {
  return (
    <section className="why-choose-us-section">
      <div className="container">
      <h2>Why Choose Us</h2>
        <div className="row">
        <div className="column clip-path-image">
            <img src="../assets/us1.png" alt="Why Choose Us" />
          </div>
          <div className="column bullet-points">
            <p className="row-text">
              At Phoenix Tech Solutions, we are more than just a web design agency. Our commitment to excellence sets us apart in the industry.
            </p>
            <ul>
              <li>
              <span className="header-highlight">Exceptional Design Expertise: </span>
             Our creative team is dedicated to crafting visually stunning websites that leave a lasting impression.</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="column bullet-points">
            <ul className="ul-row-text">
              <li>
              <span className="header-highlight">Rapid Loading Websites: </span>
               We understand the importance of speed. Our websites are optimized for lightning-fast performance.</li>
            <li>
            <span className="header-highlight">Proven Track Record: </span>
                With a portfolio of successful projects and satisfied clients, we have a track record you can trust.</li>
            <li>
            <span className="header-highlight">Client-Centric Approach: </span>
                Your vision is our priority. We work closely with you to ensure your website reflects your unique brand and goals.</li>
            </ul>
            <p className="row-text">
            Your online presence matters, and we're here to make it exceptional. Choose Phoenix Tech Solutions for a partnership that goes beyond design.
            </p>
          </div>
          <div className="column clip-path-image">
            <img src="../assets/us2.jpg" alt="Why Choose Us" />
          </div>
        </div>
        <div className="center-button">
          <button className="consultation-button">Book a Free Consultation Now</button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;



{/* <li>Exceptional Design Expertise: Our creative team is dedicated to crafting visually stunning websites that leave a lasting impression.</li>
<li>Rapid Loading Websites: We understand the importance of speed. Our websites are optimized for lightning-fast performance.</li>
<li>Proven Track Record: With a portfolio of successful projects and satisfied clients, we have a track record you can trust.</li>
<li>Client-Centric Approach: Your vision is our priority. We work closely with you to ensure your website reflects your unique brand and goals.</li> */}