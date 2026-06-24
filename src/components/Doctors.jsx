import React, { useEffect, useRef } from 'react'
import './Doctors.css'

const doctors = [
  {
    name: 'Dr. Sarah Mitchell',
    specialty: 'Chief of Cardiology',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    desc: 'Board-certified cardiologist with 20+ years of experience in interventional cardiology.',
  },
  {
    name: 'Dr. James Okonkwo',
    specialty: 'Chief of Surgery',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    desc: 'Renowned general surgeon specializing in minimally invasive and robotic-assisted procedures.',
  },
  {
    name: 'Dr. Emily Chen',
    specialty: 'Head of Pediatrics',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
    desc: 'Dedicated pediatrician passionate about providing compassionate care to children of all ages.',
  },
  {
    name: 'Dr. Michael Adeyemi',
    specialty: 'Neurologist',
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da2031d?w=400&q=80',
    desc: 'Expert neurologist specializing in stroke treatment, epilepsy, and neurodegenerative disorders.',
  },
  {
    name: 'Dr. Grace Williams',
    specialty: 'Obstetrician & Gynecologist',
    img: 'https://images.unsplash.com/photo-1623852751415-12b2c47571d3?w=400&q=80',
    desc: 'Compassionate OB/GYN dedicated to women\'s health and safe maternity care.',
  },
  {
    name: 'Dr. David Kim',
    specialty: 'Orthopedic Surgeon',
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
    desc: 'Specialist in joint replacement, sports medicine, and minimally invasive spine surgery.',
  },
]

function Doctors() {
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
    <section id="doctors" className="doctors section" ref={sectionRef}>
      <div className="container">          <div className="section-header animate-in">
          <span className="section-tag">Our Team</span>
          <h2 className="section-title">
            Meet Our Expert Physicians
          </h2>
          <p className="section-subtitle">
            Our team of over 200 highly qualified doctors, nurses, and healthcare
            professionals are committed to providing you with the best possible care.
          </p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor-card animate-in" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="doctor-image">
                <img src={doctor.img} alt={doctor.name} loading="lazy" />
                <div className="doctor-social">
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
                  <a href="#" aria-label="Email"><i className="fas fa-envelope" /></a>
                </div>
              </div>
              <div className="doctor-info">
                <h3 className="doctor-name">{doctor.name}</h3>
                <span className="doctor-specialty">{doctor.specialty}</span>
                <p className="doctor-desc">{doctor.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Doctors
