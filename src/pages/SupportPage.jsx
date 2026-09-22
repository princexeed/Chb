import React from 'react'
import { Link } from 'react-router-dom'
import './SupportPage.css'

const joinWays = [
  {
    icon: 'fa-hands-praying',
    title: 'PRAY',
    desc: 'Become a prayer partner and receive regular prayer letters.',
    buttons: [{ label: 'Contact Us', to: '/contact' }],
  },
  {
    icon: 'fa-handshake-angle',
    title: 'VOLUNTEER',
    desc: 'Join us on a short-term or long-term project at Christian Hospital Bissamcuttack.',
    buttons: [{ label: 'Read More..', to: '/contact' }],
  },
  {
    icon: 'fa-person-running',
    title: 'VISIT',
    desc: 'Want to see our work? Visit us',
    buttons: [{ label: 'Read More..', to: '/contact' }],
  },
  {
    icon: 'fa-hand-holding-dollar',
    title: 'DONATE',
    desc: 'Donate to Christian Hospital Bissamcuttack or any project specifically.',
    buttons: [
      { label: ' Donors', to: '/donate' },
    ],
  },
]

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

function SupportPage() {
  return (
    <div className="support-page">
      {/* JOIN US Hero */}
      <section className="join-hero">
        <div className="join-hero-overlay" />
        <div className="join-hero-content">
          <span className="join-hero-badge">Partner with Purpose</span>
          <h1 className="join-hero-title">Join Us</h1>
          <div className="join-hero-divider" />
          <p className="join-hero-subtitle">We love to work with like-minded friends.</p>
        </div>
      </section>

      {/* Four Columns */}
      <section className="join-section">
        <div className="join-container">
          {joinWays.map((way, i) => (
            <div key={i} className="join-col">
              <div className="join-icon">
                <i className={`fas ${way.icon}`} />
              </div>
              <h3 className="join-title">{way.title}</h3>
              <p className="join-desc">{way.desc}</p>
              <div className="join-buttons">
                {way.buttons.map((btn, j) =>
                  btn.to ? (
                    <Link key={j} to={btn.to} className="join-btn">
                      {btn.label}
                    </Link>
                  ) : (
                    <button
                      key={j}
                      type="button"
                      className="join-btn"
                      onClick={() => scrollTo(btn.scroll)}
                    >
                      {btn.label}
                    </button>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stay Connected */}
      <section className="support-connect">
        <div className="support-connect-inner">
          <div className="support-connect-heading">
            <h2 className="support-connect-title">Stay Connected.</h2>
          </div>

          <div className="support-connect-grid">
            <div className="support-connect-col">
              <span className="support-connect-label">Address</span>
              <p>Christian Hospital Bissamcuttack,</p>
              <p>Rayagada, Odisha</p>
              <p>765019 India</p>
            </div>

            <div className="support-connect-col">
              <span className="support-connect-label">Contact Information</span>
              <p>
                <a href="mailto:chb.orissa@gmail.com">chb.orissa@gmail.com</a>
              </p>
              <p>Phone: +91 81180 60163</p>
            </div>

            <div className="support-connect-map">
              <iframe
                title="Christian Hospital Bissamcuttack location"
                src="https://www.google.com/maps?q=Christian%20Hospital%20Bissamcuttack&output=embed"
                width="240"
                height="235"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="support-connect-logos">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="connect-logo-fb">
              <i className="fab fa-facebook" />
            </a>
            <a href="https://www.payumoney.com" target="_blank" rel="noreferrer" aria-label="PayUmoney" className="connect-logo-payu">
              PayU<span>money</span>
            </a>
            <a href="https://razorpay.com" target="_blank" rel="noreferrer" aria-label="Razorpay" className="connect-logo-rzp">
              Razorpay
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SupportPage