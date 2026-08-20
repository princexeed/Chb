import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import stories from '../data/stories'
import './FloatingMessage.css'

function FloatingMessage() {
  const [open, setOpen] = useState(false)
  const story = stories[0]

  return (
    <>
      <button
        className={`floating-btn${open ? ' is-open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Open message"
      >
        {open ? <i className="fas fa-envelope-open" /> : <i className="fas fa-envelope" />}
        {!open && <span className="floating-badge">1</span>}
      </button>

      {open && (
        <div className="floating-card">
          <div className="floating-card-head">
            <div className="floating-card-avatar">
              <i className="fas fa-hospital-user" />
            </div>
            <div className="floating-card-head-info">
              <span className="floating-card-title">Christian Hospital</span>
              <span className="floating-card-status">online · just now</span>
            </div>
            <button className="floating-card-close" onClick={() => setOpen(false)} aria-label="Close">
              <i className="fas fa-times" />
            </button>
          </div>

          <div className="floating-card-body">
            <div className="floating-story">
              <div className="floating-story-img">
                <img src={story.image} alt={story.imageAlt} />
              </div>
              <div className="floating-story-content">
                <span className="floating-story-cat">{story.category} Case Study</span>
                <h4 className="floating-story-title">{story.title}</h4>
                <p className="floating-story-excerpt">{story.excerpt}</p>
                <span className="floating-story-author">
                  <i className="fas fa-user-doctor" /> {story.author}
                </span>
                <span className="floating-story-time">
                  <i className="fas fa-clock" /> {story.readTime}
                </span>
              </div>
            </div>
          </div>

          <div className="floating-card-foot">
            <Link to="/stories" className="floating-card-link" onClick={() => setOpen(false)}>
              Read Our Stories <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default FloatingMessage