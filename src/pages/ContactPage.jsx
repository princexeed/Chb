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
  { label: 'Office', value: 'Monday – Saturday: 8:00 AM – 7:00 PM', note: 'Sunday: Closed' },
  { label: 'OPD Registration', value: 'Monday – Saturday: 8:00 AM – 1:30 PM' },
  { label: 'OPD', value: 'Monday – Saturday: 8:00 AM – 5:00 PM' },
  { label: '24×7 Services', value: 'Emergency / Casualty, Laboratory, Radiology' },
  { label: 'Other Departments', value: 'Monday – Saturday: 7:30 AM – 5:30 PM' },
]

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: '',
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
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent. We will get back to you shortly.' })
        setFormData({ fullName: '', email: '', phone: '', department: '', message: '' })
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
      <section className="contact-page-hero">
        <div className="contact-page-hero-bg" />
        <div className="contact-page-hero-overlay" />
        <div className="contact-page-hero-content">
          <span className="contact-page-badge">Get in Touch</span>
          <h1 className="contact-page-title">
            We're Here to
            <br />
            <span className="contact-page-highlight">Help You</span>
          </h1>
          <p className="contact-page-subtitle">
            For emergencies, please call our hospital number directly.
            Our team is available 24/7 for emergency services.
          </p>
        </div>
        <div className="contact-page-scroll">
          <span>Contact Us</span>
          <i className="fas fa-chevron-down" />
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-page-content">
        <div className="container">
          <div className="contact-page-grid">
            {/* Left - Contact Info */}
            <div className="contact-page-info">
              <h2 className="contact-page-info-title">Contact Information</h2>

              <div className="contact-page-details">
                {contactInfo.map((item, i) => (
                  <div key={i} className="contact-page-detail">
                    <div className="contact-page-detail-icon">
                      <i className={`fas ${item.icon}`} />
                    </div>
                    <div className="contact-page-detail-body">
                      <h3 className="contact-page-detail-title">{item.title}</h3>
                      {item.isEmail ? (
                        item.lines.map((line, j) => (
                          <p key={j} className="contact-page-detail-text">
                            <a href={`mailto:${line.email}`} className="contact-page-email">{line.email}</a>
                            <span className="contact-page-email-label"> — {line.label}</span>
                          </p>
                        ))
                      ) : (
                        item.lines.map((line, j) => (
                          <p key={j} className="contact-page-detail-text">{line}</p>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Timings */}
              <div className="contact-page-timings">
                <h3 className="contact-page-timings-title">
                  <i className="fas fa-clock" /> Hospital Timings
                </h3>
                <div className="contact-page-timings-list">
                  {timings.map((t, i) => (
                    <div key={i} className="contact-page-timing-row">
                      <span className="contact-page-timing-label">{t.label}</span>
                      <span className="contact-page-timing-value">
                        {t.value}
                        {t.note && <span className="contact-page-timing-note">{t.note}</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-page-social">
                <h3>Follow Us</h3>
                <div className="contact-page-social-links">
                  <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
                  <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
                  <a href="#" aria-label="YouTube"><i className="fab fa-youtube" /></a>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <form className="contact-page-form" onSubmit={handleSubmit}>
              <h2 className="contact-page-form-title">Send Us a Message</h2>
              <p className="contact-page-form-text">
                Have a question or need assistance? Fill out the form below and we'll get back to you.
              </p>

              <div className="contact-page-form-row">
                <div className="contact-page-form-group">
                  <label htmlFor="cpName">Full Name</label>
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
                <div className="contact-page-form-group">
                  <label htmlFor="cpEmail">Email Address</label>
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

              <div className="contact-page-form-row">
                <div className="contact-page-form-group">
                  <label htmlFor="cpPhone">Phone Number</label>
                  <input
                    type="tel"
                    id="cpPhone"
                    name="phone"
                    placeholder="+91-8118060163"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-page-form-group">
                  <label htmlFor="cpDepartment">Department</label>
                  <select
                    id="cpDepartment"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                  >
                    <option value="">Select a department</option>
                    <option value="General Medicine">General Medicine</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Maternity">Maternity</option>
                    <option value="Emergency">Emergency</option>
                    <option value="Endoscopy">Endoscopy</option>
                    <option value="Ophthalmology">Ophthalmology</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="contact-page-form-group">
                <label htmlFor="cpMessage">Message</label>
                <textarea
                  id="cpMessage"
                  name="message"
                  rows="6"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {status.message && (
                <div className={`contact-page-notification ${status.type}`}>
                  {status.type === 'success' ? (
                    <i className="fas fa-check-circle" />
                  ) : (
                    <i className="fas fa-exclamation-circle" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                className="contact-page-submit"
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
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
