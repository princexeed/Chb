import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-welcome-title">Christian Hospital Bissamcuttack</h1>
        <span className="hero-welcome-underline" />
        <p className="hero-welcome-text">
          Serving the tribal heartlands of southern and western Odisha since 1954 through
          cost-effective healthcare, holistic training, and quality education — as an
          expression of the love of God shown in Jesus Christ.
        </p>
      </div>
    </section>
  )
}

export default Hero