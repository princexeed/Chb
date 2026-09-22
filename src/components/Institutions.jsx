import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import StoryScroll from './StoryScroll'
import './Institutions.css'

const institutions = [
  {
    badge: 'Hospital',
    title: 'Medical Services',
    image: '/photos/hospital/image1.jpg',
    imageAlt: 'Christian Hospital Bissamcuttack',
    description: 'A 200-bedded multidisciplinary hospital serving this vulnerable region through cost-effective health care, holistic training in health and quality education — as an expression of the love of God irrespective of caste, creed, community or gender.',
    services: [
      'Surgery, Orthopaedics and Anaesthesia',
      'Obstetrics and Gynaecology',
      'Child Health and Neonatal Services',
      'Ophthalmology',
      'Dental',
      'Community Health',
    ],
    linkTo: '/services',
    linkText: 'Explore Hospital Services',
    align: 'left',
  },
  {
    badge: 'MRSK School',
    title: 'Mitra Residential School, Kachapaju',
    image: '/photos/mitra/mitra1.jpg',
    imageAlt: 'Mitra Residential School students',
    description: 'Mitra Residential School, Kachapaju is a unique adivasi school, 18km from Bissamcuttack. It provides free education, boarding, meals and healthcare for tribal children from Class 1 to 10 — a safe, nurturing home where children can grow academically, socially and spiritually.',
    services: [],
    linkTo: '/schools',
    linkText: 'Read More',
    align: 'right',
  },
  {
    badge: 'NLEM School',
    title: 'New Life English Medium School',
    image: '/photos/school/image2.jpg',
    imageAlt: 'New Life English Medium School',
    description: 'Christian Hospital Bissamcuttack conceived the idea of starting a school with the intent of providing quality, affordable English-medium education to the children of this region — from pre-kindergarten through Class 10.',
    services: [],
    linkTo: '/schools',
    linkText: 'Read More',
    align: 'left',
  },
  {
    badge: 'College of Nursing',
    title: 'College of Nursing',
    image: '/photos/clg/image1.jpg',
    imageAlt: 'College of Nursing students',
    description: 'The training of nurses in Christian Hospital, Bissamcuttack was envisaged by Dr Elisabeth Madsen, Founder. The School of Nursing was started in 1978 by Mrs Nancy Jane Henry & Dr V K Henry — the then Nursing Superintendent and Medical Superintendent. Today we offer GNM and B.Sc. Nursing programs.',
    services: [],
    linkTo: '/training',
    linkText: 'Read More',
    align: 'right',
  },
]

function Institutions() {
  const sectionRef = useRef(null)

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
    <section id="institutions" className="institutions section" ref={sectionRef}>
      <StoryScroll />

      <div className="container">
        <div className="institutions-list">
          {institutions.map((inst, index) => (
            <div
              key={index}
              className={`institution-row ${inst.align === 'right' ? 'institution-row--reverse' : ''} animate-in`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="institution-image">
                <img src={inst.image} alt={inst.imageAlt} loading="lazy" />
              </div>
              <div className="institution-content">
                <span className="institution-badge">{inst.badge}</span>
                <h3 className="institution-title">{inst.title}</h3>
                <p className="institution-desc">{inst.description}</p>
                {inst.services.length > 0 && (
                  <ul className="institution-services">
                    {inst.services.map((service, i) => (
                      <li key={i}>
                        <i className="fas fa-check-circle" />
                        {service}
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  to={inst.linkTo}
                  className="institution-link"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {inst.linkText} <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Institutions
