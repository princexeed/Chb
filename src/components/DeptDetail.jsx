import React, { useEffect } from 'react'
import './DeptDetail.css'

const deptDetails = [
  {
    name: 'Administration & Finance',
    icon: 'fa-chart-pie',
    tagline: 'Stewarding resources for exceptional healthcare delivery',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
      'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&q=80',
    ],
    longDesc: 'Our Administration & Finance department forms the backbone of hospital operations, ensuring that every resource is managed with integrity, transparency, and strategic foresight. From budgeting and financial planning to billing, payroll, and procurement, this team works diligently to maintain the financial health of the institution so that clinical departments can focus entirely on patient care.',
    features: [
      'Financial planning & budget management',
      'Patient billing & insurance coordination',
      'Payroll & human resources administration',
      'Procurement & supply chain management',
      'Strategic planning & business development',
      'Regulatory compliance & audit management',
    ],
    stats: { team: 45, metric: '₦2.5B+', metricLabel: 'Annual Budget Managed' },
    highlights: 'Revenue cycle management, Insurance claims processing, Grant administration, Vendor contracts',
  },
  {
    name: 'Medical Records',
    icon: 'fa-notes-medical',
    tagline: 'Preserving your health story with accuracy and confidentiality',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80',
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
    ],
    longDesc: 'The Medical Records department is responsible for the accurate documentation, storage, and retrieval of all patient health information. Using state-of-the-art Electronic Health Record (EHR) systems, our team ensures that every diagnosis, treatment, and outcome is meticulously recorded and securely maintained — enabling seamless continuity of care while strictly protecting patient confidentiality.',
    features: [
      'Electronic Health Record (EHR) management',
      'Patient data registration & verification',
      'Medical coding & classification (ICD, CPT)',
      'Records storage & secure archiving',
      'Release of information & patient access',
      'Data quality assurance & compliance',
    ],
    stats: { team: 30, metric: '150K+', metricLabel: 'Records Managed Annually' },
    highlights: 'EHR system administration, HIPAA compliance, Medical transcription, Data analytics & reporting',
  },
  {
    name: 'Chaplaincy',
    icon: 'fa-cross',
    tagline: 'Nurturing the spirit, comforting the soul',
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&q=80',
      'https://images.unsplash.com/photo-1473177104440-ffee2f3760f9?w=600&q=80',
      'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600&q=80',
    ],
    longDesc: 'Our Chaplaincy department provides spiritual and emotional care to patients, families, and staff, honoring the faith-based heritage of Christian Hospital. Our board-certified chaplains offer prayer, counseling, sacraments, and grief support — walking alongside individuals during times of illness, uncertainty, and loss. We respect all faith traditions and provide compassionate presence to all, regardless of belief.',
    features: [
      'Bedside spiritual counseling & prayer',
      'Crisis intervention & trauma support',
      'Grief & bereavement counseling',
      'Sacramental ministry & worship services',
      'Family support & end-of-life care',
      'Staff wellness & spiritual retreats',
    ],
    stats: { team: 8, metric: '10K+', metricLabel: 'Counseling Sessions per Year' },
    highlights: '24/7 on-call chaplaincy, Multi-faith support, Grief support groups, Memorial services',
  },
  {
    name: 'Support Services',
    icon: 'fa-headset',
    tagline: 'Your first point of contact, your lifelong partner in care',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
      'https://images.unsplash.com/photo-1560252829-804f1aedf1be?w=600&q=80',
    ],
    longDesc: 'Support Services is the welcoming face of Christian Hospital — a dedicated team of patient navigators, receptionists, and coordinators who ensure that every patient\'s journey begins and ends with ease. From appointment scheduling and registration to discharge coordination and follow-up care, our team provides warm, efficient, and personalized assistance at every touchpoint.',
    features: [
      'Appointment scheduling & management',
      'Patient registration & admission',
      'Discharge planning & coordination',
      'Insurance verification & assistance',
      'Patient feedback & complaint resolution',
      'Language interpretation services',
    ],
    stats: { team: 35, metric: '200K+', metricLabel: 'Patient Interactions per Year' },
    highlights: '24/7 help desk, Multi-language support, Patient navigation, Telehealth coordination',
  },
  {
    name: 'Central Sterile Supply',
    icon: 'fa-jar',
    tagline: 'Setting the gold standard in infection prevention',
    image: 'https://images.unsplash.com/photo-1581595219747-8f5a12e3ae3e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1581595219747-8f5a12e3ae3e?w=600&q=80',
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80',
    ],
    longDesc: 'The Central Sterile Supply Department (CSSD) is a critical hub in our hospital\'s infection control framework. Every surgical instrument, medical device, and supply item undergoes rigorous cleaning, disinfection, and sterilization before reaching clinical areas. Our trained technicians follow international sterilization standards, using advanced autoclaves, chemical indicators, and biological monitoring to guarantee absolute safety.',
    features: [
      ' Surgical instrument decontamination & sterilization',
      'Assembly & packaging of surgical sets',
      'Sterilization monitoring & quality control',
      'Inventory management of sterile supplies',
      'Emergency instrument processing',
      'Endoscope reprocessing & care',
    ],
    stats: { team: 22, metric: '50K+', metricLabel: 'Sterile Packs Processed/Month' },
    highlights: 'Autoclave sterilization, EtO sterilization, Biological indicator testing, Traceability system',
  },
  {
    name: 'Laundry',
    icon: 'fa-shirt',
    tagline: 'Clean linens, safe environment, comfort for all',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=600&q=80',
      'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80',
      'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80',
    ],
    longDesc: 'The Laundry department operates a state-of-the-art industrial laundry facility that processes all linen, bedding, surgical gowns, and staff uniforms used throughout Christian Hospital. Our team follows strict infection control protocols, using high-temperature washing, medical-grade detergents, and specialized segregation systems to ensure every fabric item meets rigorous hygiene standards before reaching patients and staff.',
    features: [
      'Industrial-scale linen processing & finishing',
      'Surgical gown & scrub laundry services',
      'Patient bedding & towel management',
      'Uniform cleaning & maintenance',
      'Infection control laundry protocols',
      'Linen inventory & distribution management',
    ],
    stats: { team: 18, metric: '15 tons/wk', metricLabel: 'Laundry Processed' },
    highlights: 'High-temperature disinfection, Color-coded segregation, Linen lifecycle management, Emergency surge capacity',
  },
  {
    name: 'Biomedical Waste',
    icon: 'fa-shield-hazard',
    tagline: 'Protecting our community through responsible waste management',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80',
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
      'https://images.unsplash.com/photo-1581595219747-8f5a12e3ae3e?w=600&q=80',
    ],
    longDesc: 'The Biomedical Waste Management department plays a vital role in safeguarding public health and the environment. Our trained professionals handle the safe collection, segregation, transportation, treatment, and disposal of all categories of medical waste — from infectious and pathological waste to sharps and pharmaceutical waste. We strictly adhere to national and international environmental regulations.',
    features: [
      'Waste segregation at source',
      'Safe collection & on-site transport',
      'Autoclave & incineration treatment',
      'Sharps disposal & management',
      'Chemical & pharmaceutical waste handling',
      'Regulatory compliance & reporting',
    ],
    stats: { team: 12, metric: '100%', metricLabel: 'Regulatory Compliance Rate' },
    highlights: 'WHO-compliant protocols, Staff training programs, Environmental monitoring, Waste reduction initiatives',
  },
  {
    name: 'Maintenance',
    icon: 'fa-wrench',
    tagline: 'Keeping our hospital running smoothly, every day',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80',
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80',
    ],
    longDesc: 'The Maintenance & Engineering department ensures that Christian Hospital\'s entire physical infrastructure operates safely, efficiently, and without interruption. Our skilled team of engineers, electricians, plumbers, and HVAC technicians manages all building systems — from power supply and medical gas pipelines to heating, ventilation, and air conditioning. Preventive maintenance schedules and rapid response protocols keep the hospital environment optimal for healing.',
    features: [
      'Electrical power systems & backup generators',
      'HVAC systems & environmental control',
      'Plumbing & medical gas pipeline systems',
      'Fire safety & life safety systems',
      'Building & structural maintenance',
      'Preventive maintenance scheduling',
    ],
    stats: { team: 28, metric: '99.5%', metricLabel: 'Systems Uptime Rate' },
    highlights: '24/7 emergency repairs, Energy efficiency programs, Medical equipment calibration, Facility upgrades',
  },
  {
    name: 'Transport',
    icon: 'fa-truck-medical',
    tagline: 'Moving patients and supplies with speed and care',
    image: 'https://images.unsplash.com/photo-1587745416684-47953f16fdd1?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1587745416684-47953f16fdd1?w=600&q=80',
      'https://images.unsplash.com/photo-1579684288337-4c1a6c81e26b?w=600&q=80',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
    ],
    longDesc: 'The Transport department provides essential mobility services across the entire hospital campus. Our team ensures that patients are safely and comfortably moved between departments — from emergency intake to radiology, surgery, or inpatient wards. We also manage the logistics of medical equipment, laboratory specimens, pharmaceuticals, and supplies, ensuring that nothing delays timely patient care.',
    features: [
      'Inter-departmental patient transport',
      'Emergency & ambulance services',
      'Medical equipment & supply logistics',
      'Laboratory specimen & report courier',
      'Pharmaceutical distribution runs',
      'Wheelchair & stretcher management',
    ],
    stats: { team: 24, metric: '1,200+', metricLabel: 'Transports per Day' },
    highlights: 'Fleet of 6 ambulances, GPS-tracked logistics, Priority response system, 24/7 coverage',
  },
]

