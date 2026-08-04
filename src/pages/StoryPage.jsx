import React, { useEffect, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import stories from '../data/stories'
import './StoryPage.css'

function StoryPage() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const index = useMemo(() => stories.findIndex((s) => s.slug === slug), [slug])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (index === -1) {
    return (
      <div className="story-page story-page--notfound">
        <h1 className="story-notfound-title">Story not found</h1>
        <p className="story-notfound-text">We couldn't find the story you were looking for.</p>
        <button className="story-btn" onClick={() => navigate('/')}>
          <i className="fas fa-arrow-left" /> Back to Home
        </button>
      </div>
    )
  }

  const story = stories[index]
  const prev = stories[index - 1]
  const next = stories[index + 1]
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = story.title

  const shareLinks = [
    {
      label: 'Facebook',
      icon: 'fab fa-facebook-f',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
    {
      label: 'Twitter',
      icon: 'fab fa-twitter',
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    },
    {
      label: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      href: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
    },
    {
      label: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
  ]

  const handleNav = (targetSlug) => {
    if (!targetSlug) return
    navigate(`/stories/${targetSlug}`)
  }

  const categories = ['All Stories', 'Hospital', 'Community Services', 'Education', 'Training', 'Schools', 'Events']

  const contentWithImage = (() => {
    const middle = Math.floor(story.content.length / 2)
    return story.content.reduce((acc, paragraph, i) => {
      if (typeof paragraph === 'object' && paragraph.heading) {
        acc.push(
          <h2 key={`h-${i}`} className="story-heading">
            {paragraph.heading}
          </h2>
        )
        return acc
      }
      if (typeof paragraph === 'object' && paragraph.lead) {
        acc.push(
          <p key={`p-${i}`} className="story-paragraph story-paragraph-lead">
            {paragraph.lead}
          </p>
        )
        return acc
      }
      if (typeof paragraph === 'object' && paragraph.compact) {
        acc.push(
          <p key={`p-${i}`} className="story-paragraph story-paragraph-compact">
            {paragraph.compact}
          </p>
        )
        return acc
      }
      if (typeof paragraph === 'object' && paragraph.sideImage) {
        acc.push(
          <div key={`p-${i}`} className="story-paragraph story-paragraph-with-image">
            <p>{paragraph.text}</p>
            <img
              src={paragraph.sideImage}
              alt={paragraph.sideImageAlt}
              loading="lazy"
              className="story-side-image"
            />
          </div>
        )
        return acc
      }
      acc.push(
        <p key={`p-${i}`} className="story-paragraph">
          {paragraph}
        </p>
      )
      if (story.inlineImage && i === middle - 1) {
        acc.push(
          <figure key="fig" className="story-figure">
            <img src={story.inlineImage} alt={story.inlineImageAlt} loading="lazy" />
            <figcaption>{story.inlineImageAlt}</figcaption>
          </figure>
        )
      }
      return acc
    }, [])
  })()

  return (
    <article key={story.slug} className="story-page">
      <nav className="story-catnav" aria-label="Story categories">
        <div className="story-catnav-items">
          {categories.map((cat) => {
            const isActive = cat !== 'All Stories' && cat === story.category
            return (
              <button
                key={cat}
                className={`story-catnav-item${isActive ? ' is-active' : ''}`}
                onClick={() => {
                  if (cat === 'All Stories') navigate('/stories')
                  else navigate(`/stories?category=${encodeURIComponent(cat)}`)
                }}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </nav>

      <div className="story-shell">
        <div className="story-container">
          <div className="story-header">
            <div className="story-meta">
              <div className="story-author">
                <span className="story-author-avatar">
                  <i className="fas fa-user" />
                </span>
                <div className="story-author-info">
                  <span className="story-author-name">{story.author}</span>
                  <span className="story-author-date">
                    {story.date} · {story.readTime}
                  </span>
                </div>
              </div>
            </div>
            <h1 className="story-title">{story.title}</h1>
            <p className="story-excerpt">{story.excerpt}</p>
          </div>

          <div className="story-feature">
            <img src={story.image} alt={story.imageAlt} />
          </div>

          <div className="story-content">
            {contentWithImage}
          </div>

          <div className="story-share">
            <span className="story-share-label">Share this story</span>
            <div className="story-share-links">
              {shareLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="story-share-btn"
                  aria-label={`Share on ${link.label}`}
                  title={link.label}
                >
                  <i className={link.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="story-pagination">
            <button
              className={`story-prev${prev ? '' : ' is-disabled'}`}
              onClick={() => handleNav(prev?.slug)}
              disabled={!prev}
            >
              <span className="story-nav-arrow">
                <i className="fas fa-arrow-left" />
              </span>
              <span className="story-nav-body">
                <span className="story-nav-label">Previous Story</span>
                <span className="story-nav-title">{prev ? prev.title : 'None'}</span>
              </span>
            </button>
            <button
              className={`story-next${next ? '' : ' is-disabled'}`}
              onClick={() => handleNav(next?.slug)}
              disabled={!next}
            >
              <span className="story-nav-body">
                <span className="story-nav-label">Next Story</span>
                <span className="story-nav-title">{next ? next.title : 'None'}</span>
              </span>
              <span className="story-nav-arrow">
                <i className="fas fa-arrow-right" />
              </span>
            </button>
          </div>

          <div className="story-back-wrap">
            <button className="story-btn" onClick={() => navigate('/stories')}>
              <i className="fas fa-book-open" /> Back to Stories
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default StoryPage
