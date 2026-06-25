import React, { useEffect, useRef } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Margaret Johnson',
    role: 'Patient',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
    text: 'The care I received was nothing short of extraordinary. The doctors took time to explain everything, and the nurses were incredibly kind.',
    rating: 5,
  },
  {
    name: 'Robert Nwosu',
    role: "Patient's Family Member",
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    text: 'When my father needed emergency surgery, the team not only saved his life but also supported our family with prayers and encouragement.',
    rating: 5,
  },
  {
    name: 'Amara Okafor',
    role: 'New Mother',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    text: "I gave birth at Christian Hospital's maternity wing — the most beautiful experience. The midwives and doctors were supportive every step.",
    rating: 5,
  },
  {
    name: 'Thomas Adebayo',
    role: 'Patient',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    text: 'After years of chronic back pain, the orthopedic team performed a life-changing surgery. I am now pain-free and enjoying time with my grandchildren.',
    rating: 5,
  },
  {
    name: 'Ameya Kamat',
    role: 'TAS Manager (Volunteer)',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    text: 'Working with CHB-BCK was mind boggling. The work the hospital staff is doing is a true service to humanity — providing the best possible care despite challenging conditions.',
    rating: 5,
  },
  {
    name: 'Dr. Shivapratap',
    role: 'Visiting Surgeon',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80',
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
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">
            The greatest reward is the trust our patients place in us.
            Here are some of their stories.
          </p>
        </div>

        {/* Marquee wrapper */}
        <div className="marquee-wrapper animate-in" style={{ transitionDelay: '0.2s' }}>
          <div className="marquee-track">
            {/* First set */}
            <div className="marquee-row">
              {testimonials.map((t, i) => (
                <div className="marquee-card" key={`a-${i}`}>
                  <div className="marquee-stars">
                    {[...Array(t.rating)].map((_, si) => (
                      <i key={si} className="fas fa-star" />
                    ))}
                  </div>
                  <p className="marquee-text">"{t.text}"</p>
                  <div className="marquee-author">
                    <img src={t.img} alt={t.name} className="marquee-avatar" />
                    <div>
                      <h4 className="marquee-name">{t.name}</h4>
                      <span className="marquee-role">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="marquee-row">
              {testimonials.map((t, i) => (
                <div className="marquee-card" key={`b-${i}`}>
                  <div className="marquee-stars">
                    {[...Array(t.rating)].map((_, si) => (
                      <i key={si} className="fas fa-star" />
                    ))}
                  </div>
                  <p className="marquee-text">"{t.text}"</p>
                  <div className="marquee-author">
                    <img src={t.img} alt={t.name} className="marquee-avatar" />
                    <div>
                      <h4 className="marquee-name">{t.name}</h4>
                      <span className="marquee-role">{t.role}</span>
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
