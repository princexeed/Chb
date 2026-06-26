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
                  <span className="logo-location">Bissumcuttack</span>
                </div>
              </div>
              <p className="footer-brand-text">
                Christian Hospital Bissumcuttack — providing compassionate, world-class
                healthcare since 1989. Healing body, mind, and spirit through faith and medical excellence.
              </p>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/support-services">Support</Link></li>
                <li><Link to="/training">Training</Link></li>
                <li><Link to="/schools">Schools</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/#testimonials">Testimonials</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Departments</h4>
              <ul className="footer-links">
                <li><a href="#services">General Medicine</a></li>
                <li><a href="#services">Pediatrics</a></li>
                <li><a href="#services">Emergency Medicine</a></li>
                <li><a href="#services">Maternity</a></li>
                <li><a href="#services">Endoscopy</a></li>
                <li><a href="#services">Ophthalmology</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Newsletter</h4>
              <p className="footer-newsletter-text">
                Subscribe to receive health tips, updates, and news from Christian Hospital.
              </p>
              <form className="footer-newsletter" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email address" required />
                <button type="submit" aria-label="Subscribe">
                  <i className="fas fa-arrow-right" />
                </button>
              </form>
              <div className="footer-social">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-left">
            <p>&copy; {currentYear} Christian Hospital Bissumcuttack. All rights reserved.</p>
            <p className="footer-developed">Developed by <strong>CHB IT Team</strong></p>
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
