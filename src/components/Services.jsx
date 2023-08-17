// ServicesSection.jsx
import React, { useState } from "react";
import "../index.css";

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We specialize in building dynamic and responsive websites tailored to your business needs. From e-commerce platforms to corporate sites, we've got you covered.",
      icon: "webdev.png", // Replace with your image file name
    },
    {
      title: "Mobile Development",
      description:
        "Elevate your brand with mobile apps that engage users on the go. Our team crafts user-friendly and feature-rich applications for both iOS and Android platforms.",
      icon: "mobile-dev.png", // Replace with your image file name
    },
    {
        title: "SEO Service",
        description:
            "Improve your online visibility and drive organic traffic to your website with our comprehensive SEO services. Our experts will optimize your website's content, keywords, and structure to rank higher on search engines and attract potential customers.",
        icon: "SEO-img.png", // Replace with your image file name
      },
    // Add more services as needed
  ];

  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardHover = (index) => {
    setFlippedCard(index);
  };

  const handleCardLeave = () => {
    setFlippedCard(null);
  };

  return (
    <section className="services-section">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service-cards">
          {services.map((service, index) => (
            <div
              className={`service-card ${flippedCard === index ? "flipped" : ""}`}
              key={index}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
            >
              <div className="service-card-inner">
                <div className="service-card-front">
                  <div className="service-icon">
                    <img
                      src={process.env.PUBLIC_URL + `/assets/${service.icon}`}
                      alt={service.title}
                    />
                  </div>
                  <h3>{service.title}</h3>
                </div>
                <div className="service-card-back">
                <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


