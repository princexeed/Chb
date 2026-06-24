import React from 'react'
import './TrainingPage.css'

const coreValues = [
  { icon: 'fa-hand-holding-heart', title: 'Caring', desc: 'Compassionate attention to the whole person — body, mind, and spirit.' },
  { icon: 'fa-heart', title: 'Compassion', desc: 'Empathetic response to the suffering and needs of others.' },
  { icon: 'fa-check-circle', title: 'Commitment', desc: 'Unwavering dedication to our students, patients, and community.' },
  { icon: 'fa-bullseye', title: 'Relevance', desc: 'Education and care that meets the real needs of our time and place.' },
  { icon: 'fa-medal', title: 'Excellence', desc: 'Striving for the highest standards in nursing education and practice.' },
  { icon: 'fa-handshake', title: 'Respect', desc: 'Honouring the dignity and worth of every person.' },
  { icon: 'fa-shield', title: 'Honesty', desc: 'Truthfulness and transparency in all our dealings.' },
  { icon: 'fa-gem', title: 'Integrity', desc: 'Moral and ethical consistency in thought, word, and action.' },
]

const strategies = [
  { icon: 'fa-user-graduate', text: 'Prepare professional nurses through high quality nursing education' },
  { icon: 'fa-stethoscope', text: 'Provide relevant and quality clinical experience' },
  { icon: 'fa-lightbulb', text: 'Establish innovative programs and nursing initiatives' },
  { icon: 'fa-users-gear', text: 'Offer leadership skills within the nursing profession and health care delivery system — mission, government, and others — national and international' },
  { icon: 'fa-tree', text: 'Creation of an atmosphere that supports our core values' },
  { icon: 'fa-church', text: 'Encourage our students and health team to function in the spirit of Christ' },
]

const objectives = [
  'Administer holistic health care to persons in the community and/or hospital',
  'Assist in health management and administration in the community/hospital',
  'Respond to the social and health needs of our country (especially our state)',
  'Be responsible citizens in society',
]

const courses = [
  {
    name: 'General Nursing & Midwifery (GNM)',
    duration: '3 Years',
    intake: '20 per batch',
    icon: 'fa-user-nurse',
    desc: 'A comprehensive nursing program preparing students for general nursing and midwifery practice in hospitals and community settings.',
    color: '#2563eb',
  },
  {
    name: 'B.Sc. Nursing',
    duration: '4 Years (8 Semesters)',
    intake: '20 per batch',
    icon: 'fa-graduation-cap',
    desc: 'A graduate program providing in-depth theoretical knowledge and clinical skills for professional nursing practice.',
    color: '#059669',
  },
]

const timeline = [
  { year: '1978', event: 'School of Nursing started by Mrs Nancy Jane Henry & Dr V K Henry with the 2-year ANM course — 7 students, no fees!' },
  { year: '1996', event: 'Three-year General Nursing & Midwifery (GNM) Course was started' },
  { year: '2018', event: 'Bachelor of Science in Nursing B.Sc.(N) — a 4-year graduate program — started with an annual intake of 20 students' },
]

