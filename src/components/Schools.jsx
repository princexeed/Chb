import React, { useEffect, useRef, useState } from 'react'
import SchoolDetail from './SchoolDetail'
import './Schools.css'

const schools = [
  {
    name: 'New Life English Medium School',
    short: 'NLEM',
    icon: 'fa-book-open',
    tagline: 'Quality English-medium education from foundational years',
    grade: 'Pre-K to Class 10',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
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

function Schools() {
  const sectionRef = useRef(null)
  const [selectedSchool, setSelectedSchool] = useState(null)

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
    <section id="schools" className="schools section section-alt" ref={sectionRef}>
      <div className="container">          <div className="section-header animate-in">
          <span className="section-tag">Our Schools</span>
          <h2 className="section-title">Education &amp; Child Development</h2>
          <p className="section-subtitle">
            Beyond healthcare, we nurture young minds through quality education —
            from early childhood learning to residential schooling for tribal children.
          </p>
        </div>

        <div className="schools-grid">
          {schools.map((school, index) => (
            <button
              key={index}
              type="button"
              className="school-card animate-in"
              style={{ transitionDelay: `${index * 0.12}s` }}
              onClick={() => setSelectedSchool(school)}
              aria-label={`View details about ${school.name}`}
            >
              <div className="school-card-top">
                <div className="school-icon">
                  <i className={`fas ${school.icon}`} />
                </div>
                <span className="school-short">{school.short}</span>
              </div>
              <h3 className="school-name">{school.name}</h3>
              <span className="school-grade">{school.grade}</span>
              <p className="school-desc">{school.desc}</p>
              <span className="school-learn">
                Explore School <i className="fas fa-arrow-right" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedSchool && (
        <SchoolDetail
          school={selectedSchool}
          onClose={() => setSelectedSchool(null)}
        />
      )}
    </section>
  )
}

export default Schools
