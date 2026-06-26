import React, { useEffect, useRef, useState } from 'react'
import DeptDetail from './DeptDetail'
import './SupportServices.css'

const categories = [
  {
    title: 'Administration & Records',
    icon: 'fa-building-columns',
    accent: 'var(--color-primary)',
    items: [
      {
        name: 'Administration & Finance',
        icon: 'fa-chart-pie',
        desc: 'Managing hospital operations, financial planning, budgeting, billing, payroll, and strategic resource allocation to ensure sustainable, high-quality healthcare delivery.',
      },
      {
        name: 'Medical Records',
        icon: 'fa-notes-medical',
        desc: 'Maintaining accurate, confidential patient records with secure digital archiving, ensuring compliance with health information regulations and seamless data access for clinicians.',
      },
    ],
  },
  {
    title: 'Spiritual & Patient Support',
    icon: 'fa-hands-pray',
    accent: 'var(--color-secondary)',
    items: [
      {
        name: 'Chaplaincy',
        icon: 'fa-cross',
        desc: 'Providing spiritual care, emotional counseling, and faith-based support to patients, families, and staff — honoring the holistic healing mission of our hospital.',
      },
      {
        name: 'Support Services',
        icon: 'fa-headset',
        desc: 'A dedicated team offering patient navigation, appointment scheduling, discharge coordination, and round-the-clock assistance for all hospital inquiries and concerns.',
      },
    ],
  },
  {
    title: 'Clinical & Facility Operations',
    icon: 'fa-gear',
    accent: '#7c3aed',
    items: [
      {
        name: 'Central Sterile Supply',
        icon: 'fa-jar',
        desc: 'Operating the CSSD (Central Sterile Supply Department) — sterilizing, processing, and distributing all surgical instruments and medical equipment to prevent infections.',
      },
      {
        name: 'Laundry',
        icon: 'fa-shirt',
        desc: 'Managing industrial-scale linen and garment processing for patient bedding, surgical scrubs, uniforms, and towels — upholding the highest hygiene standards.',
      },
      {
        name: 'Biomedical Waste',
        icon: 'fa-biohazard',
        desc: 'Safely collecting, segregating, treating, and disposing of biomedical waste in compliance with environmental regulations to protect patients, staff, and the community.',
      },
      {
        name: 'Maintenance',
        icon: 'fa-wrench',
        desc: 'Ensuring the continuous operation of all hospital infrastructure — HVAC, electrical, plumbing, medical gas systems, and building facilities — through preventive maintenance.',
      },
      {
        name: 'Transport',
        icon: 'fa-truck-medical',
        desc: 'Providing reliable inter-departmental patient transport, medical equipment logistics, ambulance services, and courier coordination across the entire hospital campus.',
      },
    ],
  },
]

function SupportServices() {
  const sectionRef = useRef(null)
  const [selectedDept, setSelectedDept] = useState(null)

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
    <section id="departments" className="support-services section" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-in">
          <span className="section-tag">Hospital Departments</span>
          <h2 className="section-title">Support Services &amp; Administration</h2>
          <p className="section-subtitle">
            Behind every successful treatment is a dedicated team working tirelessly 
            behind the scenes. Our support departments ensure seamless operations, 
            from patient records to facility maintenance.
            <br />
            <strong style={{ color: 'var(--color-primary)', fontSize: '0.9rem', marginTop: '8px', display: 'inline-block' }}>
              Click any department below to learn more
            </strong>
          </p>
        </div>

        <div className="dept-categories">
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="dept-category animate-in" style={{ transitionDelay: `${catIndex * 0.15}s` }}>
              <div className="dept-category-header" style={{ '--cat-accent': category.accent }}>
                <div className="dept-category-icon">
                  <i className={`fas ${category.icon}`} />
                </div>
                <h3 className="dept-category-title">{category.title}</h3>
              </div>

              <div className="dept-category-grid">
                {category.items.map((item, itemIndex) => (
                  <button
                    key={itemIndex}
                    type="button"
                    className="dept-card"
                    style={{ '--cat-accent': category.accent }}
                    onClick={() => setSelectedDept(item)}
                    aria-label={`View details about ${item.name}`}
                  >
                    <div className="dept-card-icon"><i className={`fas ${item.icon}`} /></div>
                    <h4 className="dept-card-title">{item.name}</h4>
                    <p className="dept-card-desc">{item.desc}</p>
                    <span className="dept-card-learn">
                      Learn More <i className="fas fa-arrow-right" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedDept && (
        <DeptDetail
          department={selectedDept}
          onClose={() => setSelectedDept(null)}
        />
      )}
    </section>
  )
}

export default SupportServices
