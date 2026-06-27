import React, { useEffect, useRef } from 'react'
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
          el.querySelectorAll('.mv-in').forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.12}s`
            el.classList.add('mv-show')
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
    <section className="mv-section" ref={sectionRef}>
      {/* Image background with overlay */}
      <div className="mv-bg">
        <div className="mv-bg-img" />
        <div className="mv-bg-overlay" />
      </div>

      <div className="container">
        {/* Statement */}
        <div className="mv-statement mv-in">
          <span className="mv-badge">Mission &amp; Vision</span>
          <h2 className="mv-statement-title">
            We are a faith based<br />
            <span className="mv-em">community, called to</span>
          </h2>
        </div>

        {/* Pillars */}
        <div className="mv-pillars mv-in">
          {pillars.map((p, i) => (
            <div key={i} className="mv-pillar">
              <i className={`fas ${p.icon}`} />
              <span>{p.text}</span>
            </div>
          ))}
        </div>

        {/* Focus */}
        <div className="mv-bottom mv-in">
          <div className="mv-focus-label">Our Focus</div>
          <div className="mv-focus-grid">
            {focuses.map((f, i) => (
              <div key={i} className="mv-focus-card">
                <div className="mv-focus-icon">
                  <i className={`fas ${f.icon}`} />
                </div>
                <h3 className="mv-focus-title">{f.title}</h3>
                <p className="mv-focus-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
