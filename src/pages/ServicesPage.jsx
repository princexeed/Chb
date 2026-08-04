import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ServiceDetail from '../components/ServiceDetail'
import './ServicesPage.css'

function RotatingImage({ images, alt }) {
  const [current, setCurrent] = useState(0)
  const [next, setNext] = useState(null)
  const [transitioning, setTransitioning] = useState(false)
  const idxRef = useRef(0)

  useEffect(() => {
    const timer = setInterval(() => {
      idxRef.current = (idxRef.current + 1) % images.length
      setNext(idxRef.current)
      setTransitioning(true)
      setTimeout(() => {
        setCurrent(idxRef.current)
        setNext(null)
        setTransitioning(false)
      }, 500)
    }, 3000)
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

const departments = [
  {
    title: 'General Medicine',
    desc: 'Comprehensive care for tropical infectious diseases, chronic NCDs, sickle cell disease, and endoscopic services — guided by evidence-based, affordable, holistic medicine.',
    icon: 'fa-stethoscope',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    badgeBg: '#dbeafe',
    iconColor: '#1B4A8B',
    linkColor: '#1B4A8B'
  },
  {
    title: 'Pediatrics',
    desc: 'Neonatal intensive care for birth asphyxias, low birth weight & preterm babies. 6,000+ OPD visits & 1,000 admissions annually.',
    icon: 'fa-baby',
    img: '/photos/pediatrics/IMG_20260223_083445236.jpg',
    badgeBg: '#d1fae5',
    iconColor: '#059669',
    linkColor: '#059669'
  },
  {
    title: 'Maternity & Obstetrics',
    desc: 'Referral hospital for complicated cases from 2 districts — 2,700 deliveries/yr, 900 gynaecological surgeries, JSY programme accredited by NRHM.',
    icon: 'fa-baby-carriage',
    img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80',
    badgeBg: '#fce7f3',
    iconColor: '#d946ef',
    linkColor: '#9333ea'
  },
  {
    title: 'Surgery',
    desc: 'Open & laparoscopic surgeries, orthopaedic care, paediatric surgery, and emergency trauma care — serving a 200 km radius with no other surgical facilities.',
    icon: 'fa-user-md',
    img: 'https://images.unsplash.com/photo-1551601651-2a8555f1a0aa?w=800&q=80',
    badgeBg: '#ffe4e6',
    iconColor: '#e11d48',
    linkColor: '#e11d48'
  },
  {
    title: 'Ophthalmology',
    desc: 'Complete eye care from routine exams to advanced cataract, glaucoma, and retinal surgery.',
    icon: 'fa-eye',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    badgeBg: '#fef3c7',
    iconColor: '#f59e0b',
    linkColor: '#d97706'
  },
  {
    title: 'Anaesthesiology',
    desc: 'General, spinal, local & regional anaesthesia for routine and emergency surgeries — with preanaesthetic evaluation and labour pain management.',
    icon: 'fa-syringe',
    img: 'https://images.unsplash.com/photo-1551601651-2a8555f1a0aa?w=800&q=80',
    badgeBg: '#e0f2fe',
    iconColor: '#0ea5e9',
    linkColor: '#0d9488'
  },
  {
    title: 'Endoscopy',
    desc: 'Advanced endoscopic procedures for accurate diagnosis and minimally invasive treatment of gastrointestinal conditions.',
    icon: 'fa-microscope',
    img: '/photos/endoscopy/IMG_20260625_143607798.jpg',
    badgeBg: '#e0e7ff',
    iconColor: '#4f46e5',
    linkColor: '#4338ca'
  },
  {
    title: 'Pharmacy',
    desc: 'In-house pharmacy providing prescribed medications, clinical consultations, and medication management.',
    icon: 'fa-prescription',
    img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
    badgeBg: '#f3e8ff',
    iconColor: '#9333ea',
    linkColor: '#7e22ce'
  },
  {
    title: 'Radiology & Imaging',
    desc: 'Cutting-edge diagnostic imaging including MRI, CT scan, ultrasound, X-ray, and interventional radiology.',
    icon: 'fa-x-ray',
    img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80',
    badgeBg: '#cffafe',
    iconColor: '#0891b2',
    linkColor: '#0e7490'
  },
  {
    title: 'Laboratory Services',
    desc: 'Full-service clinical laboratory offering comprehensive diagnostic testing with rapid turnaround times.',
    icon: 'fa-flask',
    img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80',
    badgeBg: '#ecfdf5',
    iconColor: '#10b981',
    linkColor: '#059669'
  },
  {
    title: 'Blood Bank',
    desc: 'Safe blood collection, screening, storage and transfusion services — available 24/7 for emergencies and routine procedures.',
    icon: 'fa-droplet',
    img: 'https://images.unsplash.com/photo-1615461066841-6116e61059f4?w=800&q=80',
    badgeBg: '#fce7f3',
    iconColor: '#e11d48',
    linkColor: '#be123c'
  },
  {
    title: 'Nursing Care',
    desc: 'Holistic nursing care — bedside care, medication management, wound care, patient education, and compassionate support for every patient.',
    icon: 'fa-user-nurse',
    img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80',
    badgeBg: '#fef3c7',
    iconColor: '#d97706',
    linkColor: '#b45309'
  },
  {
    title: 'Community Health',
    desc: 'MITRA — serving 12,700 people in 53 tribal villages through mobile clinics, health education, residential school, and community empowerment.',
    icon: 'fa-hand-holding-heart',
    img: '/photos/community/image.jpg',
    badgeBg: '#d1fae5',
    iconColor: '#059669',
    linkColor: '#047857'
  },
  {
    title: 'IT Services',
    desc: 'Managing hospital information systems, network infrastructure, and digital health solutions to ensure seamless, secure, and efficient healthcare operations.',
    icon: 'fa-laptop-code',
    img: '/photos/it/image1.png',
    badgeBg: '#e0e7ff',
    iconColor: '#6366f1',
    linkColor: '#4f46e5'
  }
]

function ServicesPage() {
  const [hovered, setHovered] = useState(null)
  const [selected, setSelected] = useState(null)

  const active = hovered || departments[0]

  return (
    <div className="med-page">
      <section className="med-page-hero">
        <div className="med-page-hero-bg" />
        <div className="med-page-hero-overlay" />
        <div className="med-page-hero-content">
          <span className="med-page-badge">Medical Services</span>
          <h1 className="med-page-title">
            Care That Covers
            <br />
            <span className="med-page-highlight">Every Aspect of Health</span>
          </h1>
        </div>
        <div
          className="med-page-scroll"
          onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ cursor: 'pointer' }}
        >
          <span>Explore Services</span>
          <i className="fas fa-chevron-down" />
        </div>
      </section>

      <section className="services-section" id="services-section">
        <div className="container">
          <div className="services-header">
            <span className="services-badge">Departments</span>
            <h2 className="services-title">Expertise You Can Trust</h2>
            <p className="services-subtitle">
              Comprehensive medical services designed to meet the diverse health needs of our community.
            </p>
          </div>

          <div className="services-grid">
            {departments.map((dept) => {
              const isActive = active.title === dept.title
              return (
                <div
                  key={dept.title}
                  className={`services-card${isActive ? ' services-card--active' : ''}`}
                  onMouseEnter={() => setHovered(dept)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(dept)}
                >
                  <div className="services-card-bg">
                    <div className="services-card-gradient" />
                    <img src={dept.img} alt="" />
                  </div>

                  <div className="services-card-icon" style={{ background: dept.badgeBg }}>
                    <i className={`fas ${dept.icon}`} style={{ color: dept.iconColor }} />
                  </div>
                  <h3 className="services-card-title">{dept.title}</h3>
                  <p className="services-card-desc">{dept.desc}</p>
                  <span className="services-card-link" style={{ color: dept.linkColor }}>
                    Learn more <span className="services-arrow">&rarr;</span>
                  </span>
                </div>
              )
            })}
          </div>

          <div className="services-more">
            <button className="services-more-btn" onClick={() => document.getElementById('other-services')?.scrollIntoView({ behavior: 'smooth' })}>
              Other Services <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-layout">
            <div className="mission-image">
              <img src="/photos/hospital/image3.png" alt="" />
            </div>
            <div className="mission-content">
              <span className="mission-badge">Our Mission</span>
              <h2 className="mission-heading">Healthcare <span>Designed Around You</span></h2>
              <p className="mission-sub">A gymnasium for the mind!</p>
              <p className="mission-text">
                With more than 35,000 out-patients and 3,000 in-patients per year, the department is kept on its toes round the clock. Be it Diabetic ketoacidosis, Tuberculosis, Sepsis, Sickle cell crisis, Black water fever, Pericardial effusion, liver abscess or a common cold, the team is challenged with a wide range of medical conditions everyday. With the resources available, evidence based medicine is practiced for the acute and chronic conditions.
              </p>
              <p className="mission-text">
                Efforts have been made to approach the chronic conditions like Diabetes Mellitus, Hypertension and Chronic Renal Failure in a wholistic way through the lifestyle and diet education clinic. Future endeavours include setting up a well equipped ICU, a dialysis centre and endoscopic services. We invite one and all to make this dream come true.
              </p>
            </div>
          </div>
          <div className="mission-cta-wrap">
            <Link to="/about" className="mission-cta" onClick={() => window.scrollTo(0, 0)}>
              Discover Our Story <span className="mission-cta-arrow">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="other-section" id="other-services">
        <div className="container">
          <div className="other-header">
            <span className="other-badge">Other Services</span>
          </div>
            <div className="other-layout">
            <div className="other-image">
              <RotatingImage images={['/photos/administration%20and%20finance/IMG_20260625_102834100.jpg', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80']} alt="" />
            </div>
            <div className="other-content">
              <span className="other-tagline">Stewarding resources for exceptional healthcare delivery</span>
              <h3 className="other-title">Administration &amp; Finance</h3>
              <p className="other-text">
                Managing hospital operations, financial planning, budgeting, billing, payroll, and strategic resource allocation.
              </p>
              <p className="other-text">
                Our Administration &amp; Finance department forms the backbone of hospital operations, ensuring that every resource is managed with integrity, transparency, and strategic foresight. From budgeting and financial planning to billing, payroll, and procurement, this team works diligently to maintain the financial health of the institution so that clinical departments can focus entirely on patient care.
              </p>
              <div className="other-features">
                <div className="other-feature"><i className="fas fa-check-circle" /> Financial planning &amp; budget management</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Patient billing &amp; insurance coordination</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Payroll &amp; human resources administration</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Procurement &amp; supply chain management</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Strategic planning &amp; business development</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Regulatory compliance &amp; audit management</div>
              </div>
              <div className="other-stats">
                <div className="other-stat">
                  <span className="other-stat-num">45</span>
                  <span className="other-stat-label">Team Members</span>
                </div>
                <div className="other-stat">
                  <span className="other-stat-num">₦2.5B+</span>
                  <span className="other-stat-label">Annual Budget Managed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="other-layout other-layout--reverse">
            <div className="other-image">
              <RotatingImage images={['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80', 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80', 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80']} alt="" />
            </div>
            <div className="other-content">
              <span className="other-tagline">Preserving your health story with accuracy and confidentiality</span>
              <h3 className="other-title">Medical Records</h3>
              <p className="other-text">
                Maintaining accurate, confidential patient records with secure digital archiving and compliance.
              </p>
              <p className="other-text">
                The Medical Records department is responsible for the accurate documentation, storage, and retrieval of all patient health information. Using state-of-the-art Electronic Health Record (EHR) systems, our team ensures that every diagnosis, treatment, and outcome is meticulously recorded and securely maintained — enabling seamless continuity of care while strictly protecting patient confidentiality.
              </p>
              <div className="other-features">
                <div className="other-feature"><i className="fas fa-check-circle" /> Electronic Health Record (EHR) management</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Patient data registration &amp; verification</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Medical coding &amp; classification (ICD, CPT)</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Records storage &amp; secure archiving</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Release of information &amp; patient access</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Data quality assurance &amp; compliance</div>
              </div>
              <div className="other-stats">
                <div className="other-stat">
                  <span className="other-stat-num">30</span>
                  <span className="other-stat-label">Team Members</span>
                </div>
                <div className="other-stat">
                  <span className="other-stat-num">150K+</span>
                  <span className="other-stat-label">Records/Year</span>
                </div>
              </div>
            </div>
          </div>

          <div className="other-layout">
            <div className="other-image">
              <RotatingImage images={['https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80', 'https://images.unsplash.com/photo-1581595219747-8f5a12e3ae3e?w=600&q=80', 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80']} alt="" />
            </div>
            <div className="other-content">
              <span className="other-tagline">Setting the gold standard in infection prevention</span>
              <h3 className="other-title">Central Sterile Supply</h3>
              <p className="other-text">
                Operating the CSSD (Central Sterile Supply Department) — sterilizing, processing, and distributing all surgical instruments and medical equipment to prevent infections.
              </p>
              <p className="other-text">
                The Central Sterile Supply Department (CSSD) is a critical hub in our hospital's infection control framework. Every surgical instrument, medical device, and supply item undergoes rigorous cleaning, disinfection, and sterilization before reaching clinical areas. Our trained technicians follow international sterilization standards, using advanced autoclaves, chemical indicators, and biological monitoring to guarantee absolute safety.
              </p>
              <div className="other-features">
                <div className="other-feature"><i className="fas fa-check-circle" /> Surgical instrument decontamination &amp; sterilization</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Assembly &amp; packaging of surgical sets</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Sterilization monitoring &amp; quality control</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Inventory management of sterile supplies</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Emergency instrument processing</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Endoscope reprocessing &amp; care</div>
              </div>
              <div className="other-stats">
                <div className="other-stat">
                  <span className="other-stat-num">22</span>
                  <span className="other-stat-label">Team Members</span>
                </div>
                <div className="other-stat">
                  <span className="other-stat-num">50K+</span>
                  <span className="other-stat-label">Packs/Month</span>
                </div>
              </div>
            </div>
          </div>

          <div className="other-layout other-layout--reverse">
            <div className="other-image">
              <RotatingImage images={['https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80', 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80', 'https://images.unsplash.com/photo-1581595219747-8f5a12e3ae3e?w=600&q=80']} alt="" />
            </div>
            <div className="other-content">
              <span className="other-tagline">Protecting our community through responsible waste management</span>
              <h3 className="other-title">Biomedical Waste</h3>
              <p className="other-text">
                Safe collection, treatment, and disposal of biomedical waste in compliance with regulations.
              </p>
              <p className="other-text">
                The Biomedical Waste Management department plays a vital role in safeguarding public health and the environment. Our trained professionals handle the safe collection, segregation, transportation, treatment, and disposal of all categories of medical waste — from infectious and pathological waste to sharps and pharmaceutical waste. We strictly adhere to national and international environmental regulations.
              </p>
              <div className="other-features">
                <div className="other-feature"><i className="fas fa-check-circle" /> Waste segregation at source</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Safe collection &amp; on-site transport</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Autoclave &amp; incineration treatment</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Sharps disposal &amp; management</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Chemical &amp; pharmaceutical waste handling</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Regulatory compliance &amp; reporting</div>
              </div>
              <div className="other-stats">
                <div className="other-stat">
                  <span className="other-stat-num">12</span>
                  <span className="other-stat-label">Team Members</span>
                </div>
                <div className="other-stat">
                  <span className="other-stat-num">100%</span>
                  <span className="other-stat-label">Compliance Rate</span>
                </div>
              </div>
            </div>
          </div>

          <div className="other-layout">
            <div className="other-image">
              <RotatingImage images={['https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80', 'https://images.unsplash.com/photo-1473177104440-ffee2f3760f9?w=600&q=80', 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600&q=80']} alt="" />
            </div>
            <div className="other-content">
              <span className="other-tagline">Nurturing the spirit, comforting the soul</span>
              <h3 className="other-title">Chaplaincy</h3>
              <p className="other-text">
                Providing spiritual care, emotional counseling, and faith-based support to patients and families.
              </p>
              <p className="other-text">
                Our Chaplaincy department provides spiritual and emotional care to patients, families, and staff, honoring the faith-based heritage of Christian Hospital. Our board-certified chaplains offer prayer, counseling, sacraments, and grief support — walking alongside individuals during times of illness, uncertainty, and loss. We respect all faith traditions and provide compassionate presence to all, regardless of belief.
              </p>
              <div className="other-features">
                <div className="other-feature"><i className="fas fa-check-circle" /> Bedside spiritual counseling &amp; prayer</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Crisis intervention &amp; trauma support</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Grief &amp; bereavement counseling</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Sacramental ministry &amp; worship services</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Family support &amp; end-of-life care</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Staff wellness &amp; spiritual retreats</div>
              </div>
              <div className="other-stats">
                <div className="other-stat">
                  <span className="other-stat-num">8</span>
                  <span className="other-stat-label">Team Members</span>
                </div>
                <div className="other-stat">
                  <span className="other-stat-num">10K+</span>
                  <span className="other-stat-label">Sessions/Year</span>
                </div>
              </div>
            </div>
          </div>

          <div className="other-layout other-layout--reverse">
            <div className="other-image">
              <RotatingImage images={['https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80', 'https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=600&q=80', 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80']} alt="" />
            </div>
            <div className="other-content">
              <span className="other-tagline">Clean linens, safe environment, comfort for all</span>
              <h3 className="other-title">Laundry</h3>
              <p className="other-text">
                Industrial-scale linen processing with strict infection control protocols for patient safety.
              </p>
              <p className="other-text">
                The Laundry department operates a state-of-the-art industrial laundry facility that processes all linen, bedding, surgical gowns, and staff uniforms used throughout Christian Hospital. Our team follows strict infection control protocols, using high-temperature washing, medical-grade detergents, and specialized segregation systems to ensure every fabric item meets rigorous hygiene standards before reaching patients and staff.
              </p>
              <div className="other-features">
                <div className="other-feature"><i className="fas fa-check-circle" /> Industrial-scale linen processing &amp; finishing</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Surgical gown &amp; scrub laundry services</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Patient bedding &amp; towel management</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Uniform cleaning &amp; maintenance</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Infection control laundry protocols</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Linen inventory &amp; distribution management</div>
              </div>
              <div className="other-stats">
                <div className="other-stat">
                  <span className="other-stat-num">18</span>
                  <span className="other-stat-label">Team Members</span>
                </div>
                <div className="other-stat">
                  <span className="other-stat-num">15T/wk</span>
                  <span className="other-stat-label">Laundry Volume</span>
                </div>
              </div>
            </div>
          </div>

          <div className="other-layout">
            <div className="other-image">
              <RotatingImage images={['https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80', 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80', 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80']} alt="" />
            </div>
            <div className="other-content">
              <span className="other-tagline">Keeping our hospital running smoothly every day</span>
              <h3 className="other-title">Maintenance</h3>
              <p className="other-text">
                Ensuring continuous operation of all hospital infrastructure and medical systems.
              </p>
              <p className="other-text">
                The Maintenance &amp; Engineering department ensures that Christian Hospital's entire physical infrastructure operates safely, efficiently, and without interruption. Our skilled team of engineers, electricians, plumbers, and HVAC technicians manages all building systems — from power supply and medical gas pipelines to heating, ventilation, and air conditioning. Preventive maintenance schedules and rapid response protocols keep the hospital environment optimal for healing.
              </p>
              <div className="other-features">
                <div className="other-feature"><i className="fas fa-check-circle" /> Electrical power systems &amp; backup generators</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> HVAC systems &amp; environmental control</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Plumbing &amp; medical gas pipeline systems</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Fire safety &amp; life safety systems</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Building &amp; structural maintenance</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Preventive maintenance scheduling</div>
              </div>
              <div className="other-stats">
                <div className="other-stat">
                  <span className="other-stat-num">28</span>
                  <span className="other-stat-label">Team Members</span>
                </div>
                <div className="other-stat">
                  <span className="other-stat-num">99.5%</span>
                  <span className="other-stat-label">Systems Uptime</span>
                </div>
              </div>
            </div>
          </div>

          <div className="other-layout other-layout--reverse">
            <div className="other-image">
              <RotatingImage images={['https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80']} alt="" />
            </div>
            <div className="other-content">
              <span className="other-tagline">Moving patients and supplies with speed and care</span>
              <h3 className="other-title">Transport</h3>
              <p className="other-text">
                Inter-departmental patient transport, ambulance services, and medical equipment logistics.
              </p>
              <p className="other-text">
                The Transport department provides essential mobility services across the entire hospital campus. Our team ensures that patients are safely and comfortably moved between departments — from emergency intake to radiology, surgery, or inpatient wards. We also manage the logistics of medical equipment, laboratory specimens, pharmaceuticals, and supplies, ensuring that nothing delays timely patient care.
              </p>
              <div className="other-features">
                <div className="other-feature"><i className="fas fa-check-circle" /> Inter-departmental patient transport</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Emergency &amp; ambulance services</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Medical equipment &amp; supply logistics</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Laboratory specimen &amp; report courier</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Pharmaceutical distribution runs</div>
                <div className="other-feature"><i className="fas fa-check-circle" /> Wheelchair &amp; stretcher management</div>
              </div>
              <div className="other-stats">
                <div className="other-stat">
                  <span className="other-stat-num">24</span>
                  <span className="other-stat-label">Team Members</span>
                </div>
                <div className="other-stat">
                  <span className="other-stat-num">1,200+</span>
                  <span className="other-stat-label">Transports/Day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selected && (
        <ServiceDetail
          service={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}

export default ServicesPage
