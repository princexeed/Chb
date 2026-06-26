import React, { useState } from 'react'
import DeptDetail from '../components/DeptDetail'
import './SupportServicesPage.css'

const departments = [
  { name: 'Administration & Finance', icon: 'fa-chart-pie', tagline: 'Stewarding resources for exceptional healthcare delivery', image: '/photos/administration%20and%20finance/IMG_20260625_102834100.jpg', desc: 'Managing hospital operations, financial planning, budgeting, billing, payroll, and strategic resource allocation.', stats: { team: 45, metric: '₦2.5B+', metricLabel: 'Budget Managed' } },
  { name: 'Medical Records', icon: 'fa-notes-medical', tagline: 'Preserving your health story with accuracy', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80', desc: 'Maintaining accurate, confidential patient records with secure digital archiving and compliance.', stats: { team: 30, metric: '150K+', metricLabel: 'Records/Year' } },
  { name: 'Chaplaincy', icon: 'fa-cross', tagline: 'Nurturing the spirit, comforting the soul', image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80', desc: 'Providing spiritual care, emotional counseling, and faith-based support to patients and families.', stats: { team: 8, metric: '10K+', metricLabel: 'Sessions/Year' } },
  { name: 'Support Services', icon: 'fa-headset', tagline: 'Your first point of contact, your partner in care', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80', desc: 'Patient navigation, appointment scheduling, discharge coordination, and round-the-clock assistance.', stats: { team: 35, metric: '200K+', metricLabel: 'Interactions/Year' } },
  { name: 'Central Sterile Supply', icon: 'fa-jar', tagline: 'Setting the gold standard in infection prevention', image: 'https://images.unsplash.com/photo-1581595219747-8f5a12e3ae3e?w=800&q=80', desc: 'Sterilizing and distributing all surgical instruments and medical equipment to prevent infections.', stats: { team: 22, metric: '50K+', metricLabel: 'Packs/Month' } },
  { name: 'Laundry', icon: 'fa-shirt', tagline: 'Clean linens, safe environment, comfort for all', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=800&q=80', desc: 'Industrial-scale linen processing with strict infection control protocols for patient safety.', stats: { team: 18, metric: '15T/wk', metricLabel: 'Laundry Volume' } },
  { name: 'Biomedical Waste', icon: 'fa-biohazard', tagline: 'Protecting our community through responsible waste management', image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80', desc: 'Safe collection, treatment, and disposal of biomedical waste in compliance with regulations.', stats: { team: 12, metric: '100%', metricLabel: 'Compliance Rate' } },
  { name: 'Maintenance', icon: 'fa-wrench', tagline: 'Keeping our hospital running smoothly every day', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80', desc: 'Ensuring continuous operation of all hospital infrastructure and medical systems.', stats: { team: 28, metric: '99.5%', metricLabel: 'Systems Uptime' } },
  { name: 'Transport', icon: 'fa-truck-medical', tagline: 'Moving patients and supplies with speed and care', image: 'https://images.unsplash.com/photo-1587745416684-47953f16fdd1?w=800&q=80', desc: 'Inter-departmental patient transport, ambulance services, and medical equipment logistics.', stats: { team: 24, metric: '1,200+', metricLabel: 'Transports/Day' } },
]

const accentColors = ['var(--color-primary)', '#7c3aed', 'var(--color-secondary)', 'var(--color-primary)', '#7c3aed', 'var(--color-secondary)', 'var(--color-primary)', '#7c3aed', 'var(--color-secondary)']

function SupportServicesPage() {
  const [selectedDept, setSelectedDept] = useState(null)

  return (
    <div className="svc-page">
      {/* Hero */}
      <section className="svc-page-hero">
        <div className="svc-page-hero-bg" />
        <div className="svc-page-hero-overlay" />
        <div className="svc-page-hero-content">
          <span className="svc-page-badge">Support &amp; Administration</span>
          <h1 className="svc-page-title">
            The Engine Behind
            <br />
            <span className="svc-page-highlight">Exceptional Healthcare</span>
          </h1>
          <p className="svc-page-subtitle">
            From financial stewardship to facility maintenance, our dedicated support 
            departments work tirelessly behind the scenes to ensure seamless, 
            safe, and compassionate hospital operations.
          </p>
        </div>
        <div className="svc-page-scroll">
          <span>Explore Departments</span>
          <i className="fas fa-chevron-down" />
        </div>
      </section>

      {/* Cards */}
      <section className="svc-page-intro">
        <div className="container">
          <div className="svc-page-intro-header">
            <span className="section-tag">Our Departments</span>
            <h2 className="section-title">Every Department, Every Detail</h2>
            <p className="section-subtitle">
              Click any department below to explore its role, responsibilities, and impact on patient care.
            </p>
          </div>
          <div className="svc-page-grid">
            {departments.map((dept, index) => (
              <button
                key={index}
                type="button"
                className="svc-page-card"
                style={{ '--card-accent': accentColors[index] }}
                onClick={() => setSelectedDept(dept)}
                aria-label={`View details about ${dept.name}`}
              >
                <div className="svc-page-card-top">
                  <img src={dept.image} alt={dept.name} />
                  <div className="svc-page-card-img-overlay" />
                </div>
                <h3 className="svc-page-card-name">{dept.name}</h3>
                <p className="svc-page-card-desc">{dept.desc}</p>
                <div className="svc-page-card-stats">
                  <div className="svc-page-card-stat">
                    <span>{dept.stats.metric}</span>
                    <small>{dept.stats.metricLabel}</small>
                  </div>
                  <div className="svc-page-card-stat">
                    <span>{dept.stats.team}</span>
                    <small>Team</small>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedDept && (
        <DeptDetail
          department={selectedDept}
          onClose={() => setSelectedDept(null)}
        />
      )}
    </div>
  )
}

export default SupportServicesPage
