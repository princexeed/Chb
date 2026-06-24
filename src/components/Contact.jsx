import React, { useEffect, useRef, useState } from 'react'
import './Contact.css'

function Contact() {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    captcha: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-in').forEach((el) => {
              el.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
        setStatus({ type: 'success', message: 'Thank you! Your feedback has been submitted successfully.' })
        setFormData({ fullName: '', email: '', subject: '', message: '', captcha: '' })
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
        'chb.orissa@gmail.com — Medical Superintendent (Dr. Sunil Jiwanmall)',
        'pragyajiwanmall@gmail.com — Deputy MS (Dr. Pragya Jiwanmall)',
        'nlemsb@gmail.com — NLEM School',
        'sonchb@gmail.com — College of Nursing',
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

  return (
    <section id="contact" className="contact section" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-in">
          <span className="section-tag">Contact Us</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            We are here to help. Reach out to us for inquiries, feedback, or any medical assistance you may need.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left — Contact Info */}
          <div className="contact-info animate-in">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-text">
              For emergencies, please call our hospital number directly. Our team is available 24/7 for emergency services.
            </p>

            <div className="contact-details">
              {contactInfo.map((item, i) => (
                <div key={i} className="contact-detail">
                  <div className="contact-detail-icon">
                    <i className={`fas ${item.icon}`} />
                  </div>
                  <div>
                    <h4 className="contact-detail-title">{item.title}</h4>
                    {item.lines.map((line, j) => (
                      <p key={j} className={`contact-detail-text${item.isEmail ? ' contact-email' : ''}`}>
                        {item.isEmail ? (
                          <>
                            <a href={`mailto:${line.split(' — ')[0]}`}>{line.split(' — ')[0]}</a>
                            {line.includes(' — ') && <span className="contact-email-role"> — {line.split(' — ').slice(1).join(' — ')}</span>}
                          </>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Timings */}
            <div className="contact-timings">
              <h4 className="contact-timings-title">
                <i className="fas fa-clock" /> Hospital Timings
              </h4>
              <div className="contact-timings-list">
                {timings.map((t, i) => (
                  <div key={i} className="contact-timing-row">
                    <span className="contact-timing-label">{t.label}</span>
                    <span className="contact-timing-value">
                      {t.value}
                      {t.note && <span className="contact-timing-note">{t.note}</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-social">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube" /></a>
              </div>
            </div>
          </div>

          {/* Right — Feedback Form */}
          <form className="contact-form animate-in" style={{ transitionDelay: '0.2s' }} onSubmit={handleSubmit}>
            <h3 className="contact-form-heading">Send Us Your Feedback</h3>
            <p className="contact-form-subtext">
              If you have any suggestion or feedback regarding our organization, please fill the form below.
            </p>

            <div className="form-group">
              <label htmlFor="feedbackName">Name</label>
              <input
                type="text"
                id="feedbackName"
                name="fullName"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="feedbackEmail">E-mail</label>
              <input
                type="email"
                id="feedbackEmail"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="feedbackSubject">Subject</label>
              <input
                type="text"
                id="feedbackSubject"
                name="subject"
                placeholder="Subject of your feedback"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="feedbackMessage">Message</label>
              <textarea
                id="feedbackMessage"
                name="message"
                rows="5"
                placeholder="Write your feedback or inquiry here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="feedbackCaptcha">Enter Captcha</label>
              <div className="captcha-wrapper">
                <input
                  type="text"
                  id="feedbackCaptcha"
                  name="captcha"
                  placeholder="Type the characters shown"
                  value={formData.captcha}
                  onChange={handleChange}
                  required
                />
                <div className="captcha-box">
                  <span className="captcha-text">CHB7</span>
                </div>
              </div>
            </div>

            {status.message && (
              <div className={`form-notification ${status.type}`}>
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
              className="btn btn-primary form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send
                  <i className="fas fa-paper-plane" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
