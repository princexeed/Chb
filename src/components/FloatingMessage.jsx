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
        aria-label={open ? 'Close messages' : 'Open messages'}
      >
        {open ? <i className="fas fa-xmark" /> : <i className="fas fa-comment-dots" />}
        {!open && <span className="floating-badge">1</span>}
      </button>

      {open && (
        <div className="floating-card">
          <div className="floating-card-head">
            <div className="floating-card-avatar">
              <img src="/photos/logo/image.svg" alt="CHB" />
            </div>
            <div className="floating-card-head-info">
              <span className="floating-card-title">Christian Hospital</span>
              <span className="floating-card-status"><span className="status-dot" /> Online </span>
            </div>
            <button className="floating-card-close" onClick={() => setOpen(false)} aria-label="Close">
              <i className="fas fa-xmark" />
            </button>
          </div>

          <div className="floating-card-body">
            <div className="chat-bubble">
              <div className="chat-bubble-label"><i className="fas fa-sparkles" /> Latest from CHB</div>
              <div className="chat-bubble-img">
                <img src={story.image} alt={story.imageAlt} />
                <span className="chat-bubble-cat">{story.category}</span>
              </div>
              <h4 className="chat-bubble-title">{story.title}</h4>
              <p className="chat-bubble-excerpt">{story.excerpt}</p>
              <div className="chat-bubble-meta">
                <span><i className="fas fa-user-doctor" /> {story.author}</span>
                <span className="chat-dot">•</span>
                <span><i className="fas fa-clock" /> {story.readTime}</span>
              </div>
            </div>
            <div className="chat-hint">
              <i className="fas fa-comment-dots" /> Tap below to explore more stories
            </div>
          </div>

          <div className="floating-card-foot">
            <Link to="/stories" className="floating-card-link" onClick={() => setOpen(false)}>
              <i className="fas fa-book-open" /> Read Our Stories <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default FloatingMessage