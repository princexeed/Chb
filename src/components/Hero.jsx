import React, { useRef, useEffect } from 'react'
import './Hero.css'

function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const playVideo = async () => {
      try {
        await video.play()
      } catch {
        // Mobile browsers often block autoplay — silently handled
      }
    }

    const timer = setTimeout(playVideo, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-video-wrapper">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/photos/hospital/image.jpeg"
          className="hero-video"
        >
          <source src="/videos/chb2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-badge">Welcome to Christian Hospital Bissumcuttack</span>
        <h1 className="hero-title">
          Your Health Is Our
          <span className="hero-highlight"> Sacred Mission</span>
        </h1>
        <p className="hero-subtitle">
          Providing compassionate, world-class healthcare grounded in faith,
          excellence, and a commitment to healing the whole person —
          body, mind, and spirit.
        </p>
        <div className="hero-actions">
          <a href="#services" className="btn btn-primary">
            Our Services
            <i className="fas fa-arrow-right" />
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">72+</span>
            <span className="stat-label">Years of Service</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">150K+</span>
            <span className="stat-label">Patients Per Year</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">200+</span>
            <span className="stat-label">Beds</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
