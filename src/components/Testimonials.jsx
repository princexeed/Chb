import React, { useEffect, useRef } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Sunita Pradhan',
    role: 'Patient',
    icon: 'fa-user',
    text: 'The care I received was nothing short of extraordinary. The doctors took time to explain everything, and the nurses were incredibly kind.',
    rating: 5,
  },
  {
    name: 'Ramesh Majhi',
    role: "Patient's Family Member",
    icon: 'fa-users',
    text: 'When my father needed emergency surgery, the team not only saved his life but also supported our family with prayers and encouragement.',
    rating: 5,
  },
  {
    name: 'Anjali Behera',
    role: 'New Mother',
    icon: 'fa-baby',
    text: "I gave birth at Christian Hospital's maternity wing — the most beautiful experience. The midwives and doctors were supportive every step.",
    rating: 5,
  },
  {
    name: 'Kavita Sharma',
    role: 'TAS Manager (Volunteer)',
    icon: 'fa-hand-holding-heart',
    text: 'Working with CHB-BCK was mind boggling. The work the hospital staff is doing is a true service to humanity — providing the best possible care despite challenging conditions.',
    rating: 5,
  },
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Visiting Surgeon',
    icon: 'fa-user-doctor',
    text: 'My stay at CHB was absolutely life changing. Witnessing complex surgeries with outcomes comparable to the western world, with limited resources, was incredible.',
    rating: 5,
  },
]

function Testimonials() {
  const sectionRef = useRef(null)

  // Intersection observer for entrance
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
    <section id="testimonials" className="testimonials section section-alt" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-in">
          <span className="section-tag">Testimonials</span>
        </div>

        {/* Marquee wrapper */}
        <div className="marquee-wrapper animate-in" style={{ transitionDelay: '0.2s' }}>
          <div className="marquee-track">
            {/* First set */}
            <div className="marquee-row">
              {testimonials.map((t, i) => (
                <div className="marquee-card" key={`a-${i}`}>
                  <div className="marquee-heart">
                    <i className="fas fa-heart" />
                  </div>
                  <p className="marquee-text">"{t.text}"</p>
                  <div className="marquee-author">
                    <div className="marquee-avatar-icon" aria-hidden="true">
                      <i className={`fas ${t.icon}`} />
                    </div>
                    <div>
                      <h4 className="marquee-name">{t.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="marquee-row">
              {testimonials.map((t, i) => (
                <div className="marquee-card" key={`b-${i}`}>
                  <div className="marquee-heart">
                    <i className="fas fa-heart" />
                  </div>
                  <p className="marquee-text">"{t.text}"</p>
                  <div className="marquee-author">
                    <div className="marquee-avatar-icon" aria-hidden="true">
                      <i className={`fas ${t.icon}`} />
                    </div>
                    <div>
                      <h4 className="marquee-name">{t.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
