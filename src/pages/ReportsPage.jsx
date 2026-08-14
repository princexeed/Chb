import React from 'react'
import './ReportsPage.css'

const reports = [
    {
    name: 'Annual Reports',
    title: 'Annual Report 2024-2025',
    file: '/reports/annual/Annual Report 2025-2026 A.pdf',
    img: '/photos/hospital/image1.jpg',
    imgAlt: 'CHB At a Glance report thumbnail',
  },
  {
    name: 'CHB At a Glance',
    title: 'Glance Sep 2024',
    file: '/reports/glance/chb-at-a-glance-2024.pdf',
    img: '/photos/hospital/image1.jpg',
    imgAlt: 'CHB At a Glance report thumbnail',
  },
  {
    name: 'Brochure',
    title: 'Brochure 2026',
    file: '/reports/brochure/chb-brochure-2026.pdf',
    img: '/photos/hospital/image1.jpg',
    imgAlt: 'CHB Brochure thumbnail',
  },
]

function ReportsPage() {
  return (
    <div className="reports-page">
      <section className="reports-hero">
        <div className="reports-hero-bg" />
        <div className="reports-hero-overlay" />
        <div className="reports-hero-content">
          <span className="reports-badge">Annual Reports</span>
          <h1 className="reports-title">
            Our Work, In Review
            <br />
            <span className="reports-highlight">Annual Reports &amp; Publications</span>
          </h1>
          <p className="reports-subtitle">
            Transparent accounts of the hospital's services, finances and outreach —
            documenting how your support transforms lives in southern and western Odisha.
          </p>
        </div>
        <div
          className="reports-scroll"
          onClick={() => document.getElementById('reports-list')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ cursor: 'pointer' }}
        >
          <span>View Reports</span>
          <i className="fas fa-chevron-down" />
        </div>
      </section>

      <section className="reports-section" id="reports-list">
        <div className="container">
          {reports.map((report, i) => (
            <div className="reports-block" key={i}>
              <h2 className="reports-block-title">{report.name}</h2>
              <a href={report.file} target="_blank" rel="noopener noreferrer" className="report-row">
                <div className="report-row-thumb">
                  <img src={report.img} alt={report.imgAlt} loading="lazy" />
                </div>
                <span className="report-row-name">{report.title}</span>
                <i className="fas fa-arrow-right report-row-action" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ReportsPage
