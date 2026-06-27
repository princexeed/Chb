import React, { useEffect, useRef, useState } from 'react'
import './About.css'

const slides = [
  {
    image: '/photos/hospital/image.jpeg',
    title: 'A Legacy of Healing & Compassion',
    text: 'The road seems to stretch endlessly in the midst of the forested hills and winding mountain streams. For those who have travelled less along this road, a surprise awaits. A 200 bedded multidisciplinary hospital that seeks to serve this vulnerable region through Cost Effective Health Care, Holistic Training in Health and Quality Education, as an expression of love of God as shown in Jesus Christ, irrespective of caste, creed, community or gender.',
    tag: 'Our History',
  },
  {
    image: '/photos/community/image.jpg',
    title: 'Serving the Community',
    text: 'We are dedicated to improving the health and wellbeing of our entire community. Through outreach programs, health education, and accessible care, we bring medical services to those who need them most — especially in the rural and tribal areas surrounding Bissamcuttack.',
    tag: 'Community Outreach',
  },
  {
    image: '/photos/mitra/mitra1.jpg',
    title: 'MITRA — Reaching the Unreached',
    text: 'MITRA serves 12,700 people across 53 tribal villages through mobile clinics, health education, a residential school for underprivileged children, and community empowerment initiatives. Every life touched is a step toward a healthier, more equitable tomorrow.',
    tag: 'Our MITRA Program',
  },
  {
    image: '/photos/clg/image1.jpg',
    title: 'Training the Next Generation',
    text: 'As a teaching institution, Christian Hospital Bissumcuttack is committed to training healthcare professionals who will carry forward our mission of compassionate, faith-based care. Our nursing and paramedical programs equip students with both clinical excellence and a heart for service.',
    tag: 'Education & Training',
  },
]

function About() {
  const sectionRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFading, setIsFading] = useState(false)

  // Auto-rotate slides every 5 seconds with slow fade
  useEffect(() => {
    const id = setInterval(() => {
      setIsFading(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsFading(false)
      }, 600)
    }, 5000)

    return () => clearInterval(id)
  }, [])

  // Intersection observer for initial entrance
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

  const slide = slides[currentSlide]

  return (
    <section id="about" className="bento-about section" ref={sectionRef}>
      <div className="container">
        {/* Section header */}
        <div className="section-header animate-in">
          <span className="section-tag">About Us</span>
          <h2 className="section-title">Discover Christian Hospital</h2>
          <p className="section-subtitle">
            A legacy of faith, healing, and service spanning over seven decades
          </p>
        </div>

        {/* Bento card with slow fade transition */}
        <div className="bento-card bento-main animate-in">
          <div className="bento-slide">
            {/* Image */}
            <div className="bento-image-outer">
              <div className={`bento-image-frame ${isFading ? 'fade-out' : ''}`}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text */}
            <div className={`bento-text ${isFading ? 'fade-out' : ''}`}>
              <span className="bento-tag">{slide.tag}</span>
              <h3 className="bento-title">{slide.title}</h3>
              <p className="bento-desc">{slide.text}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