function getDeptByName(name) {
  return deptDetails.find(d => d.name === name)
}

function DeptDetail({ department, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!department) return null

  const detail = getDeptByName(department.name)
  if (!detail) return null

  return (
    <div className="dept-overlay" onClick={onClose}>
      <div className="dept-modal" onClick={(e) => e.stopPropagation()}>
        <button className="dept-modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fas fa-times" />
        </button>

        {/* Hero Image */}
        <div className="dept-modal-hero">
          <img src={detail.image} alt={detail.name} />
          <div className="dept-modal-hero-overlay" />
          <div className="dept-modal-hero-content">
            <div className="dept-modal-hero-icon">
              <i className={`fas ${detail.icon}`} />
            </div>
            <h2 className="dept-modal-hero-title">{detail.name}</h2>
            <p className="dept-modal-hero-tagline">{detail.tagline}</p>
          </div>
        </div>

        <div className="dept-modal-body">
          {/* Stats Bar */}
          <div className="dept-modal-stats">
            <div className="dept-modal-stat">
              <span className="dept-modal-stat-number">{detail.stats.team}</span>
              <span className="dept-modal-stat-label">Team Members</span>
            </div>
            <div className="dept-modal-stat">
              <span className="dept-modal-stat-number">{detail.stats.metric}</span>
              <span className="dept-modal-stat-label">{detail.stats.metricLabel}</span>
            </div>
            <div className="dept-modal-stat">
              <span className="dept-modal-stat-number">
                <i className="fas fa-clock" style={{ fontSize: '1rem' }} />
              </span>
              <span className="dept-modal-stat-label">24/7 Operations</span>
            </div>
          </div>

          {/* Description */}
          <div className="dept-modal-section">
            <h3 className="dept-modal-section-title">Overview</h3>
            <p className="dept-modal-text">{detail.longDesc}</p>
          </div>

          {/* Image Gallery */}
          <div className="dept-modal-gallery">
            {detail.images.map((img, i) => (
              <div key={i} className="dept-modal-gallery-img">
                <img src={img} alt={`${detail.name} - Image ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="dept-modal-section">
            <h3 className="dept-modal-section-title">Key Responsibilities</h3>
            <div className="dept-modal-features">
              {detail.features.map((feature, i) => (
                <div key={i} className="dept-modal-feature">
                  <i className="fas fa-check-circle" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="dept-modal-section">
            <h3 className="dept-modal-section-title">Highlights &amp; Capabilities</h3>
            <div className="dept-modal-highlights">
              {detail.highlights.split(', ').map((item, i) => (
                <span key={i} className="dept-modal-highlight-tag">{item}</span>
              ))}
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default DeptDetail
