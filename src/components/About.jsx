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

  return (
    <section id="about" className="about-split section" ref={sectionRef}>
      <div className="container">
        <div className="about-split-inner animate-in">
          {/* Photo */}
          <div className="about-split-image">
            <img
              src="/photos/hospital/image.jpeg"
              alt="Christian Hospital Bissamcuttack"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="about-split-text">
            <span className="about-kicker">Our History</span>
            <h2 className="about-split-title">A Legacy of Healing &amp; Compassion</h2>
            <p className="about-split-desc">
              The road seems to stretch endlessly in the midst of the forested hills and winding
              mountain streams. For those who have travelled less along this road, a surprise
              awaits. A 200 bedded multidisciplinary hospital that seeks to serve this vulnerable
              region through Cost Effective Health Care, Holistic Training in Health and Quality
              Education, as an expression of love of God as shown in Jesus Christ, irrespective of
              caste, creed, community or gender.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
