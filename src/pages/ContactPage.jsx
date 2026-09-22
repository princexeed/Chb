import React, { useState } from 'react'
import './ContactPage.css'

const contactInfo = [
  {
    icon: 'fa-location-dot',
    title: 'Address',
    lines: [
      'Christian Hospital Bissamcuttack',
      'District: Rayagada, State: Odisha',
      'Country: India — PIN: 765019',
    ],
  },
  {
    icon: 'fa-phone',
    title: 'Phone Numbers',
    lines: [
      'Hospital: +91-8118060163',
      'NLEM School: 06863 247164',
      'College of Nursing: +91-8763649504',
    ],
  },
  {
    icon: 'fa-envelope',
    title: 'Email Addresses',
    lines: [
      { label: 'Medical Superintendent (Dr. Sunil Jiwanmall)', email: 'chb.orissa@gmail.com' },
      { label: 'Deputy MS (Dr. Pragya Jiwanmall)', email: 'pragyajiwanmall@gmail.com' },
      { label: 'NLEM School', email: 'nlemsb@gmail.com' },
      { label: 'College of Nursing', email: 'sonchb@gmail.com' },
    ],
    isEmail: true,
  },
]

const timings = [
  { label: 'Office', value: 'Mon – Sat: 8:00 AM – 7:00 PM', note: 'Sunday: Closed' },
  { label: 'OPD Registration', value: 'Mon – Sat: 8:00 AM – 1:30 PM' },
  { label: 'OPD', value: 'Mon – Sat: 8:00 AM – 5:00 PM' },
  { label: '24×7 Services', value: 'Emergency / Casualty, Laboratory, Radiology' },
  { label: 'Other Departments', value: 'Mon – Sat: 7:30 AM – 5:30 PM' },
]

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (status.message) setStatus({ type: '', message: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent. We will get back to you shortly.' })
        setFormData({ fullName: '', email: '', phone: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.message })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Could not connect to the server. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-bg" />
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <span className="contact-hero-badge">Get in Touch</span>
          <h1 className="contact-hero-title">
            We're Here to
            <br />
            <span className="contact-hero-highlight">Help You</span>
          </h1>
        </div>
        <div
          className="contact-hero-scroll"
          onClick={() => document.getElementById('contact-info-section')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span>Contact Us</span>
          <i className="fas fa-chevron-down" />
        </div>
      </section>

      <div className="contact-main" id="contact-info-section">        <div className="contact-layout">
          {/* LEFT — Contact Information */}
          <div className="contact-left">
            <h1 className="contact-title">We're Here to Help You</h1>
            <span className="contact-title-underline" />

            <p className="contact-description">
              For emergencies, please call our hospital number directly. Our team is available
              <strong> 24/7 for emergency services.</strong>
            </p>

            {contactInfo.map((item, i) => (
              <div key={i} className="contact-info-block">
                <h2 className="contact-section-heading">{item.title}</h2>
                {item.isEmail ? (
                  item.lines.map((line, j) => (
                    <div key={j} className="contact-info-row">
                      <span className="contact-info-icon"><i className={`fas ${j === 0 ? item.icon : 'fa-envelope'}`} /></span>
                      <p className="contact-info-text">
                        <a href={`mailto:${line.email}`} className="contact-email-link">{line.email}</a>
                        <span className="contact-email-note"> — {line.label}</span>
                      </p>
                    </div>
                  ))
                ) : (
                  item.lines.map((line, j) => (
                    <div key={j} className="contact-info-row">
                      <span className="contact-info-icon">{j === 0 && <i className={`fas ${item.icon}`} />}</span>
                      <p className="contact-info-text">{line}</p>
                    </div>
                  ))
                )}
              </div>
            ))}

            {/* Timings */}
            <div className="contact-timings">
              <h2 className="contact-section-heading">Hospital Timings</h2>
              {timings.map((t, i) => (
                <div key={i} className="contact-timing-row">
                  <span className="contact-timing-label">{t.label}</span>
                  <span className="contact-timing-value">
                    {t.value}
                    {t.note && <span className="contact-timing-closed">{t.note}</span>}
                  </span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="contact-social">
              <h2 className="contact-section-heading">Follow Us</h2>
              <div className="contact-social-links">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube" /></a>
              </div>
            </div>
          </div>

          {/* RIGHT — Contact Form Card */}
          <form className="contact-card" onSubmit={handleSubmit}>
            <h2 className="contact-card-title">Send Us a Message</h2>
            <span className="contact-card-underline" />

            <div className="contact-row">
              <label className="contact-label" htmlFor="cpName">
                Full Name<span className="contact-required">*</span>
              </label>
              <div className="contact-input-area">
                <input
                  type="text"
                  id="cpName"
                  name="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-row">
              <label className="contact-label" htmlFor="cpEmail">
                Email Address<span className="contact-required">*</span>
              </label>
              <div className="contact-input-area">
                <input
                  type="email"
                  id="cpEmail"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-row">
              <label className="contact-label" htmlFor="cpPhone">
                Phone Number
              </label>
              <div className="contact-input-area">
                <input
                  type="tel"
                  id="cpPhone"
                  name="phone"
                  placeholder="+91-8118060163"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="contact-row">
              <label className="contact-label" htmlFor="cpMessage">
                Message<span className="contact-required">*</span>
              </label>
              <div className="contact-input-area">
                <textarea
                  id="cpMessage"
                  name="message"
                  rows="5"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {status.message && (
              <div className={`contact-notification ${status.type}`}>
                {status.type === 'success' ? (
                  <i className="fas fa-check-circle" />
                ) : (
                  <i className="fas fa-exclamation-circle" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <div className="contact-card-footer">
              <button
                type="submit"
                className="contact-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="fas fa-paper-plane" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
