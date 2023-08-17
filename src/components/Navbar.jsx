import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="../assets/Logo Phoenix.png" alt="Tech Solutions" height="60" width="100" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#why">
                Why Phoenix Tech Solutions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#our-work">
                Our Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#web-services">
                Web Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#lets-talk"
                style={{
                  backgroundColor: '#42826c',
                  color: '#fff',
                  borderRadius: '4px',
                  padding: '8px 16px',
                }}
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





