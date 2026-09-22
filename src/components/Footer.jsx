import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">
                  <img src="/photos/logo/image.svg" alt="Christian Hospital" />
                </div>
                <div className="logo-text">
                  <span className="logo-name">Christian Hospital</span>
                  <span className="logo-location">Bissamcuttack</span>
                </div>
              </div>
              <p className="footer-brand-text">
                Christian Hospital Bissamcuttack — providing compassionate, world-class
                healthcare since 1954. Healing body, mind, and spirit through faith and medical excellence.
              </p>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/training">Nursing</Link></li>
                <li><Link to="/schools">Schools</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/#testimonials">Testimonials</Link></li>
                <li><Link to="/reports">Reports</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Departments</h4>
              <ul className="footer-links">
                <li><Link to="/services?dept=General+Medicine">General Medicine</Link></li>
                <li><Link to="/services?dept=Pediatrics">Pediatrics</Link></li>
                <li><Link to="/services?dept=Blood+Bank">Blood Bank</Link></li>
                <li><Link to="/services?dept=Maternity">Maternity</Link></li>
                <li><Link to="/services?dept=Endoscopy">Endoscopy</Link></li>
                <li><Link to="/services?dept=Ophthalmology">Ophthalmology</Link></li>
              </ul>
            </div>

            <div className="footer-col footer-map-col">
              <h4 className="footer-heading">Find Us</h4>
              <div className="footer-map">
                <iframe
                  src="https://www.google.com/maps?q=Christian+Hospital+Bissamcuttack,+Rayagada,+Odisha+765019&output=embed"
                  title="Christian Hospital Bissamcuttack location map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-left">
            <p>&copy; {currentYear} Christian Hospital Bissamcuttack. All rights reserved.</p>
            <p className="footer-developed"><span className="footer-dev-icon"><i className="fas fa-code" /></span> Developed by <strong>CHB IT Team</strong> <span className="footer-dev-heart"><i className="fas fa-heart" /></span></p>
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
