import React, { useState, useMemo } from 'react'
import ServiceDetail from '../components/ServiceDetail'
import './ServicesPage.css'

const allServices = [
  { icon: 'fa-stethoscope', title: 'General Medicine', tagline: 'Education, research & clinical excellence in tropical and rural medicine', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80', desc: 'Comprehensive care for tropical infectious diseases, chronic NCDs, sickle cell disease, and endoscopic services — guided by evidence-based, affordable, holistic medicine.', category: 'Primary Care', stats: { doctors: 28, patients: '45K+' } },
  { icon: 'fa-baby', title: 'Pediatrics', tagline: 'One of the few neonatal nurseries in South Orissa', image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80', desc: 'Neonatal intensive care for birth asphyxias, low birth weight & preterm babies. 6,000+ OPD visits & 1,000 admissions annually.', category: 'Primary Care', stats: { doctors: 22, patients: '6,000+ OPD/yr' } },
  { icon: 'fa-baby-carriage', title: 'Maternity & Obstetrics', tagline: '2,700 deliveries & 900 gynaecological surgeries per year', image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80', desc: 'Referral hospital for complicated cases from 2 districts — 2,700 deliveries/yr, 900 gynaecological surgeries, JSY programme accredited by NRHM.', category: 'Primary Care', stats: { doctors: 16, patients: '2,700+ deliveries/yr' } },
  { icon: 'fa-kit-medical', title: 'Emergency Medicine', tagline: '24/7 critical care when every second counts', image: 'https://images.unsplash.com/photo-1579684288337-4c1a6c81e26b?w=800&q=80', desc: '24/7 emergency department with trauma care, staffed by board-certified emergency physicians and specialists.', category: 'Emergency & Critical', stats: { doctors: 30, patients: '50K+ visits/yr' } },
  { icon: 'fa-x-ray', title: 'Radiology & Imaging', tagline: 'Precision diagnostics through advanced imaging', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80', desc: 'Cutting-edge diagnostic imaging including MRI, CT scan, ultrasound, X-ray, and interventional radiology.', category: 'Diagnostics', stats: { doctors: 12, patients: '40K+ exams/yr' } },
  { icon: 'fa-flask', title: 'Laboratory Services', tagline: 'Accurate diagnostics driving better outcomes', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80', desc: 'Full-service clinical laboratory offering comprehensive diagnostic testing with rapid turnaround times.', category: 'Diagnostics', stats: { doctors: 8, patients: '100K+ tests/yr' } },
  { icon: 'fa-user-md', title: 'Surgery', tagline: 'Serving 9,000+ outpatients & 3,400 surgeries annually', image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a0aa?w=800&q=80', desc: 'Open & laparoscopic surgeries, orthopaedic care, paediatric surgery, and emergency trauma care — serving a 200 km radius with no other surgical facilities.', category: 'Surgical', stats: { doctors: 20, patients: '3,400+ surgeries/yr' } },
  { icon: 'fa-eye', title: 'Ophthalmology', tagline: 'Clear vision for a brighter future', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', desc: 'Complete eye care from routine exams to advanced cataract, glaucoma, and retinal surgery.', category: 'Specialized Medicine', stats: { doctors: 8, patients: '12K+' } },
  { icon: 'fa-tooth', title: 'Dental Care', tagline: '1,100+ patients per year — restoring smiles, saving lives', image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80', desc: 'Diagnosis, restorative & surgical procedures, oral cancer screening, and tobacco cessation counselling — serving 1,100+ patients annually.', category: 'Surgical', stats: { doctors: 6, patients: '1,100+ patients/yr' } },
  { icon: 'fa-prescription', title: 'Pharmacy', tagline: 'Expert medication management & counseling', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80', desc: 'In-house pharmacy providing prescribed medications, clinical consultations, and medication management.', category: 'Supportive Care', stats: { doctors: 5, patients: '80K+ prescriptions/yr' } },
  { icon: 'fa-microscope', title: 'Endoscopy', tagline: 'Minimally invasive diagnosis & treatment', image: 'https://images.unsplash.com/photo-1579684288337-4c1a6c81e26b?w=800&q=80', desc: 'Advanced endoscopic procedures for accurate diagnosis and minimally invasive treatment of gastrointestinal conditions.', category: 'Diagnostics', stats: { doctors: 6, patients: '3K+' } },
  { icon: 'fa-syringe', title: 'Anaesthesiology', tagline: 'Safe anaesthesia care for every surgery', image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a0aa?w=800&q=80', desc: 'General, spinal, local & regional anaesthesia for routine and emergency surgeries — with preanaesthetic evaluation and labour pain management.', category: 'Surgical', stats: { doctors: 12, patients: '3,400+ surgeries/yr' } },
  { icon: 'fa-hand-holding-heart', title: 'Community Health', tagline: 'Reaching villages, transforming lives', image: '/photos/community/image.jpg', desc: 'MITRA — serving 12,700 people in 53 tribal villages through mobile clinics, health education, residential school, and community empowerment.', category: 'Primary Care', stats: { doctors: 20, patients: '50K+' } },
  { icon: 'fa-user-nurse', title: 'Nursing Care', tagline: 'The finest of the Fine Arts — compassionate care for body & soul', image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80', desc: 'Holistic nursing care — bedside care, medication management, wound care, patient education, and compassionate support for every patient.', category: 'Supportive Care', stats: { doctors: 150, patients: 'All patients' } },
  { icon: 'fa-laptop-code', title: 'IT Services', tagline: 'Powering healthcare through innovative technology', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80', desc: 'Managing hospital information systems, network infrastructure, and digital health solutions to ensure seamless, secure, and efficient healthcare operations.', category: 'Supportive Care', stats: { doctors: 12, patients: '24/7 Support' } },
]

const categories = ['All', 'Primary Care', 'Specialized Medicine', 'Emergency & Critical', 'Diagnostics', 'Surgical', 'Supportive Care']

function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredServices = useMemo(() => {
    return allServices.filter(s => {
      const matchesCategory = activeCategory === 'All' || s.category === activeCategory
      const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            s.desc.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <div className="med-page">
      {/* Hero */}
      <section className="med-page-hero">
        <div className="med-page-hero-bg" />
        <div className="med-page-hero-overlay" />
        <div className="med-page-hero-content">
          <span className="med-page-badge">Medical Services</span>
          <h1 className="med-page-title">
            World-Class Medical
            <br />
            <span className="med-page-highlight">Care &amp; Expertise</span>
          </h1>
          <p className="med-page-subtitle">
            From primary care to advanced surgery, our specialized departments
            deliver compassionate, cutting-edge healthcare tailored to every patient's needs.
          </p>
        </div>
        <div className="med-page-scroll">
          <span>Explore Services</span>
          <i className="fas fa-chevron-down" />
        </div>
      </section>

      {/* Search & Filter */}
      <section className="med-page-toolbar">
        <div className="container">
          <div className="med-page-toolbar-inner">
            <div className="med-page-search">
              <i className="fas fa-search" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className="med-page-search-clear" onClick={() => setSearchQuery('')}>
                  <i className="fas fa-times" />
                </button>
              )}
            </div>
            <div className="med-page-categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`med-page-cat-btn${activeCategory === cat ? ' active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="med-page-results">
            <span>{filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="med-page-grid-section">
        <div className="container">
          <div className="med-page-grid">
            {filteredServices.map((service, index) => (
              <button
                key={service.title}
                type="button"
                className="med-page-card"
                onClick={() => setSelectedService(service)}
                aria-label={`View details about ${service.title}`}
              >
                <div className="med-page-card-top">
                  <img src={service.image} alt={service.title} />
                  <div className="med-page-card-img-overlay" />
                  <div className="med-page-card-icon-wrap">
                    <div className="med-page-card-icon">
                      <i className={`fas ${service.icon}`} />
                    </div>
                  </div>
                  <span className="med-page-card-cat">{service.category}</span>
                </div>
                <div className="med-page-card-body">
                  <h3 className="med-page-card-title">{service.title}</h3>
                  <p className="med-page-card-desc">{service.desc}</p>
                  <div className="med-page-card-stats">
                    <div className="med-page-card-stat">
                      <span>{service.stats.doctors}</span>
                      <small>Specialists</small>
                    </div>
                    <div className="med-page-card-stat">
                      <span>{service.stats.patients}</span>
                      <small>Treated</small>
                    </div>
                  </div>
                </div>
                <div className="med-page-card-cta">
                  Explore Service <i className="fas fa-arrow-right" />
                </div>
              </button>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="med-page-empty">
              <i className="fas fa-search" />
              <h3>No services found</h3>
              <p>Try a different search term or category.</p>
            </div>
          )}
        </div>
      </section>

      {selectedService && (
        <ServiceDetail
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  )
}

export default ServicesPage
