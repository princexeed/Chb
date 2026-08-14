import React from 'react'
import './Doctors.css'

const doctors = [
  {
    name: 'Dr. Sunil Chander Jiwanmall',
    specialty: 'MS Surgery',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    desc: 'Board-certified MS Surgery with 20+ years of experience in..',
  },
  {
    name: 'Dr. Pragya Jiwanmall',
    specialty: 'MD Medicine',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    desc: 'Renowned general surgeon specializing in minimally invasive and robotic-assisted procedures.',
  },
  {
    name: 'Dr. Subash',
    specialty: 'MS Surgery',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
    desc: 'Dedicated pediatrician passionate about providing compassionate care to children of all ages.',
  },
  {
    name: 'Dr. Keerti',
    specialty: 'MS Obstetrician & Gynecologist',
    img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80',
    desc: 'Compassionate OB/GYN dedicated to women\'s health and safe maternity care.',
  },
  {
    name: 'Dr. Bobby',
    specialty: 'MD Medicine',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80',
    desc: 'Compassionate OB/GYN dedicated to women\'s health and safe maternity care.',
  },
  {
    name: 'Dr. David',
    specialty: 'MD pediatrician',
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
    desc: 'Dedicated pediatrician passionate about providing compassionate care to children of all ages.',
  },
    {
    name: 'Dr. Lilly',
    specialty: 'MD pediatrician',
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
    desc: 'Dedicated pediatrician passionate about providing compassionate care to children of all ages.',
  },
   {
    name: 'Dr. Livingstone',
    specialty: 'MDS Oral & Maxillofacial Surgery',
    img: '/photos/doctors/Dr Livingstone.jpg',
    desc: 'Dedicated pediatrician passionate about providing compassionate care to children of all ages.',
  },
    {
    name: 'Dr. Graceline Vandana Nickelson',
    specialty: 'MD Anaesthesiologist',
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
    desc: 'Dedicated pediatrician passionate about providing compassionate care to children of all ages.',
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
              <div className="doctor-photo">
                <img className="doctor-photo-img" src={doctor.img} alt={doctor.name} loading="lazy" />
                <div className="doctor-overlay">
                  <span className="doctor-specialty">{doctor.specialty}</span>
                  <p className="doctor-desc">{doctor.desc}</p>
                </div>
              </div>
              <div className="doctor-card-body">
                <h3 className="doctor-name">{doctor.name}</h3>
                <span className="doctor-qualification">{doctor.specialty}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Doctors
