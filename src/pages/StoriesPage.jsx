import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import stories from '../data/stories'
import './StoriesPage.css'

const categories = [
  'All Stories',
  'Hospital',
  'Community Services',
  'Education',
  'Training',
  'Schools',
  'Events',
]

function formatCount(value) {
  if (value >= 1000) {
    const k = value / 1000
    return `${k.toFixed(k >= 10 ? 0 : 1)}k`
  }
  return String(value)
}

function StoriesPage() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const initialCategory = searchParams.get('category')
  const validInitial = categories.includes(initialCategory) ? initialCategory : null
  const [activeCategory, setActiveCategory] = useState(validInitial || 'All Stories')
  const [openMenu, setOpenMenu] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeCategory])

  useEffect(() => {
    if (!openMenu) return
    const close = () => setOpenMenu(null)
    window.addEventListener('click', close)
    return () => window.removeEventListener('click', close)
  }, [openMenu])

  const filtered =
    activeCategory === 'All Stories'
      ? stories
      : stories.filter((story) => story.category === activeCategory)

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat)
    setOpenMenu(null)
    if (cat === 'All Stories') setSearchParams({})
    else setSearchParams({ category: cat })
  }

  const handleCardClick = (slug) => {
    navigate(`/stories/${slug}`)
  }

  const handleMenuClick = (e, slug) => {
    e.stopPropagation()
    setOpenMenu(openMenu === slug ? null : slug)
  }

  const handleShare = async (e, story) => {
    e.stopPropagation()
    const shareUrl = `${window.location.origin}/stories/${story.slug}`
    if (navigator.share) {
      try {
        await navigator.share({ title: story.title, url: shareUrl })
      } catch (err) {
        // user dismissed
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl)
        alert('Link copied to clipboard')
      } catch (err) {
        // clipboard unavailable
      }
    }
    setOpenMenu(null)
  }

  return (
    <div className="stories-page">
      <nav className="stories-catnav" aria-label="Story categories">
        <div className="stories-catnav-items">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`stories-catnav-item${activeCategory === cat ? ' is-active' : ''}`}              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      <div className="stories-wrap">
        {activeCategory === 'All Stories' ? (
          <div className="stories-grid">
            {filtered.map((story) => (
              <article
                key={story.slug}
                className="story-card"
                onClick={() => handleCardClick(story.slug)}
              >
                <div
                  className="story-card-bg"
                  style={{ backgroundImage: `url(${story.image})` }}
                />
                <div className="story-card-overlay" />

                <div className="story-card-top">
                  <div className="story-card-meta">
                    <span className="story-card-author">{story.author}</span>
                    <span className="story-card-date">
                      {story.date} · {story.readTime}
                    </span>
                  </div>
                  <div className="story-card-menu-wrap">
                    <button
                      className="story-card-menu"
                      aria-label="More options"
                      onClick={(e) => handleMenuClick(e, story.slug)}
                    >
                      <i className="fas fa-ellipsis-v" />
                    </button>
                    {openMenu === story.slug && (
                      <div className="story-card-dropdown">
                        <button
                          className="story-card-dropdown-item"
                          onClick={(e) => handleShare(e, story)}
                        >
                          <i className="fas fa-share-alt" /> Share Post
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="story-card-body">
                  <h3 className="story-card-title">{story.title}</h3>
                  <span className="story-card-divider" />
                  <div className="story-card-stats">
                    <span className="story-card-stat">
                      <i className="fas fa-eye" />
                      {formatCount(story.views)}
                    </span>
                    <span className="story-card-stat">
                      <i className="fas fa-comment" />
                      {formatCount(story.comments)}
                    </span>
                    <span className="story-card-stat">
                      <i className="fas fa-heart" />
                      {formatCount(story.likes)}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="stories-list">
            {filtered.map((story) => (
              <article
                key={story.slug}
                className="story-row"
                onClick={() => handleCardClick(story.slug)}
              >
                <div className="story-row-image">
                  <img src={story.image} alt={story.imageAlt} loading="lazy" />
                </div>
                <div className="story-row-content">
                  <div className="story-row-meta">
                    <span className="story-row-author">{story.author}</span>
                    <span className="story-row-date">
                      {story.date} · {story.readTime}
                    </span>
                  </div>
                  <h3 className="story-row-title">{story.title}</h3>
                  <p className="story-row-excerpt">{story.excerpt}</p>
                  <div className="story-row-footer">
                    <span className="story-row-stat">
                      <i className="fas fa-eye" />
                      {formatCount(story.views)}
                    </span>
                    <span className="story-row-stat">
                      <i className="fas fa-comment" />
                      {formatCount(story.comments)}
                    </span>
                    <span className="story-row-stat">
                      <i className="fas fa-heart" />
                      {formatCount(story.likes)}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <p className="stories-empty">No stories in this category yet.</p>
        )}
      </div>
    </div>
  )
}

export default StoriesPage
