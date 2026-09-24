import React from 'react'
import './Doctors.css'

const doctors = [
  {
    name: 'Dr. Sunil Chander Jiwanmall',
    specialty: 'MS Surgery',
    role: 'Medical Superintendent',
    desc: 'Board-certified MS Surgery with 20+ years of experience in..',
  },
  {
    name: 'Dr. Pragya Jiwanmall',
    specialty: 'MD Medicine',
    role: 'Deputy Medical Superintendent',
    desc: 'Renowned general surgeon specializing in minimally invasive and robotic-assisted procedures.',
  },
  {
    name: 'Chandra Sekhar Ray',
    specialty: 'General Administrator',
    //img: '/photos/doctors/Chandra Sekhar Ray.jpeg',
    desc: 'General Administrator overseeing hospital operations, finance and strategic administration.',
  },
  {
    name: 'Dr. Subash',
    specialty: 'MS Surgery',
    desc: 'Dedicated pediatrician passionate about providing compassionate care to children of all ages.',
  },
  {
    name: 'Dr. Keerti',
    specialty: 'MS Obstetrician & Gynecologist',
    desc: 'Compassionate OB/GYN dedicated to women\'s health and safe maternity care.',
  },
  {
    name: 'Dr. Bobby',
    specialty: 'MD Medicine',
    desc: 'Compassionate OB/GYN dedicated to women\'s health and safe maternity care.',
  },
  {
    name: 'Dr. David',
    specialty: 'MD pediatrician',
    desc: 'Dedicated pediatrician passionate about providing compassionate care to children of all ages.',
  },
  {
    name: 'Dr. Anish',
    specialty: 'MD pediatrician',
    desc: 'Dedicated pediatrician passionate about providing compassionate care to children of all ages.',
  },
  {
    name: 'Dr. Dhanusha',
    specialty: 'MS Obstetrician & Gynecologist',
    desc: 'Compassionate OB/GYN dedicated to women\'s health and safe maternity care.',
  },
  {
    name: 'Dr. Bishal',
    specialty: 'MS Surgery',
    //img: '/photos/doctors/Dr Bishal.jpg',
    desc: 'Dedicated pediatrician passionate about providing compassionate care to children of all ages.',
  },
    {
    name: 'Dr. Lilly',
    specialty: 'MD pediatrician',
    desc: 'Dedicated pediatrician passionate about providing compassionate care to children of all ages.',
  },
   {
    name: 'Dr. Livingstone',
    specialty: 'MDS Oral & Maxillofacial Surgery',
   // img: '/photos/doctors/Dr Livingstone.jpg',
    desc: 'Dedicated pediatrician passionate about providing compassionate care to children of all ages.',
  },
    {
    name: 'Dr. Graceline Vandana Nickelson',
    specialty: 'MD Anaesthesiologist',
    desc: 'Dedicated pediatrician passionate about providing compassionate care to children of all ages.',
  },
]

function Doctors() {
  return (
    <section id="doctors" className="doctors section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Team</span>
        </div>

        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor-card">
              <div className="doctor-photo">
                {doctor.img ? (
                  <img className="doctor-photo-img" src={doctor.img} alt={doctor.name} loading="lazy" />
                ) : (
                  <div className="doctor-photo-icon">
                    <i className="fas fa-user-doctor" />
                  </div>
                )}
              </div>
              <div className="doctor-card-body">
                <h3 className="doctor-name">{doctor.name}</h3>
                <span className="doctor-qualification">{doctor.specialty}</span>
                {doctor.role && <span className="doctor-role">{doctor.role}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Doctors
