import React, { useEffect, useRef } from 'react'
import './About.css'

function About() {
  const sectionRef = useRef(null)

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

  const values = [
    {
      icon: 'fa-heart',
      title: 'Compassionate Care',
      desc: 'Every patient is treated with dignity, respect, and the love that reflects our Christian heritage.',
    },
    {
      icon: 'fa-star',
      title: 'Medical Excellence',
      desc: 'We combine cutting-edge medical technology with evidence-based practices for superior outcomes.',
    },
    {
      icon: 'fa-hand-holding-heart',
      title: 'Faith-Based Healing',
      desc: 'Spiritual care is integrated into our treatment plans, offering hope and comfort to all.',
    },
    {
      icon: 'fa-users',
      title: 'Community Focused',
      desc: 'We are dedicated to improving the health and wellbeing of our entire community.',
    },
  ]

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper animate-in">
            <div className="about-image">
              <img
                src="/photos/hospital/image1.jpg"
                alt="Christian Hospital building"
                loading="lazy"
              />
            </div>
            <div className="about-experience">
              <span className="exp-number">72+</span>
              <span className="exp-text">Years of<br />Excellence</span>
            </div>
          </div>

          <div className="about-content animate-in" style={{ transitionDelay: '0.2s' }}>
            <span className="section-tag">About Us</span>
            <h2 className="section-title">
              A Legacy of Healing &amp; Compassion
            </h2>
            <p className="about-text">
              The road seems to stretch endlessly in the midst of the forested hills and winding
              mountain streams. For those who have travelled less along this road, a surprise awaits.
              A 200 bedded multidisciplinary hospital that seeks to serve this vulnerable region
              through Cost Effective Health Care, Holistic Training in Health and Quality Education,
              as an expression of love of God as shown in Jesus Christ, irrespective of caste, creed,
              community or gender.
            </p>

            <div className="about-values">
              {values.map((v, i) => (
                <div key={i} className="value-card animate-in" style={{ transitionDelay: `${i * 0.12 + 0.3}s` }}>
                  <div className="value-icon">
                    <i className={`fas ${v.icon}`} />
                  </div>
                  <div>
                    <h4 className="value-title">{v.title}</h4>
                    <p className="value-desc">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#services" className="btn btn-primary about-cta">
              Explore Our Services
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
