import React, { useState, useEffect, useRef } from 'react'
import SchoolDetail from '../components/SchoolDetail'
import './SchoolsPage.css'

function RotatingImage({ images, alt }) {
  const [current, setCurrent] = useState(0)
  const [next, setNext] = useState(null)
  const idxRef = useRef(0)
  useEffect(() => {
    const timer = setInterval(() => {
      idxRef.current = (idxRef.current + 1) % images.length
      setNext(idxRef.current)
      setTimeout(() => {
        setCurrent(idxRef.current)
        setNext(null)
      }, 500)
    }, 3200)
    return () => clearInterval(timer)
  }, [images.length])
  return (
    <div className="other-ri-wrap">
      <img src={images[current]} alt={alt} className="other-ri-img" />
      {next !== null && (
        <img src={images[next]} alt={alt} className="other-ri-img other-ri-img--over" />
      )}
    </div>
  )
}

const schools = [
  {
    name: 'New Life English Medium School',
    short: 'NLEM',
    icon: 'fa-book-open',
    tagline: 'Quality English-medium education from foundational years',
    grade: 'Pre-K to Class 10',
    image: '/photos/school/image2.jpg',
    images: [
      '/photos/school/image2.jpg',
      '/photos/school/image1.jpg',
      '/photos/school/image3.jpg',
      '/photos/school/image4.jpg',
    ],
    desc: 'Providing affordable, quality English-medium education to children in our community.',
    longDesc: 'New Life English Medium School (NLEM) is a Christian Hospital initiative dedicated to providing quality English-medium education to children from pre-kindergarten through Class 10. Our curriculum blends academic excellence with moral and spiritual development, creating well-rounded individuals prepared for higher education and life. With experienced teachers, modern classrooms, and a nurturing environment, NLEM is shaping the next generation of leaders.',
    features: [
      'English-medium instruction from foundation years',
      'Well-equipped classrooms & library',
      'Science & computer laboratories',
      'Sports & extracurricular programs',
      'Moral & spiritual education',
      'Affordable fee structure for local community',
    ],
    stats: { enrolled: '450+', teachers: '22', ratio: '1:20' },
  },
  {
    name: 'Mitra Residential School',
    short: 'Mitra',
    icon: 'fa-house-chimney',
    tagline: 'A home and education for tribal children',
    grade: 'Class 1 to 10 (Residential)',
    image: '/photos/mitra/mitra1.jpg',
    images: [
      '/photos/mitra/mitra1.jpg',
      '/photos/mitra/mitra2.jpg',
      '/photos/mitra/mitra3.jpg',
    ],
    desc: 'A residential school serving tribal children with free education, boarding & holistic care.',
    longDesc: 'Mitra School is a residential institution run by Christian Hospital for tribal children from underserved communities. Offering free education, boarding, meals, and healthcare from Class 1 to 10, Mitra provides a safe, nurturing home where children can thrive academically, socially, and spiritually. Our dedicated staff ensure that every child receives personal attention, cultural respect, and the opportunity to break the cycle of poverty through education.',
    features: [
      'Free education, boarding & meals for tribal children',
      'Class 1–10 curriculum with state board affiliation',
      '24/7 residential care & supervision',
      'Nutritious meals & regular health check-ups',
      'Cultural preservation & tribal heritage programs',
      'Vocational training & life skills education',
    ],
    stats: { enrolled: '200+', teachers: '16', ratio: '1:12' },
  },
  {
    name: 'Creche & Early Learning Center',
    short: 'Creche',
    icon: 'fa-child',
    tagline: 'Nurturing little minds with love and care',
    grade: 'Ages 2–5 (LKG, UKG & Daycare)',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80',
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    ],
    desc: 'A warm, safe early learning environment for toddlers and young children.',
    longDesc: 'The Creche & Early Learning Center provides a loving, safe, and stimulating environment for children aged 2 to 5 years. Operating as both a daycare and an early childhood education center (LKG/UKG level), our program focuses on foundational learning through play, social interaction, and creative activities. Run by trained early childhood educators, the Creche supports working parents while ensuring their little ones receive the best start in life.',
    features: [
      'Daycare & early childhood education (LKG/UKG)',
      'Play-based & Montessori-inspired learning',
      'Qualified & caring early childhood educators',
      'Nutritious meals & nap-time schedules',
      'Indoor & outdoor play areas',
      'Safe, child-friendly environment with CCTV',
    ],
    stats: { enrolled: '80+', teachers: '8', ratio: '1:10' },
  },
]

function SchoolsPage() {
  const [selectedSchool, setSelectedSchool] = useState(null)

  return (
    <div className="schools-page">
      {/* Page Hero */}
      <section className="schools-page-hero">
        <div className="schools-page-hero-bg" />
        <div className="schools-page-hero-overlay" />
        <div className="schools-page-hero-content">
          <span className="schools-page-badge">Education &amp; Development</span>
          <h1 className="schools-page-title">
            Nurturing Young Minds,
            <br />
            <span className="schools-page-highlight">Building Bright Futures</span>
          </h1>
          <p className="schools-page-subtitle">
            Christian Hospital runs three dedicated educational institutions that serve
            children from early childhood through secondary education — providing
            quality learning, residential care, and holistic development.
          </p>
        </div>
        <div
          className="schools-page-scroll"
          onClick={() => document.getElementById('schools-list')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ cursor: 'pointer' }}
        >
          <span>Explore Our Schools</span>
          <i className="fas fa-chevron-down" />
        </div>
      </section>

      {/* Schools — same layout as Services > Other Services */}
      <section className="schools-other-section" id="schools-list">
        <div className="container">
          <div className="other-header">
            <span className="other-badge">Our Schools</span>
          </div>
          {schools.map((school, idx) => (
            <div key={idx} className={`other-layout ${idx % 2 === 1 ? 'other-layout--reverse' : ''}`}>
              <div className="other-image">
                <RotatingImage images={school.images} alt={school.name} />
              </div>
              <div className="other-content">
                <span className="other-tagline">{school.tagline}</span>
                <h3 className="other-title">{school.name}</h3>
                <span className="other-grade">{school.grade}</span>
                <p className="other-text">{school.longDesc}</p>
                <div className="other-features">
                  {school.features.map((f, i) => (
                    <div key={i} className="other-feature"><i className="fas fa-check-circle" /> {f}</div>
                  ))}
                </div>
                <div className="other-stats other-stats--plain">
                  <div className="other-stat">
                    <span className="other-stat-num">{school.stats.enrolled}</span>
                    <span className="other-stat-label">Enrolled</span>
                  </div>
                  <div className="other-stat">
                    <span className="other-stat-num">{school.stats.teachers}</span>
                    <span className="other-stat-label">Teachers</span>
                  </div>
                  <div className="other-stat">
                    <span className="other-stat-num">{school.stats.ratio}</span>
                    <span className="other-stat-label">Ratio</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedSchool && (
        <SchoolDetail
          school={selectedSchool}
          onClose={() => setSelectedSchool(null)}
        />
      )}
    </div>
  )
}

export default SchoolsPage
