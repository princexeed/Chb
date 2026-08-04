import React from 'react'
import './Doctors.css'

const doctors = [
  {
    name: 'Dr. Sunil Chander Jiwanmall',
    specialty: 'Chief of Cardiology',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    desc: 'Board-certified cardiologist with 20+ years of experience in interventional cardiology.',
  },
  {
    name: 'Dr. Pragya Jiwanmall',
    specialty: 'Chief of Surgery',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    desc: 'Renowned general surgeon specializing in minimally invasive and robotic-assisted procedures.',
  },
  {
    name: 'Dr. Subash',
    specialty: 'Head of Pediatrics',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
    desc: 'Dedicated pediatrician passionate about providing compassionate care to children of all ages.',
  },
  {
    name: 'Dr. Keerti',
    specialty: 'Neurologist',
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da2031d?w=400&q=80',
    desc: 'Expert neurologist specializing in stroke treatment, epilepsy, and neurodegenerative disorders.',
  },
  {
    name: 'Dr. Bobby',
    specialty: 'Obstetrician & Gynecologist',
    img: 'https://images.unsplash.com/photo-1623852751415-12b2c47571d3?w=400&q=80',
    desc: 'Compassionate OB/GYN dedicated to women\'s health and safe maternity care.',
  },
  {
    name: 'Dr. David',
    specialty: 'Orthopedic Surgeon',
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
    desc: 'Specialist in joint replacement, sports medicine, and minimally invasive spine surgery.',
  },
    {
    name: 'Dr. Lilly',
    specialty: 'Orthopedic Surgeon',
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
    desc: 'Specialist in joint replacement, sports medicine, and minimally invasive spine surgery.',
  },
]

function Doctors() {
  return (
    <section id="doctors" className="doctors section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Team</span>
          <h2 className="section-title">
            Meet Our Expert Physicians
          </h2>
        </div>

        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor-card">
              <div className="doctor-img">
                <i className="fas fa-stethoscope doctor-img-icon" />
              </div>
              <div className="doctor-card-body">
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
