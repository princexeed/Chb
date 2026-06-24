import React, { useState, useEffect } from 'react'
import './AboutPage.css'

const milestones = [
  { year: '1954', title: 'The Humble Beginning', icon: 'fa-seedling', desc: 'Dr. Elizabeth Madsen, a lady doctor from Denmark, heard of the huge health needs in this region and came to begin work on the verandah of the Church. She trained local people to take on the various tasks needed in a small hospital, all the while going out to nodal villages to ensure access to care.', color: '#059669' },
  { year: '1975', title: 'Search for New Leadership', icon: 'fa-compass', desc: 'After leading the institution for 22 years with support from the Danish Missionary Society, the mission support was ending. Dr. Madsen decided to search for new leadership that could run the hospital independently, so that it would stand on its own feet without external support.', color: '#0d9488' },
  { year: '1976', title: 'Dr. Henry & Nancy Arrive', icon: 'fa-user-plus', desc: 'Dr. Virendra Kumar Henry, a Surgeon from Chhattisgarh, and his wife Nancy Henry, an American Nurse, came to CHB. A Community Health Project was also started covering 90 Adivasi villages in 3 Gram Panchayats, ensuring access to care for the most remote communities.', color: '#0891b2' },
  { year: '1978', title: 'School of Nursing Founded', icon: 'fa-graduation-cap', desc: 'CHB started a School of Nursing, recognised by the Indian Nursing Council, to train ANM\'s for Orissa. This marked the beginning of CHB\'s commitment to holistic training and capacity building in the region.', color: '#2563eb' },
  { year: '1980', title: 'Dakulguda Health Project', icon: 'fa-heart', desc: 'A second Community Health Project was started by the Nursing Department in Dakulguda village, extending CHB\'s reach to even more remote tribal communities in need of basic healthcare.', color: '#7c3aed' },
  { year: '1986', title: 'English Medium School', icon: 'fa-school', desc: 'An English Medium School was opened on campus to help attract and retain professional staff and to provide the crucial catalytic influence of quality education for a region that needs strategic inputs.', color: '#dc2626' },
  { year: '1988', title: 'Dr. Madsen Returns to Denmark', icon: 'fa-plane-departure', desc: 'Dr. Elizabeth Madsen returned to Denmark after 34 years of tireless service. She died in 1991, leaving behind a legacy of compassion and a thriving institution that continues to serve thousands.', color: '#d97706' },
  { year: '1994', title: 'MITRA Founded', icon: 'fa-sitemap', desc: 'The Community Health work of the hospital was revamped and refocused under the operational name MITRA — Madsen Institute for Tribal & Rural Advancement, named in honour of the founder.', color: '#2563eb' },
  { year: '1996', title: 'General Nursing Programme', icon: 'fa-book-medical', desc: 'The General Nursing Programme was added to the School of Nursing, expanding CHB\'s capacity to train comprehensive nursing professionals for the region.', color: '#0891b2' },
  { year: '1998', title: 'New Leadership & Mitra School', icon: 'fa-house-chimney', desc: 'Dr. Henry handed over charge to Dr. Padmashree Sahu, his Obstetrician colleague since 1977. The same year, the Mitra Residential School at Kachapaju was opened — a residential primary school for children of 16 hill-tribe villages, jointly managed with Malkondh Anchalika Sangha.', color: '#7c3aed' },
  { year: '2004', title: 'Golden Jubilee – 50 Years', icon: 'fa-cake-candles', desc: 'CHB celebrated its Golden Jubilee — 50 years of service in the heart of need. From a single bed on a church verandah to a thriving hospital, the journey was a testament to faith and perseverance.', color: '#dc2626' },
  { year: '2009', title: 'Mother & Child Care Centre', icon: 'fa-baby', desc: 'Between 2005 and 2009, CHB built a new Mother and Child Care Centre to respond to the escalating Obstetric & Neonatal needs. A new Administrative Block was also constructed. The hospital grew to a 200-bedded capacity during this period.', color: '#d97706' },
  { year: '2011', title: 'Dr. Hemaprabha Mohanty', icon: 'fa-user-md', desc: 'Dr. Padmashree Sahu handed over charge to Dr. Hemaprabha Mohanty, consultant Ophthalmologist, who became the 4th Medical Superintendent of CHB, continuing the legacy of dedicated leadership.', color: '#2563eb' },
  { year: '2021', title: 'Dr. John Cherian Oommen', icon: 'fa-shield-heart', desc: 'Dr. John Cherian Oommen assumed charge as the 5th Medical Superintendent. Under his leadership, CHB sailed through the uncertain COVID-19 waves miraculously, protecting patients and staff alike.', color: '#0d9488' },
  { year: '2024', title: 'Dr. Sunil Chander Jiwanmall', icon: 'fa-user-md', desc: 'Dr. Sunil Chander Jiwanmall assumed charge as the 6th Medical Superintendent, continuing the legacy of compassionate, cost-effective healthcare.', color: '#2563eb' },
  { year: '2024', title: '70 Years of Service', icon: 'fa-star', desc: 'Today, CHB stands as a 200-bedded, multispeciality mission hospital in a remote tribal region, providing compassionate, cost-effective healthcare, holistic training in nursing & community health, and quality education in Kuvi, Oriya & English — a true beacon of hope.', color: '#059669' },
]

