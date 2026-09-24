import React, { useState } from 'react'
import PaymentModal from '../components/PaymentModal'
import './DonatePage.css'

const loadRazorpayScript = () =>
  new Promise((resolve) => {
    if (window.Razorpay) return resolve(true)
    const s = document.createElement('script')
    s.src = 'https://checkout.razorpay.com/v1/checkout.js'
    s.onload = () => resolve(true)
    s.onerror = () => resolve(false)
    document.body.appendChild(s)
  })

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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [apiError, setApiError] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const numeric = Number(amount) || 0
  const displayAmount = formatter.format(numeric)
  const payLabel = isProcessing ? 'Processing…' : `Donate ${displayAmount}`

  const validateField = (name, value) => {
    switch (name) {
      case 'amount':
        const num = Number(value)
        if (!value || !value.trim()) return 'This Amount field is mandatory'
        if (num < 1) return 'Amount must be at least ₹1'
        if (num > 1000000) return 'Amount cannot exceed ₹10,00,000'
        return ''
      case 'fullName':
        if (!value || !value.trim()) return 'This field is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        if (!/^[a-zA-Z\s.']+$/.test(value.trim())) return 'Name can only contain letters, spaces, dots, and apostrophes'
        return ''
      case 'email':
        if (!value || !value.trim()) return 'This field is required'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address'
        return ''
      case 'phone':
        if (!value || !value.trim()) return 'This field is required'
        const digits = value.replace(/\D/g, '')
        if (countryCode === '+91' && digits.length !== 10) return 'Please enter a valid 10-digit Indian mobile number'
        if (countryCode !== '+91' && digits.length < 7) return 'Please enter a valid phone number'
        return ''
      default:
        return ''
    }
  }

  const handleChange = (name, value) => {
    // Clear error for this field when user starts typing
    if (errors[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
    switch (name) {
      case 'amount':
        setAmount(value)
        break
      case 'fullName':
        setFullName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'phone':
        setPhone(value)
        break
      default:
        break
    }
  }

  const validateAll = () => {
    const newErrors = {}
    let hasErrors = false
    ;['amount', 'fullName', 'email', 'phone'].forEach(field => {
      const value = field === 'amount' ? amount : field === 'fullName' ? fullName : field === 'email' ? email : phone
      const error = validateField(field, value)
      if (error) {
        newErrors[field] = error
        hasErrors = true
      }
    })
    setErrors(newErrors)
    setSubmitted(true)
    return !hasErrors
  }

  const handlePayClick = async (e) => {
    e.preventDefault()
    setApiError('')
    const isValid = validateAll()
    if (!isValid || numeric <= 0) return

    // Use relative URL so it works both in dev (via Vite proxy) and production
    // where the Express server serves the built frontend. Can be overridden with VITE_API_URL.
    const rawApiUrl = import.meta.env.VITE_API_URL || ''
    const API_URL = rawApiUrl.replace(/\/$/, '')

    setIsProcessing(true)
    try {
      let orderRes
      try {
        const res = await fetch(`${API_URL}/api/donate/create-order`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount, fullName, email, phone, countryCode }),
        })
        const text = await res.text()
        try {
          orderRes = text ? JSON.parse(text) : {}
        } catch {
          throw new Error(text?.slice(0, 200) || `Server error (${res.status})`)
        }
        if (!res.ok && !orderRes.success) {
          throw new Error(orderRes.message || `Server error (${res.status})`)
        }
      } catch (fetchErr) {
        // Provide actionable message instead of crashing to ErrorBoundary
        const msg = fetchErr.message?.includes('Failed to fetch') || fetchErr.message?.includes('NetworkError')
          ? 'Cannot reach payment server. Please ensure the backend is running (npm run server) or check your connection.'
          : fetchErr.message || 'Failed to create order'
        setApiError(msg)
        console.error('Create order fetch failed:', fetchErr)
        return
      }

      if (!orderRes.success) {
        setApiError(orderRes.message || 'Failed to create order')
        return
      }

      // Mock keys — fallback to old QR modal for local dev without Razorpay setup
      if (orderRes.mock) {
        setIsModalOpen(true)
        return
      }

      const ok = await loadRazorpayScript()
      if (!ok) {
        setApiError('Failed to load Razorpay. Check your connection and disable ad-blockers, then try again.')
        return
      }

      if (!window.Razorpay) {
        setApiError('Razorpay failed to initialise. Please refresh and try again.')
        return
      }

      const options = {
        key: orderRes.key,
        amount: orderRes.amount,
        currency: orderRes.currency || 'INR',
        name: 'Christian Hospital Bissamcuttack',
        description: 'Donation',
        image: '/photos/logo/logo.png',
        order_id: orderRes.orderId,
        prefill: { name: fullName, email, contact: `${countryCode}${phone}` },
        theme: { color: '#009E5A' },
        handler: async (resp) => {
          try {
            const verifyRes = await fetch(`${API_URL}/api/donate/verify`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: resp.razorpay_order_id,
                razorpay_payment_id: resp.razorpay_payment_id,
                razorpay_signature: resp.razorpay_signature,
                fullName, email, phone, countryCode, amount: numeric,
              }),
            }).then(async (r) => {
              const t = await r.text()
              try { return t ? JSON.parse(t) : {} } catch { return { success: false, message: t } }
            })

            if (verifyRes.success) {
              handlePaymentSuccess()
              setApiError('')
              alert(verifyRes.message || 'Thank you for your donation! A receipt will be emailed shortly.')
            } else {
              setApiError(verifyRes.message || 'Payment verification failed. Contact chb.orissa@gmail.com')
            }
          } catch (verErr) {
            console.error('Verify failed:', verErr)
            setApiError('Verification failed. Please contact chb.orissa@gmail.com with your payment ID.')
          }
        },
        modal: { ondismiss: () => setIsProcessing(false) },
      }

      new window.Razorpay(options).open()
    } catch (err) {
      console.error(err)
      setApiError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  const handlePaymentSuccess = () => {
    setIsModalOpen(false)
    setAmount('')
    setFullName('')
    setEmail('')
    setPhone('')
    setErrors({})
    setSubmitted(false)
    setApiError('')
    setIsProcessing(false)
  }

  const showError = (name) => {
    return (submitted || errors[name]) && errors[name]
  }

  const hasError = (name) => {
    return (submitted || errors[name]) && !!errors[name]
  }

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
              <h2 className="donate-terms-heading">Terms & Conditions:</h2>
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
                  <div className={`donate-input-wrap ${hasError('amount') ? 'has-error' : ''}`}>
                    <span className="donate-input-prefix">₹</span>
                    <input
                      id="dk-amount"
                      type="number"
                      min="1"
                      placeholder="Enter Amount"
                      value={amount}
                      onChange={(e) => handleChange('amount', e.target.value)}
                    />
                  </div>
                  {showError('amount') && <span className="donate-error">{errors.amount}</span>}
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
                    className={hasError('fullName') ? 'has-error' : ''}
                    value={fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                  />
                  {showError('fullName') && <span className="donate-error">{errors.fullName}</span>}
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
                    className={hasError('email') ? 'has-error' : ''}
                    value={email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                  {showError('email') && <span className="donate-error">{errors.email}</span>}
                </div>
              </div>

              {/* Phone */}
              <div className="donate-row">
                <label className="donate-label" htmlFor="dk-phone">
                  Phone <span className="donate-required">*</span>
                </label>
                <div className="donate-input-area">
                  <div className={`donate-input-wrap donate-input-wrap-phone ${hasError('phone') ? 'has-error' : ''}`}>
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
                      onChange={(e) => handleChange('phone', e.target.value)}
                    />
                  </div>
                  {showError('phone') && <span className="donate-error">{errors.phone}</span>}
                </div>
              </div>

              {apiError && (
                <div role="alert" style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#991b1b', padding: '10px 12px', borderRadius: '6px', fontSize: '13px', lineHeight: '1.5', marginBottom: '16px' }}>
                  {apiError}
                </div>
              )}

              {/* Footer */}
              <div className="donate-card-footer">
                <div className="donate-pay-methods">
                  <span className="donate-method-chip">UPI</span>
                  <i className="fab fa-cc-visa donate-brand-icon" aria-label="Visa" />
                  <i className="fab fa-cc-mastercard donate-brand-icon" aria-label="Mastercard" />
                  <i className="fas fa-credit-card donate-brand-icon" aria-label="RuPay" />
                </div>
                <button className="donate-pay-btn" onClick={handlePayClick} disabled={isProcessing}>
                  {payLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        amount={numeric}
        phone={phone}
        countryCode={countryCode}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </div>
  )
}

export default DonatePage