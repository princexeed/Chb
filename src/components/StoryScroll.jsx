import React from 'react'
import { Link } from 'react-router-dom'
import stories from '../data/stories'
import './StoryScroll.css'

const maaStory = stories.find((s) => s.slug === 'a-bed-on-a-church-verandah')

function StoryScroll() {
  return (
    <section className="story-scroll">
      <div className="story-bg-note">
        <h2 className="story-bg-note-text">Every journey has a story</h2>
        <Link to={`/stories/${maaStory.slug}`} className="story-bg-note-btn">
          Read Maa Story
        </Link>
      </div>

      <div className="story-panel">
        <div className="story-panel-inner">
          <span className="story-kicker">One Mission, Four Ministries</span>
          <h3 className="story-title">A Hospital. A School. A College. A Family.</h3>
          <p className="story-text">
            Every day, our teams move between operating theatres and classrooms, clinics
            and dormitories — because we believe health and hope belong together. The
            hospital heals the body, the schools shape the future, and the college trains
            the hands that will carry this mission forward.
          </p>
        </div>
      </div>
    </section>
  )
}

export default StoryScroll
