import React, { useEffect, useRef, useState } from 'react'
import './PaymentModal.css'

const METHOD_ICONS = {
  gpay: <svg viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg"><path fill="#4285F4" d="M23.44 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h6.42a5.49 5.49 0 0 1-2.38 3.61v3h3.86c2.26-2.09 3.54-5.17 3.54-8.62z"/><path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.86-3c-1.08.72-2.46 1.16-4.08 1.16-3.14 0-5.8-2.12-6.75-4.97H1.29v3.09A11.99 11.99 0 0 0 12 24z"/><path fill="#FBBC05" d="M5.25 14.28a7.2 7.2 0 0 1 0-4.56V6.63H1.29a12 12 0 0 0 0 10.74l3.96-3.09z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0A11.99 11.99 0 0 0 1.29 6.63l3.96 3.09C6.2 6.87 8.86 4.75 12 4.75z"/><text x="27" y="17.5" font-family="Arial, sans-serif" font-size="14" font-weight="500" fill="#5f6368">Pay</text></svg>,
  phonepe: <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg"><circle cx="16" cy="16" r="16" fill="#5F259F"/><text x="16" y="21" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#ffffff">पे</text></svg>,
  pop: <svg viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg"><rect width="48" height="24" rx="6" fill="#ffffff" stroke="#e2e8f0"/><text x="24" y="16.5" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="800" fill="#E23744">pop</text></svg>,
  paytm: <svg viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg"><rect width="48" height="24" rx="6" fill="#ffffff" stroke="#e2e8f0"/><text x="24" y="16.5" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold"><tspan fill="#00BAF2">pay</tspan><tspan fill="#002970">tm</tspan></text></svg>,
  visa: <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg"><rect width="160" height="40" rx="4" fill="#1A1F71"/><text x="80" y="28" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="white">VISA</text></svg>,
  mastercard: <svg viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg"><circle cx="13" cy="12" r="9" fill="#EB001B"/><circle cx="23" cy="12" r="9" fill="#F79E1B"/><path fill="#FF5F00" d="M18 5.3a9 9 0 0 1 0 13.4 9 9 0 0 1 0-13.4z"/></svg>,
  rupay: <svg viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg"><rect width="48" height="24" rx="6" fill="#ffffff" stroke="#e2e8f0"/><text x="24" y="16.5" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold"><tspan fill="#F7941D">Ru</tspan><tspan fill="#046A38">Pay</tspan></text></svg>,
  maestro: <svg viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg"><circle cx="13" cy="12" r="9" fill="#0099DF"/><circle cx="23" cy="12" r="9" fill="#ED0006"/><path fill="#6C6BBD" d="M18 5.3a9 9 0 0 1 0 13.4 9 9 0 0 1 0-13.4z"/></svg>,
  sbi: <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg"><circle cx="16" cy="16" r="15.5" fill="#1B4E9B" stroke="white" strokeWidth="1"/><text x="16" y="18.5" text-anchor="middle" fontFamily="Poppins, Inter, sans-serif" fontSize="8.5" fontWeight="800" fill="white" letterSpacing="0.3">SBI</text></svg>,
  icici: <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg"><circle cx="16" cy="16" r="15.5" fill="#F3650A" stroke="white" strokeWidth="1"/><text x="16" y="18.2" text-anchor="middle" fontFamily="Poppins, Inter, sans-serif" fontSize="7" fontWeight="800" fill="white" letterSpacing="0.2">ICICI</text></svg>,
  axis: <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg"><circle cx="16" cy="16" r="15.5" fill="#971526" stroke="white" strokeWidth="1"/><text x="16" y="18.2" text-anchor="middle" fontFamily="Poppins, Inter, sans-serif" fontSize="7.5" fontWeight="800" fill="white" letterSpacing="0.4">AXIS</text></svg>,
  hdfc: <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg"><circle cx="16" cy="16" r="15.5" fill="#001A4D" stroke="white" strokeWidth="1"/><text x="16" y="18.2" text-anchor="middle" fontFamily="Poppins, Inter, sans-serif" fontSize="7.5" fontWeight="800" fill="white" letterSpacing="0.3">HDFC</text></svg>,
  amazonpay: <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg"><circle cx="16" cy="16" r="16" fill="#232F3E"/><text x="16" y="19" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#ffffff">a</text><path d="M9 21.5c4.5 2.8 9.5 2.8 14 0" stroke="#FF9900" stroke-width="2" stroke-linecap="round" fill="none"/></svg>,
  mobikwik: <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg"><circle cx="16" cy="16" r="16" fill="#00B8D4"/><text x="16" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="white">M</text></svg>,
  airtel: <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg"><circle cx="16" cy="16" r="16" fill="#EC0000"/><text x="16" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="white">A</text></svg>,
  paylater: <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg"><circle cx="16" cy="16" r="16" fill="#7C3AED"/><circle cx="16" cy="16" r="7.5" stroke="white" strokeWidth="1.7" fill="none"/><path d="M16 12.2V16l3.2 1.9" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>,
  cred: <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg"><rect x="2" y="2" width="28" height="28" rx="8" fill="#000000"/><text x="16" y="21.5" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">C</text></svg>,
  bhim: <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg"><circle cx="16" cy="16" r="16" fill="#00A859"/><text x="16" y="22" text-anchor="middle" font-size="8" font-weight="bold" fill="white">BHIM</text></svg>,
}

