import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Header.css'

const navLinks = [
  { to: '/', label: 'Home', hash: 'home' },
  { to: '/services', label: 'Services' },
  { to: '/support-services', label: 'Support' },
  { to: '/training', label: 'Training' },
  { to: '/schools', label: 'Schools' },
  { to: '/about', label: 'About' },
  { to: '/', label: 'Testimonials', hash: 'testimonials' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isSchoolsPage = location.pathname === '/schools'
  const isServicesPage = location.pathname === '/services'
  const isSupportPage = location.pathname === '/support-services'
  const isAboutPage = location.pathname === '/about'
  const isTrainingPage = location.pathname === '/training'
  const isContactPage = location.pathname === '/contact'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  const handleNavClick = (e, link) => {
    setIsMobileOpen(false)

    if (link.to === '/schools') {
      navigate('/schools')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (link.to === '/services') {
      navigate('/services')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (link.to === '/support-services') {
      navigate('/support-services')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (link.to === '/about') {
      navigate('/about')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (link.to === '/training') {
      navigate('/training')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (link.to === '/contact') {
      navigate('/contact')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Hash link — scroll to section
    if (link.hash) {
      if (isSchoolsPage || isServicesPage || isSupportPage || isAboutPage || isTrainingPage || isContactPage) {
        // Navigate home first, hash-scrolling happens in HomePage useEffect
        navigate('/#' + link.hash)
      } else {
        e.preventDefault()
        window.history.replaceState(null, '', `/#${link.hash}`)
        const target = document.getElementById(link.hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  const handleLogoClick = (e) => {
    if (!isSchoolsPage && !isServicesPage && !isSupportPage && !isAboutPage && !isTrainingPage && !isContactPage) {
      e.preventDefault()
      setIsMobileOpen(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className={`header${isScrolled ? ' scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="header-logo" onClick={handleLogoClick}>
          <div className="logo-icon">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="6" fill="currentColor"/>
              <path d="M16 6L16 26M6 16L26 16" stroke="white" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-name">Christian Hospital</span>
            <span className="logo-location">Bissumcuttack</span>
          </div>
        </Link>

        <nav className={`header-nav${isMobileOpen ? ' open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.to === '/schools' ? (
                  <Link
                    to={link.to}
                    className="nav-link"
                    onClick={(e) => handleNavClick(e, link)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    to={link.hash ? `/#${link.hash}` : link.to}
                    className="nav-link"
                    onClick={(e) => handleNavClick(e, link)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="btn btn-primary nav-cta"
            onClick={(e) => handleNavClick(e, { to: '/contact' })}
          >
            +91-8118060163
          </Link>
        </nav>

        <button
          className={`hamburger${isMobileOpen ? ' active' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isMobileOpen && (
        <div className="overlay" onClick={() => setIsMobileOpen(false)} />
      )}
    </header>
  )
}

export default Header
