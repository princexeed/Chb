import React, { useEffect } from 'react'
import './SchoolDetail.css'

function SchoolDetail({ school, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!school) return null

  return (
    <div className="school-overlay" onClick={onClose}>
      <div className="school-modal" onClick={(e) => e.stopPropagation()}>
        <button className="school-modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fas fa-times" />
        </button>

        {/* Hero */}
        <div className="school-modal-hero">
          <img src={school.image} alt={school.name} />
          <div className="school-modal-hero-overlay" />
          <div className="school-modal-hero-content">
            <div className="school-modal-hero-icon">
              <i className={`fas ${school.icon}`} />
            </div>
            <span className="school-modal-badge">{school.short}</span>
            <h2 className="school-modal-hero-title">{school.name}</h2>
            <p className="school-modal-hero-tagline">{school.tagline}</p>
          </div>
        </div>

        <div className="school-modal-body">
          {/* Stats */}
          <div className="school-modal-stats">
            <div className="school-modal-stat">
              <span className="school-modal-stat-number">{school.stats.enrolled}</span>
              <span className="school-modal-stat-label">Students Enrolled</span>
            </div>
            <div className="school-modal-stat">
              <span className="school-modal-stat-number">{school.stats.teachers}</span>
              <span className="school-modal-stat-label">Qualified Teachers</span>
            </div>
            <div className="school-modal-stat">
              <span className="school-modal-stat-number">{school.stats.ratio}</span>
              <span className="school-modal-stat-label">Student-Teacher Ratio</span>
            </div>
          </div>

          {/* Grade */}
          <div className="school-modal-grade-bar">
            <i className="fas fa-graduation-cap" />
            <span>{school.grade}</span>
          </div>

          {/* Overview */}
          <div className="school-modal-section">
            <h3 className="school-modal-section-title">About {school.short}</h3>
            <p className="school-modal-text">{school.longDesc}</p>
          </div>

          {/* Gallery */}
          <div className="school-modal-gallery">
            {school.images.map((img, i) => (
              <div key={i} className="school-modal-gallery-img">
                <img src={img} alt={`${school.name} - Image ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="school-modal-section">
            <h3 className="school-modal-section-title">What We Offer</h3>
            <div className="school-modal-features">
              {school.features.map((feature, i) => (
                <div key={i} className="school-modal-feature">
                  <i className="fas fa-check-circle" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default SchoolDetail
