import React, { useEffect, useRef, useState } from 'react'
import ServiceDetail from './ServiceDetail'
import './Services.css'

const services = [
  { icon: 'fa-stethoscope', title: 'General Medicine', desc: 'Comprehensive care for tropical infectious diseases, chronic NCDs, sickle cell disease, and endoscopic services — guided by evidence-based, affordable, holistic medicine.' },
  { icon: 'fa-baby', title: 'Pediatrics', desc: 'Neonatal intensive care for birth asphyxias, low birth weight & preterm babies. 6,000+ OPD visits & 1,000 admissions annually.' },
  { icon: 'fa-baby-carriage', title: 'Maternity & Obstetrics', desc: 'Referral hospital for complicated cases from 2 districts — 2,700 deliveries/yr, 900 gynaecological surgeries, JSY programme accredited by NRHM.' },
  { icon: 'fa-user-md', title: 'Surgery', desc: 'Open & laparoscopic surgeries, orthopaedic care, paediatric surgery, and emergency trauma care — serving a 200 km radius with no other surgical facilities.' },
  { icon: 'fa-eye', title: 'Ophthalmology', desc: 'Complete eye care from routine exams to advanced cataract, glaucoma, and retinal surgery.' },
  { icon: 'fa-syringe', title: 'Anaesthesiology', desc: 'General, spinal, local & regional anaesthesia for routine and emergency surgeries — with preanaesthetic evaluation and labour pain management.' },
  { icon: 'fa-tooth', title: 'Dental Care', desc: 'Diagnosis, restorative & surgical procedures, oral cancer screening, and tobacco cessation counselling — serving 1,100+ patients annually.' },
  { icon: 'fa-microscope', title: 'Endoscopy', desc: 'Advanced endoscopic procedures for accurate diagnosis and minimally invasive treatment of gastrointestinal conditions.' },
  { icon: 'fa-hand-holding-heart', title: 'Community Health', desc: 'MITRA — serving 12,700 people in 53 tribal villages through mobile clinics, health education, residential school, and community empowerment.' },
  { icon: 'fa-x-ray', title: 'Radiology & Imaging', desc: 'Cutting-edge diagnostic imaging including MRI, CT scan, ultrasound, X-ray, and interventional radiology.' },
  { icon: 'fa-droplet', title: 'Blood Bank', desc: 'Safe blood collection, screening, storage and transfusion services — available 24/7 for emergencies and routine procedures.' },
  { icon: 'fa-flask', title: 'Laboratory Services', desc: 'Full-service clinical laboratory offering comprehensive diagnostic testing with rapid turnaround times.' },
  { icon: 'fa-prescription', title: 'Pharmacy', desc: 'In-house pharmacy providing prescribed medications, clinical consultations, and medication management.' },
  { icon: 'fa-user-nurse', title: 'Nursing Care', desc: 'Holistic nursing care — bedside care, medication management, wound care, patient education, and compassionate support for every patient.' },
  { icon: 'fa-laptop-code', title: 'IT Services', desc: 'Managing hospital information systems, network infrastructure, and digital health solutions to ensure seamless, secure, and efficient healthcare operations.' },
]

function Services() {
  const sectionRef = useRef(null)
  const [selectedService, setSelectedService] = useState(null)

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
    <section id="services" className="services section section-alt" ref={sectionRef}>
      <div className="container">          <div className="section-header animate-in">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">Comprehensive Medical Services</h2>
          <p className="section-subtitle">
            From primary care to advanced surgical procedures, we offer a full spectrum
            of healthcare services delivered with compassion and clinical excellence.
            <br />
            <strong style={{ color: 'var(--color-primary)', fontSize: '0.95rem', marginTop: '8px', display: 'inline-block' }}>
              Click any service below to learn more
            </strong>
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <button
              key={index}
              className="service-card animate-in"
              style={{ transitionDelay: `${index * 0.06}s` }}
              onClick={() => setSelectedService(service)}
              aria-label={`View details about ${service.title}`}
            >
              <div className="service-icon"><i className={`fas ${service.icon}`} /></div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <span className="service-learn-more">
                Learn More <i className="fas fa-arrow-right" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceDetail
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  )
}

export default Services
