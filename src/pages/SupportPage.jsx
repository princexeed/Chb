import React from 'react'
import { Link } from 'react-router-dom'
import './SupportPage.css'

const donateWays = [
  {
    icon: 'fa-hand-holding-heart',
    title: 'General Donation',
    desc: 'Support the everyday running of the hospital — medicines, equipment, patient care and staff welfare.',
  },
  {
    icon: 'fa-baby',
    title: 'Sponsor a Patient',
    desc: 'Cover the treatment cost of a patient who cannot afford care. Every patient is charged only the actual cost of care.',
  },
  {
    icon: 'fa-graduation-cap',
    title: 'Sponsor a Student',
    desc: 'Support a nursing student or a child at our residential schools, giving them a future of dignity and purpose.',
  },
  {
    icon: 'fa-house-chimney',
    title: 'Infrastructure Projects',
    desc: 'Contribute to building and upgrading hospital facilities — ICUs, wards, hostels and classrooms.',
  },
]

const bankDetails = [
  { label: 'Account Name', value: 'Christian Hospital Bissamcuttack' },
  { label: 'Bank Name', value: 'State Bank of India' },
  { label: 'Branch', value: 'Bissamcuttack, Rayagada, Odisha' },
  { label: 'Account Number', value: '10537566842' },
  { label: 'IFSC Code', value: 'SBIN0001328' },
  { label: 'Account Type', value: 'Savings Account' },
]

const overseasDetails = [
  {
    org: 'CMAI / CMC (via The Leprosy Mission or partner NGOs)',
    note: 'Donations from abroad are most helpful when routed through established mission partners who can transfer funds to India in compliance with FCRA regulations.',
  },
]

function SupportPage() {
  return (
    <div className="support-page">
      {/* Hero */}
      <section className="support-hero">
        <div className="support-hero-bg" />
        <div className="support-hero-overlay" />
        <div className="support-hero-content">
          <span className="support-badge">Support Us</span>
          <h1 className="support-title">
            Your Gift Brings
            <br />
            <span className="support-highlight">Healing &amp; Hope</span>
          </h1>
          <p className="support-subtitle">
            For over 70 years, Christian Hospital Bissamcuttack has served the vulnerable
            people of southern and western Odisha. Your generosity helps us keep quality
            healthcare within reach of those who need it most.
          </p>
        </div>
        <div
          className="support-scroll"
          onClick={() => document.getElementById('support-donate')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ cursor: 'pointer' }}
        >
          <span>Donate Now</span>
          <i className="fas fa-chevron-down" />
        </div>
      </section>

      {/* Donate */}
      <section className="support-section support-donate" id="support-donate">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Give</span>
            <h2 className="section-title">Ways to Donate</h2>
            <p className="section-subtitle">
              Every contribution, large or small, directly touches the lives of the
              patients and students we serve.
            </p>
          </div>
          <div className="support-donate-grid">
            {donateWays.map((way, i) => (
              <div key={i} className="support-donate-card">
                <div className="support-donate-icon">
                  <i className={`fas ${way.icon}`} />
                </div>
                <h3 className="support-donate-title">{way.title}</h3>
                <p className="support-donate-desc">{way.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indian Donors */}
      <section className="support-section support-indian">
        <div className="container">
          <div className="support-indian-grid">
            <div className="support-indian-text">
              <span className="support-mini-badge">Indian Donors</span>
              <h2 className="support-indian-title">Donate from India</h2>
              <p className="support-indian-desc">
                You can transfer your donation directly to our bank account. Kindly email
                us the transaction details after making the transfer so we can acknowledge
                your generous gift.
              </p>
              <div className="support-bank">
                {bankDetails.map((row, i) => (
                  <div key={i} className="support-bank-row">
                    <span className="support-bank-label">{row.label}</span>
                    <span className="support-bank-value">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="support-note">
                <i className="fas fa-envelope" />
                For donation receipts and queries, write to us at{' '}
                <a href="mailto:chb.orissa@gmail.com">chb.orissa@gmail.com</a>
              </div>
            </div>
            <div className="support-indian-card">
              <div className="support-indian-card-icon">
                <i className="fas fa-building-columns" />
              </div>
              <h3>Make a Difference Today</h3>
              <p>
                Your gift — whether a one-time donation or a monthly commitment — powers
                surgeries, medicines, nursing education and community outreach in the
                remotest tribal villages.
              </p>
              <Link to="/donate" className="support-cta">
                <i className="fas fa-heart" />
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overseas Donors */}
      <section className="support-section support-overseas">
        <div className="container">
          <div className="support-overseas-content">
            <span className="support-mini-badge">Overseas Donors</span>
            <h2 className="support-overseas-title">Donate from Abroad</h2>
            <p className="support-overseas-desc">
              Christian Hospital Bissamcuttack is a registered philanthropic society in India.
              For overseas donors, we recommend routing your contribution through established
              mission partners who can transfer funds to us in compliance with Indian FCRA
              regulations.
            </p>
            <div className="support-overseas-list">
              {overseasDetails.map((item, i) => (
                <div key={i} className="support-overseas-item">
                  <i className="fas fa-handshake" />
                  <div>
                    <h4>{item.org}</h4>
                    <p>{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="support-note">
              <i className="fas fa-earth-asia" />
              International friends may also contact us directly at{' '}
              <a href="mailto:chb.orissa@gmail.com">chb.orissa@gmail.com</a> for
              partnership and giving guidance.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="support-section support-cta-section">
        <div className="container">
          <div className="support-cta-content">
            <h2 className="support-cta-title">Together, We Bring Healing</h2>
            <p className="support-cta-text">
              Join us in serving the most vulnerable people of Odisha. Your support today
              becomes a tomorrow of health, education and hope.
            </p>
            <Link to="/donate" className="btn btn-primary support-cta-btn">
              <i className="fas fa-heart" />
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SupportPage