import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './DonatePage.css'

const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

function DonatePage() {
  const [amount, setAmount] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [countryCode, setCountryCode] = useState('+91')

  const numeric = Number(amount) || 0
  const displayAmount = formatter.format(numeric)
  const payLabel = `Pay ${displayAmount}`

  return (
    <div className="donate-page">
      {/* Geometric background (right side) */}
      <div className="donate-geometry" aria-hidden="true">
        <div className="geo-shape geo-shape-1" />
        <div className="geo-shape geo-shape-2" />
        <div className="geo-shape geo-shape-3" />
        <div className="geo-shape geo-shape-4" />
      </div>

      {/* Header */}
      <header className="donate-header">
        <div className="donate-header-logo">
          <img src="/photos/logo/image.svg" alt="Christian Hospital Bissamcuttack logo" />
        </div>
        <span className="donate-merchant-name">Christian Hospital Bissamcuttack</span>
      </header>

      <main className="donate-main">
        <div className="donate-layout">
          {/* ─── LEFT COLUMN ─── */}
          <div className="donate-left">
            <h1 className="donate-title">Donate to CHB</h1>
            <span className="donate-title-underline" />

            {/* Hospital image */}
            <div className="donate-hospital-image">
              <img src="/photos/hospital/image1.jpg" alt="Christian Hospital Bissamcuttack" />
            </div>

            {/* Contact */}
            <div className="donate-contact">
              <h2 className="donate-contact-heading">Contact Us:</h2>
              <div className="donate-contact-row">
                <i className="fas fa-envelope donate-contact-icon" />
                <span>chb.orissa@gmail.com</span>
              </div>
              <div className="donate-contact-row">
                <i className="fas fa-phone donate-contact-icon" />
                <span>+91 81180 60163</span>
              </div>
            </div>

            {/* Terms */}
            <div className="donate-terms">
              <h2 className="donate-terms-heading">Terms &amp; Conditions:</h2>
              <p className="donate-terms-text">
                You agree to share information entered on this page with Christian
                Hospital Bissamcuttack (owner of this page) and Razorpay, adhering
                to applicable laws.
              </p>
            </div>

            {/* Razorpay branding */}
            <div className="donate-brand">
              <span className="donate-brand-logo">
                <i className="fas fa-bolt" />
              </span>
              <span className="donate-brand-text">
                <span className="donate-brand-name">Razorpay</span>
              </span>
              <span className="donate-brand-links">
                Want to create page like this for your Business? Visit{' '}
                <a href="https://razorpay.com/payment-pages/" target="_blank" rel="noreferrer">Razorpay Payment Pages</a>{' '}
                to get started!
                <a href="#" className="donate-report-link">Report Page</a>
              </span>
            </div>
          </div>

          {/* ─── RIGHT COLUMN — PAYMENT CARD ─── */}
          <div className="donate-right">
            <div className="donate-card">
              <h2 className="donate-card-title">Payment Details</h2>
              <span className="donate-card-underline" />

              {/* Amount */}
              <div className="donate-row">
                <label className="donate-label" htmlFor="dk-amount">
                  Amount <span className="donate-required">*</span>
                </label>
                <div className="donate-input-area">
                  <div className="donate-input-wrap">
                    <span className="donate-input-prefix">₹</span>
                    <input
                      id="dk-amount"
                      type="number"
                      min="0"
                      placeholder="Enter Amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Full Name */}
              <div className="donate-row">
                <label className="donate-label" htmlFor="dk-name">
                  Full Name <span className="donate-required">*</span>
                </label>
                <div className="donate-input-area">
                  <input
                    id="dk-name"
                    type="text"
                    placeholder="Your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="donate-row">
                <label className="donate-label" htmlFor="dk-email">
                  Email <span className="donate-required">*</span>
                </label>
                <div className="donate-input-area">
                  <input
                    id="dk-email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="donate-row">
                <label className="donate-label" htmlFor="dk-phone">
                  Phone <span className="donate-required">*</span>
                </label>
                <div className="donate-input-area">
                  <div className="donate-input-wrap donate-input-wrap-phone">
                    <select
                      className="donate-country"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      aria-label="Country code"
                    >
                      <option value="+91">IN &nbsp;+91</option>
                      <option value="+1">US &nbsp;+1</option>
                      <option value="+44">UK &nbsp;+44</option>
                    </select>
                    <input
                      id="dk-phone"
                      type="tel"
                      placeholder="Mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="donate-card-footer">
                <div className="donate-pay-methods">
                  <span className="donate-method-chip">UPI</span>
                  <i className="fab fa-cc-visa donate-brand-icon" aria-label="Visa" />
                  <i className="fab fa-cc-mastercard donate-brand-icon" aria-label="Mastercard" />
                  <i className="fas fa-credit-card donate-brand-icon" aria-label="RuPay" />
                </div>
                <Link to="/donate" className="donate-pay-btn" onClick={(e) => e.preventDefault()}>
                  {payLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DonatePage