const superintendents = [
  {
    name: 'Dr. Elizabeth Madsen',
    role: 'Founder & 1st Medical Superintendent',
    period: '1954 – 1975',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80',
    desc: 'A lady doctor from Denmark who heard of the huge health needs in this region and came to begin work on the verandah of the Church.',
    fullImg: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
    fullBio: 'Dr. Elizabeth Madsen was a visionary Danish physician who heard of the immense healthcare needs in the remote tribal regions of Odisha and felt called to serve. In 1954, she arrived with little more than her medical training and her faith, setting up practice on the verandah of a local church. She trained local people to take on hospital tasks and travelled tirelessly to nodal villages, ensuring healthcare reached the most remote communities. For 22 years she led the fledgling institution with unwavering dedication, supported by the Danish Missionary Society. In 1975, recognizing that mission support was ending, she selflessly searched for new leadership to ensure the hospital\'s survival — a true act of foresight and love for the people she served.',
    origin: 'Denmark',
    contributions: [
      'Founded CHB in 1954 — started on a church verandah with a single bed',
      'Trained local people to take on all hospital tasks, building local capacity',
      'Conducted outreach to nodal villages, ensuring access to care for remote communities',
      'Led the institution for 22 years with support from Danish Missionary Society',
      'Selflessly searched for new leadership in 1975 to ensure the hospital\'s future',
    ],
    stats: { yearsServed: '22', villagesReached: '90+', founded: '1954' },
  },
  {
    name: 'Dr. Virendra K. Henry',
    role: '2nd Medical Superintendent',
    period: '1976 – 1998',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80',
    desc: 'A Surgeon from Chhattisgarh who, with his wife Nancy Henry, led CHB through 22 years of vision and building.',
    fullImg: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
    fullBio: 'Dr. Virendra Kumar Henry, a skilled Surgeon from Chhattisgarh, arrived at CHB in 1976 with his wife Nancy Henry, an American Nurse. They took over at a critical juncture when the Danish mission support was being scaled down annually. Within 4 years, Dr. Henry and his team reached the point of self-sufficiency. What followed was a blur of growth and expansion over 22 years — a School of Nursing, Community Health Projects, an English Medium School, and the founding of MITRA. His leadership transformed CHB from a mission-dependent clinic into a self-sustaining institution.',
    origin: 'Chhattisgarh, India',
    contributions: [
      'Achieved self-sufficiency within 4 years of taking over',
      'Founded the School of Nursing in 1978, recognised by INC',
      'Started Community Health Projects covering 90+ Adivasi villages',
      'Opened the English Medium School on campus in 1986',
      'Revamped community health as MITRA in 1994',
    ],
    stats: { yearsServed: '22', projectsStarted: '5', bedCapacity: '100' },
  },
  {
    name: 'Dr. Padmashree Sahu',
    role: '3rd Medical Superintendent',
    period: '1998 – 2011',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80',
    desc: 'An Obstetrician colleague since 1977 who led CHB through 13 years of busy growth and expansion.',
    fullImg: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80',
    fullBio: 'Dr. Padmashree Sahu had been an Obstetrician at CHB since 1977, serving alongside Dr. Henry for over two decades before taking the helm in 1998. Under her leadership, CHB grew busier and busier as patient needs stretched the hospital\'s capacity. In 2004, she led the celebration of CHB\'s Golden Jubilee — 50 years of service. Between 2005 and 2009, she oversaw the construction of the new Mother and Child Care Centre and Administrative Block, expanding the hospital to 200-bedded capacity. Her 13-year tenure was marked by steady growth and an unwavering commitment to maternal and child health.',
    origin: 'Odisha, India',
    contributions: [
      'Led the Golden Jubilee celebrations in 2004 — 50 years of CHB',
      'Oversaw construction of Mother and Child Care Centre',
      'Expanded the hospital to 200-bed capacity',
      'Guided the hospital through a period of rapidly increasing patient numbers',
      'Built the new Administrative Block for better hospital management',
    ],
    stats: { yearsServed: '13', bedsExpanded: '200', departments: '25+' },
  },
  {
    name: 'Dr. Hemaprabha Mohanty',
    role: '4th Medical Superintendent',
    period: '2011 – 2021',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80',
    desc: 'A consultant Ophthalmologist who became the 4th Medical Superintendent and led CHB through a decade of structural transformation.',
    fullImg: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
    fullBio: 'Dr. Hemaprabha Mohanty, a consultant Ophthalmologist with years of experience at CHB, took over as the 4th Medical Superintendent in 2011. Her decade of leadership witnessed a massive structural transformation of the campus — the Sholam building, a new Nursing college building, and a working women\'s hostel all came up during her tenure. She strengthened CHB\'s infrastructure to meet the growing needs of the region and ensured that the hospital\'s commitment to compassionate, cost-effective care remained at the heart of every decision.',
    origin: 'Odisha, India',
    contributions: [
      'Oversaw construction of the Sholam building',
      'Built the new Nursing college building',
      'Established the working women\'s hostel on campus',
      'Strengthened hospital infrastructure for growing patient needs',
      'Maintained CHB\'s commitment to compassionate, cost-effective care',
    ],
    stats: { yearsServed: '10', buildingsBuilt: '3', nursingGraduates: '500+' },
  },
  {
    name: 'Dr. John Cherian Oommen',
    role: '5th Medical Superintendent',
    period: '2021 – 2024',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
    desc: 'The 5th Medical Superintendent who navigated CHB through the COVID-19 waves and continued the legacy.',
    fullImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    fullBio: 'Dr. John Cherian Oommen assumed charge as the 5th Medical Superintendent of CHB in 2021, taking the helm during one of the most challenging periods in global healthcare history. Under his leadership, CHB sailed through the uncertain COVID-19 waves miraculously, protecting both patients and staff while continuing to serve the community. He led a 200-bedded multispeciality mission hospital that provides compassionate, cost-effective healthcare, holistic training in nursing and community health, and quality education in Kuvi, Oriya and English to the remote tribal region.',
    origin: 'Kerala, India',
    contributions: [
      'Navigated CHB through the COVID-19 pandemic successfully',
      'Continued to expand services for the remote tribal community',
      'Strengthened CHB\'s role as a multispeciality mission hospital',
      'Upheld the legacy of compassionate, cost-effective healthcare',
      'Led a team serving thousands of patients annually',
    ],
    stats: { yearsServed: '3', leadership: 'COVID', legacy: '200-bed' },
  },
  {
    name: 'Dr. Sunil Chander Jiwanmall',
    role: '6th Medical Superintendent',
    period: '2024 – Present',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80',
    desc: 'The current Medical Superintendent who leads CHB with vision and dedication, continuing the legacy of compassionate care.',
    fullImg: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
    fullBio: 'Dr. Sunil Chander Jiwanmall assumed charge as the 6th Medical Superintendent of CHB, taking the helm with a commitment to compassionate, cost-effective healthcare. You can update this bio later.',
    origin: 'India',
    contributions: [
      'Leads CHB with vision and dedication',
      'Continues the legacy of compassionate healthcare',
      'Serving the remote tribal community',
    ],
    stats: { currentBeds: '200', focus: 'Compassion', legacy: '70+ Years' },
  },
]

function SuperintendentModal({ leader, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="about-founder-overlay" onClick={onClose}>
      <div className="about-founder-modal" onClick={(e) => e.stopPropagation()}>
        <button className="about-founder-close" onClick={onClose} aria-label="Close modal">
          <i className="fas fa-times" />
        </button>

        <div className="about-founder-modal-hero">
          <img src={leader.fullImg} alt={leader.name} />
          <div className="about-founder-modal-hero-overlay" />
          <div className="about-founder-modal-hero-content">
            <div className="about-founder-modal-hero-avatar">
              <img src={leader.img} alt={leader.name} />
            </div>
            <h2 className="about-founder-modal-hero-title">{leader.name}</h2>
            <span className="about-founder-modal-hero-role">{leader.role}</span>
            <div className="about-founder-modal-hero-years">
              <i className="fas fa-calendar" />
              {leader.period} &nbsp;·&nbsp; <i className="fas fa-globe" /> {leader.origin}
            </div>
          </div>
        </div>

        <div className="about-founder-modal-body">
          <div className="about-founder-stats">
            {Object.entries(leader.stats).map(([key, val]) => (
              <div key={key} className="about-founder-stat">
                <span className="about-founder-stat-number">{val}</span>
                <span className="about-founder-stat-label">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}
                </span>
              </div>
            ))}
          </div>

          <div className="about-founder-section">
            <h3 className="about-founder-section-title">
              <i className="fas fa-book-open" />
              Biography
            </h3>
            <p className="about-founder-text">{leader.fullBio}</p>
          </div>

          <div className="about-founder-section">
            <h3 className="about-founder-section-title">
              <i className="fas fa-trophy" />
              Key Contributions
            </h3>
            <div className="about-founder-contributions">
              {leader.contributions.map((item, i) => (
                <div key={i} className="about-founder-contribution">
                  <span className="about-founder-contribution-num">{(i + 1).toString().padStart(2, '0')}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AboutPage() {
  const [selectedLeader, setSelectedLeader] = useState(null)

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-page-hero">
        <div className="about-page-hero-bg" />
        <div className="about-page-hero-overlay" />
        <div className="about-page-hero-content">
          <span className="about-page-badge">Our Story</span>
          <h1 className="about-page-title">
            From a Church Verandah
            <br />
            <span className="about-page-highlight">To 70 Years of Healing</span>
          </h1>
          <p className="about-page-subtitle">
            The inspiring journey of Christian Hospital Bissumcuttack — from a single bed 
            on a church verandah in 1954 to a 200-bed multispeciality mission hospital — 
            built on faith, perseverance, and the dedication of countless individuals.
          </p>
        </div>
        <div className="about-page-scroll">
          <span>Explore Our Journey</span>
          <i className="fas fa-chevron-down" />
        </div>
      </section>

      {/* Founding Vision */}
      <section className="about-page-vision">
        <div className="container">
          <div className="about-page-vision-grid">
            <div className="about-page-vision-text">
              <span className="section-tag">The Beginning</span>
              <h2 className="section-title">A Seed Planted in Faith</h2>
              <p>
                It all began in <strong>1954</strong>, when a lady doctor from Denmark, 
                <strong> Dr. Elizabeth Madsen</strong>, heard of the huge health needs in this region 
                and came out to begin work on the verandah of the Church. With a single bed, 
                basic medicines, and an unwavering faith, she began serving the sick.
              </p>
              <p>
                She trained local people to take on the various tasks needed in a small hospital, 
                all the while going out to nodal villages in the region to ensure access to care. 
                For 22 years, she led the fledgling institution with the support of the 
                Danish Missionary Society.
              </p>
              <p>
                But by the mid-70s, the mission taps were running dry. Rather than let this vital 
                lifeline close, Dr. Madsen searched for new leadership that could run the hospital 
                independently. <strong>Thus came Dr. Virendra Kumar Henry and his wife Nancy Henry</strong> — 
                and CHB's journey of self-sufficiency and growth began.
              </p>
            </div>
            <div className="about-page-vision-stats">
              <div className="about-page-stat-card">
                <span className="about-page-stat-num">1954</span>
                <span className="about-page-stat-label">Year Founded</span>
              </div>
              <div className="about-page-stat-card">
                <span className="about-page-stat-num">70+</span>
                <span className="about-page-stat-label">Years of Service</span>
              </div>
              <div className="about-page-stat-card">
                <span className="about-page-stat-num">1 → 200</span>
                <span className="about-page-stat-label">Bed Capacity Growth</span>
              </div>
              <div className="about-page-stat-card">
                <span className="about-page-stat-num">6</span>
                <span className="about-page-stat-label">Medical Superintendents</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Superintendents */}
      <section className="about-page-founders">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Leaders</span>
            <h2 className="section-title">The Six Medical Superintendents</h2>
            <p className="section-subtitle">
              Click on each leader to learn their story — the visionaries who have guided CHB 
              from a church verandah to a thriving hospital over seven decades.
            </p>
          </div>
          <div className="about-page-founders-grid">
            {superintendents.map((leader, i) => (
              <div key={i} className="about-page-founder-card" onClick={() => setSelectedLeader(leader)}>
                <div className="about-page-founder-img">
                  <img src={leader.img} alt={leader.name} />
                </div>
                <h3 className="about-page-founder-name">{leader.name}</h3>
                <span className="about-page-founder-role">{leader.role}</span>
                <p className="about-page-founder-tenure">{leader.period}</p>
                <p className="about-page-founder-desc">{leader.desc}</p>
                <span className="about-page-founder-cta">
                  Read Full Story <i className="fas fa-arrow-right" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-page-timeline-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">CHB: Past to Present</h2>
            <p className="section-subtitle">
              A timeline of faith, growth, and service spanning over seven decades — from 1954 to today.
            </p>
          </div>
          <div className="about-page-timeline">
            {milestones.map((m, i) => (
              <div key={i} className={`about-page-milestone ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="about-page-milestone-dot" style={{ background: m.color }} />
                <div className="about-page-milestone-content" style={{ '--ml-color': m.color }}>
                  <div className="about-page-milestone-year" style={{ background: m.color }}>{m.year}</div>
                  <div className="about-page-milestone-icon">
                    <i className={`fas ${m.icon}`} />
                  </div>
                  <h3 className="about-page-milestone-title">{m.title}</h3>
                  <p className="about-page-milestone-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="about-page-legacy">
        <div className="container">
          <div className="about-page-legacy-content">
            <span className="about-page-legacy-badge">Our Legacy</span>
            <h2 className="about-page-legacy-title">Compassionate Care, Lasting Impact</h2>
            <p className="about-page-legacy-text">
              Over the years, CHB has grown from a single bed, single doctor initiative in 1954 
              to what it is today: a 200-bedded, multispeciality mission hospital in a remote tribal 
              region — providing compassionate, cost-effective healthcare, holistic training in nursing 
              and community health, and quality education in Kuvi, Oriya and English. A true beacon 
              of hope for thousands.
            </p>
            <div className="about-page-legacy-stats">
              <div className="about-page-legacy-stat">
                <span>70+</span>
                <small>Years of Service</small>
              </div>
              <div className="about-page-legacy-stat">
                <span>200</span>
                <small>Hospital Beds</small>
              </div>
              <div className="about-page-legacy-stat">
                <span>6</span>
                <small>Medical Superintendents</small>
              </div>
              <div className="about-page-legacy-stat">
                <span>3</span>
                <small>Educational Programmes</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Superintendent Modal */}
      {selectedLeader && (
        <SuperintendentModal leader={selectedLeader} onClose={() => setSelectedLeader(null)} />
      )}
    </div>
  )
}

export default AboutPage
