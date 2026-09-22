import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './MissionVision.css'

const pillars = [
  { icon: 'fa-heart', text: 'To Share the pain of people' },
  { icon: 'fa-hand-holding-heart', text: 'To Respond and serve with love' },
  { icon: 'fa-leaf', text: 'To Be the change we want to see' },
]

const focuses = [
  { icon: 'fa-stethoscope', title: 'Health Care', desc: 'High quality & low cost — especially for the poor and marginalised.' },
  { icon: 'fa-graduation-cap', title: 'Training in Health', desc: 'Situational excellence with deep social relevance.' },
  { icon: 'fa-book-open', title: 'Education for Children', desc: 'Appropriate, excellent — that transforms and empowers.' },
]

function MissionVision() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.mv-in').forEach((node, i) => {
            node.style.transitionDelay = `${i * 0.12}s`
            node.classList.add('mv-show')
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="mv-hero-section" ref={sectionRef} aria-label="Mission and Vision">
      <div className="mv-hero">
        <img
          className="mv-hero-bg-img"
          src="/photos/hospital/image.jpeg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <div className="mv-hero-overlay" aria-hidden="true" />

        <div className="mv-hero-card mv-in">
          <span className="mv-card-badge">Mission &amp; Vision</span>

          <h2 className="mv-card-title">
            <span className="mv-title-dark">We are a faith based</span>
            <br />
            <span className="mv-title-green">community, called to</span>
          </h2>

          <ul className="mv-pillars-list" aria-label="Our calling">
            {pillars.map((p) => (
              <li key={p.text} className="mv-pillar-item">
                <span className="mv-pillar-icon" aria-hidden="true">
                  <i className={`fas ${p.icon}`} />
                </span>
                <span className="mv-pillar-text">{p.text}</span>
              </li>
            ))}
          </ul>

          <div className="mv-focus-block">
            <div className="mv-focus-label">Our Focus</div>
            <div className="mv-focus-grid">
              {focuses.map((f) => (
                <div key={f.title} className="mv-focus-item">
                  <div className="mv-focus-icon" aria-hidden="true">
                    <i className={`fas ${f.icon}`} />
                  </div>
                  <h3 className="mv-focus-title">{f.title}</h3>
                  <p className="mv-focus-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <Link to="/about" className="mv-card-cta" onClick={() => window.scrollTo(0, 0)}>
            <span>Discover Our Story</span>
            <span className="mv-cta-icon" aria-hidden="true">
              <span className="mv-cta-arrow">→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