function TrainingPage() {
  return (
    <div className="training-page">
      {/* Hero */}
      <section className="training-hero">
        <div className="training-hero-bg" />
        <div className="training-hero-overlay" />
        <div className="training-hero-content">
          <span className="training-badge">College of Nursing</span>
          <h1 className="training-title">
            Shaping the Next Generation
            <br />
            <span className="training-highlight">Of Nursing Professionals</span>
          </h1>
          <p className="training-subtitle">
            With guidance from Christ, integrity and commitment, we envision being the best 
            School of Nursing in developing nurses in, from and for Odisha — leading the 
            nursing profession to its highest level of excellence.
          </p>
        </div>
        <div className="training-scroll-indicator">
          <span>Discover More</span>
          <i className="fas fa-chevron-down" />
        </div>
      </section>

      {/* History */}
      <section className="training-section training-history">
        <div className="container">
          <div className="training-history-grid">
            <div className="training-history-text">
              <span className="section-tag">Our History</span>
              <h2 className="section-title">A Legacy of Nursing Education</h2>
              <p>
                The training of nurses at Christian Hospital, Bissamcuttack was envisaged by 
                <strong> Dr Elisabeth Madsen</strong>, Founder. The School of Nursing was started in 
                <strong> 1978</strong> by <strong>Mrs Nancy Jane Henry</strong> & 
                <strong> Dr V K Henry</strong> — the then Nursing Superintendent and Medical Superintendent.
              </p>
              <p>
                It was begun out of sheer need for good, trained nurses in and for this remote area. 
                The beginnings were made at a time when the finances were at an ebb and the hospital 
                under threat of closure due to financial crisis. The two-year Auxiliary Nurse Midwife 
                Course was started with <strong>seven students and no fees charged!</strong>
              </p>
              <p>
                The three-year General Nursing & Midwifery Course was started in 1996. In November 
                2018, the Bachelor of Science in Nursing B.Sc.(N) — a 4-year graduate program — 
                was started with an annual intake of 20 students per batch.
              </p>
            </div>
            <div className="training-history-visual">
              <div className="training-timeline-compact">
                {timeline.map((item, i) => (
                  <div key={i} className="training-timeline-item">
                    <div className="training-timeline-dot" />
                    <div className="training-timeline-card">
                      <span className="training-timeline-year">{item.year}</span>
                      <p>{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="training-section training-vm">
        <div className="container">
          <div className="training-vm-grid">
            <div className="training-vm-card training-vision">
              <div className="training-vm-icon">
                <i className="fas fa-eye" />
              </div>
              <h3>Vision Statement</h3>
              <p>
                With guidance from Christ, integrity and commitment, we envision being the best 
                School of Nursing in developing nurses in, from and for Odisha and to lead the 
                nursing profession to its highest level of excellence.
              </p>
            </div>
            <div className="training-vm-card training-mission">
              <div className="training-vm-icon">
                <i className="fas fa-bullseye" />
              </div>
              <h3>Mission</h3>
              <p>
                To provide leadership in the education of professional nurses (and others) to 
                function as health care providers who determine the delivery of nursing and 
                health in its practice and education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="training-section training-values">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Values</span>
            <h2 className="section-title">Core Values</h2>
            <p className="section-subtitle">
              These values give us direction and purpose — they are the foundation of everything we do.
            </p>
          </div>
          <div className="training-values-grid">
            {coreValues.map((val, i) => (
              <div key={i} className="training-value-card">
                <div className="training-value-icon">
                  <i className={`fas ${val.icon}`} />
                </div>
                <h3 className="training-value-title">{val.title}</h3>
                <p className="training-value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="training-section training-strategies">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Approach</span>
            <h2 className="section-title">Strategies</h2>
            <p className="section-subtitle">The guiding strategies that shape our educational approach.</p>
          </div>
          <div className="training-strategies-grid">
            {strategies.map((s, i) => (
              <div key={i} className="training-strategy-item">
                <div className="training-strategy-num">{(i + 1).toString().padStart(2, '0')}</div>
                <div className="training-strategy-icon">
                  <i className={`fas ${s.icon}`} />
                </div>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="training-section training-objectives">
        <div className="container">
          <div className="training-objectives-grid">
            <div className="training-objectives-text">
              <span className="section-tag">Goals</span>
              <h2 className="section-title">Objectives</h2>
              <p className="training-objectives-intro">
                We hope that on completion of the nursing course, our students will be able to:
              </p>
              <div className="training-objectives-list">
                {objectives.map((obj, i) => (
                  <div key={i} className="training-objective-item">
                    <i className="fas fa-check-circle" />
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="training-objectives-img">
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80"
                alt="Nursing students"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="training-section training-courses">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Programmes</span>
            <h2 className="section-title">Courses Offered</h2>
            <p className="section-subtitle">Two comprehensive nursing programmes designed to prepare competent, compassionate professionals.</p>
          </div>
          <div className="training-courses-grid">
            {courses.map((course, i) => (
              <div key={i} className="training-course-card" style={{ '--course-color': course.color }}>
                <div className="training-course-icon" style={{ background: `${course.color}15`, color: course.color }}>
                  <i className={`fas ${course.icon}`} />
                </div>
                <h3 className="training-course-name">{course.name}</h3>
                <p className="training-course-desc">{course.desc}</p>
                <div className="training-course-meta">
                  <div className="training-course-meta-item">
                    <i className="fas fa-clock" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="training-course-meta-item">
                    <i className="fas fa-users" />
                    <span>{course.intake}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliation & Eligibility */}
      <section className="training-section training-info">
        <div className="container">
          <div className="training-info-grid">
            <div className="training-info-card">
              <div className="training-info-header">
                <i className="fas fa-building-columns" />
                <h3>Affiliation</h3>
              </div>
              <ul className="training-info-list">
                <li>The GNM program is affiliated to the <strong>Mid India Board of Education (MIBE)</strong> of Nurses League of Christian Medical Association of India</li>
                <li>The B.Sc. Nursing program is affiliated to the <strong>Berhampur University</strong></li>
                <li>The College of Nursing is recognized by <strong>Indian Nursing Council</strong>, New Delhi</li>
                <li>Recognized by <strong>Odisha Nurses and Midwives Council</strong>, Bhubaneswar</li>
              </ul>
            </div>
            <div className="training-info-card">
              <div className="training-info-header">
                <i className="fas fa-clipboard-check" />
                <h3>Eligibility</h3>
              </div>
              <div className="training-eligibility">
                <div className="training-eligibility-item">
                  <span className="training-eligibility-badge">GNM</span>
                  <p>Plus two pass with minimum 40% <small>(5% concession for SC/ST candidates)</small></p>
                </div>
                <div className="training-eligibility-item">
                  <span className="training-eligibility-badge">B.Sc Nursing</span>
                  <p>Plus two Science pass with minimum 45% in Physics, Chemistry and Biology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hostel */}
      <section className="training-section training-hostel">
        <div className="container">
          <div className="training-hostel-grid">
            <div className="training-hostel-text">
              <span className="section-tag">Facilities</span>
              <h2 className="section-title">Hostel Facility for Nurses</h2>
              <p>
                There are over 200 single ladies in the nurses hostel — nursing students, nurses, 
                and teachers. The warden and the housekeeper ensure the smooth functioning of the 
                hostel, catering to the food and other needs of all those in the hostel.
              </p>
              <p>
                The hostel is a tight fit and we hope to get a few more rooms soon. We have been 
                able to start a <strong>biogas plant using food waste as feedstock</strong>. This gives 
                us some gas for cooking, effluent for a fantastic kitchen garden and interest for 
                us onlookers!
              </p>
              <div className="training-hostel-stats">
                <div className="training-hostel-stat">
                  <span>200+</span>
                  <small>Residents</small>
                </div>
                <div className="training-hostel-stat">
                  <span>Biogas</span>
                  <small>Sustainable Energy</small>
                </div>
                <div className="training-hostel-stat">
                  <span>Kitchen</span>
                  <small>Garden</small>
                </div>
              </div>
            </div>
            <div className="training-hostel-gallery">
              <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80" alt="Nursing students" className="training-hostel-img" />
              <img src="https://images.unsplash.com/photo-1579684453373-1b5e0dcb3da2?w=600&q=80" alt="Hospital facility" className="training-hostel-img" />
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80" alt="Medical training" className="training-hostel-img" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="training-section training-cta">
        <div className="container">
          <div className="training-cta-content">
            <span className="training-cta-badge">Join Us</span>
            <h2 className="training-cta-title">Begin Your Nursing Journey</h2>
            <p className="training-cta-text">
              Interested in joining the College of Nursing at Christian Hospital Bissamcuttack? 
              Contact us for admissions information, campus tours, and application details.
            </p>
            <a href="/#contact" className="btn btn-primary training-cta-btn">
              <i className="fas fa-envelope" />
              Enquire About Admissions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TrainingPage