function PaymentModal({ isOpen, onClose, amount, phone = '', countryCode = '+91', onPaymentSuccess }) {
  const modalRef = useRef(null)
  const [activeMethod, setActiveMethod] = useState('upi')
  const [timer, setTimer] = useState(713)
  const [qrCode, setQrCode] = useState(null)

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose()
  }

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    const canvas = document.createElement('canvas')
    canvas.width = 160
    canvas.height = 160
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, 160, 160)
    ctx.fillStyle = '#000000'
    const size = 160 / 25
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 25; j++) {
        if (Math.random() > 0.5) {
          ctx.fillRect(i * size, j * size, size, size)
        }
      }
    }
    setQrCode(canvas.toDataURL())
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const interval = setInterval(() => {
      setTimer(t => t > 0 ? t - 1 : 0)
    }, 1000)
    return () => clearInterval(interval)
  }, [isOpen])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  if (!isOpen) return null

  const formatAmount = (amt) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(amt)
  }

  const minutes = Math.floor(timer / 60).toString().padStart(2, '0')
  const seconds = (timer % 60).toString().padStart(2, '0')

  const phoneDigits = phone.replace(/\D/g, '')
  const phoneDisplay = phoneDigits
    ? (countryCode === '+91' && phoneDigits.length === 10
        ? `+91 ${phoneDigits.slice(0, 5)} ${phoneDigits.slice(5)}`
        : `${countryCode} ${phoneDigits}`)
    : '+91 XXXXX XXXXX'

  const paymentMethods = [
    { id: 'upi', name: 'UPI', icons: ['gpay', 'phonepe', 'pop', 'paytm'] },
    { id: 'cards', name: 'Cards', icons: ['visa', 'mastercard', 'rupay', 'maestro'], badge: 'Upto 1.5% savings...' },
    { id: 'netbanking', name: 'Netbanking', icons: ['sbi', 'icici', 'axis', 'hdfc'] },
    { id: 'wallet', name: 'Wallet', icons: ['amazonpay', 'phonepe', 'mobikwik', 'airtel'] },
    { id: 'paylater', name: 'Pay Later', icons: ['paylater'] }
  ]

  const CARD_NETWORK_ICONS = ['visa', 'mastercard', 'rupay', 'maestro']
  const WIDE_ICONS = ['gpay', 'phonepe', 'pop', 'paytm']
  const iconVariant = (icon) =>
    CARD_NETWORK_ICONS.includes(icon) ? 'card-net'
      : WIDE_ICONS.includes(icon) ? 'wide'
        : 'circle'

  const qrApps = [
    { id: 'pop', label: 'pop', className: 'qr-badge-pop' },
    { id: 'gpay', label: 'GPay', className: 'qr-badge-gpay' },
    { id: 'cred', label: 'CRED', className: 'qr-badge-cred' },
    { id: 'phonepe', label: 'पे', className: 'qr-badge-phonepe' },
    { id: 'amazonpay', label: 'pay', className: 'qr-badge-amazonpay' },
    { id: 'bhim', label: 'BHIM', className: 'qr-badge-bhim' }
  ]

  return (
    <div className="payment-modal-backdrop" onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-labelledby="payment-modal-title">
      <div className="payment-modal" ref={modalRef}>
        {/* LEFT SIDEBAR */}
        <div className="payment-sidebar">
          <div className="sidebar-header">
            <div className="sidebar-logo">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="white"/>
                <path d="M8 16L14 22L24 10" stroke="#1a73e8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="sidebar-org-name">Christian Hospital Bissamcuttack</span>
          </div>

          <div className="sidebar-illustrations" aria-hidden="true">
            <div className="illustration-card illustration-card-1" />
            <div className="illustration-card illustration-card-2" />
            <div className="illustration-coin" />
          </div>

          <div className="price-summary-card">
            <span className="price-label">Price Summary</span>
            <span className="price-amount">{formatAmount(amount)}</span>
          </div>

          <div className="user-details-row">
            <div className="user-details-info">
              <svg className="user-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span className="user-details-text">Using as {phoneDisplay}</span>
            </div>
            <svg className="user-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>

          <div className="promo-box">
            <div className="promo-left">
              <span className="promo-badge">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="19" y1="5" x2="5" y2="19"/>
                  <circle cx="6.5" cy="6.5" r="2.5"/>
                  <circle cx="17.5" cy="17.5" r="2.5"/>
                </svg>
              </span>
              <span className="promo-text">Offers on Card and Emi</span>
            </div>
            <svg className="promo-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>

          <div className="sidebar-footer">
            <span className="secured-text">Secured by</span>
            <span className="razorpay-watermark">Razorpay</span>
            <svg className="razorpay-mark" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="6" fill="#ffffff"/>
              <path d="M13.5 4L7 13h4l-1.5 7L17 11h-4l.5-7z" fill="#467CE8"/>
            </svg>
          </div>
        </div>

        {/* RIGHT MAIN CONTENT */}
        <div className="payment-main">
          <div className="main-header">
            <div className="header-left" />
            <h2 id="payment-modal-title" className="main-title">Payment Options</h2>
            <div className="header-right">
              <button className="menu-btn" aria-label="More options">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="1"/>
                  <circle cx="19" cy="12" r="1"/>
                  <circle cx="5" cy="12" r="1"/>
                </svg>
              </button>
              <button className="close-btn" onClick={onClose} aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="main-content">
            {/* PAYMENT METHOD LIST */}
            <div className="method-list">
              {paymentMethods.map(method => (
                <button
                  key={method.id}
                  className={`method-item ${activeMethod === method.id ? 'active' : ''}`}
                  onClick={() => setActiveMethod(method.id)}
                >
                  <div className="method-content">
                    <span className="method-name">{method.name}</span>
                    {method.badge && <span className="savings-badge">{method.badge}</span>}
                  </div>
                  <div className="method-icons">
                    {method.icons.map(icon => (
                      <span key={icon} className={`payment-icon-wrapper ${iconVariant(icon)}`}>
                        {METHOD_ICONS[icon]}
                      </span>
                    ))}
                    {method.id === 'paylater' && (
                      <svg className="paylater-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* ACTIVE PAYMENT VIEW */}
            <div className="active-payment-view">
              {activeMethod === 'upi' && (
                <>
                  <div className="qr-header">
                    <span className="qr-title">UPI QR</span>
                    <span className="qr-timer">⏱ {minutes}:{seconds}</span>
                  </div>
                  <div className="qr-box">
                    {qrCode ? (
                      <img src={qrCode} alt="UPI QR Code" className="qr-image" />
                    ) : (
                      <div className="qr-placeholder">Loading QR...</div>
                    )}
                  </div>
                  <p className="qr-subtitle">Scan the QR using any UPI App</p>
                  <div className="qr-apps">
                    {qrApps.map(app => (
                      <span key={app.id} className={`qr-app-badge ${app.className}`}>
                        {app.label}
                      </span>
                    ))}
                  </div>
                </>
              )}
              {activeMethod === 'cards' && <div className="coming-soon"><span className="soon-icon"><i className="fas fa-tools" /></span><span className="soon-title">Under Construction</span><span className="soon-sub">Secure card payments are being crafted.</span></div>}
              {activeMethod === 'netbanking' && <div className="coming-soon"><span className="soon-icon"><i className="fas fa-university" /></span><span className="soon-title">Under Construction</span><span className="soon-sub">Netbanking options coming soon.</span></div>}
              {activeMethod === 'wallet' && <div className="coming-soon"><span className="soon-icon"><i className="fas fa-wallet" /></span><span className="soon-title">Under Construction</span><span className="soon-sub">Wallet payments are on the way.</span></div>}
              {activeMethod === 'paylater' && <div className="coming-soon"><span className="soon-icon"><i className="fas fa-clock" /></span><span className="soon-title">Under Construction</span><span className="soon-sub">Pay Later options are being crafted for you.</span></div>}
            </div>
          </div>

          <div className="main-footer">
            <p>By proceeding, I agree to <a href="https://razorpay.com/privacy/" target="_blank" rel="noreferrer">Razorpay's Privacy Notice</a> • <a href="#" className="edit-prefs">Edit Preferences</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentModal