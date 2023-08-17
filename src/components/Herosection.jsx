
import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-section-container">
        <div className="hero-section-content">
          <div className="hero-section-text-content">
            <h1>Unleash Your Digital Potential</h1>
            <h2>Your Trusted Web Development Partner</h2>
            <p>
              Welcome to Phoenix Tech Solutions, where we craft exceptional web
              experiences that drive growth and success for your business. Let's
              build something extraordinary together.
            </p>
            <button className="cta-btn">Get Started</button>
          </div>
          <div className="hero-image">
            <img src="../assets/PTS Banner.png" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
