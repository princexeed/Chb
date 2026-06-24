import React, { useEffect, useRef, useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Margaret Johnson',
    role: 'Patient',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
    text: 'The care I received at Christian Hospital was nothing short of extraordinary. From the moment I walked in, I felt surrounded by compassion. The doctors took time to explain everything, and the nurses were incredibly kind. I am grateful for their dedication.',
    rating: 5,
  },
  {
    name: 'Robert Nwosu',
    role: "Patient's Family Member",
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    text: 'When my father needed emergency surgery, we were terrified. The team at Christian Hospital not only saved his life but also supported our family with prayers and encouragement. They truly treat you like family.',
    rating: 5,
  },
  {
    name: 'Amara Okafor',
    role: 'New Mother',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    text: 'I gave birth to my daughter at Christian Hospital\'s maternity wing, and it was the most beautiful experience. The midwives and doctors were supportive every step of the way. The facilities are world-class!',
    rating: 5,
  },
  {
    name: 'Thomas Adebayo',
    role: 'Patient',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    text: 'After struggling with chronic back pain for years, the orthopedic team at Christian Hospital performed a life-changing surgery. I am now pain-free and able to enjoy time with my grandchildren. Thank you!',
    rating: 5,
  },
  {
    name: 'Ameya Kamat',
    role: 'TAS Manager (Volunteer)',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    text: 'I had the privilege of working with the Community Department of CHB-BCK in Feb 2013. The experience of working with such a highly dedicated team was mind boggling. Daily interactions with the CHB-BCK staff helped me understand a totally different dimension of life and I am thankful to the entire staff for that. The work that the hospital staff is doing is a true service to humanity. Despite challenging conditions, they are providing the best possible service to the people of Orissa. I wish them all the very best for the future and hope that they continue living with the motto - "Service to Man is service to God".',
    rating: 5,
  },
  {
    name: 'Dr. Shivapratap',
    role: 'Visiting Surgeon',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80',
    text: 'A glance of my vivid memories of my stay at CHB, Bissamcuttack. Having finished MRCS in UK, I came to know about Christian Hospital, Bissamcuttack (CHB) through a friend who had worked here for 2 years. My initial opportunity was in Dec 2010 to work in the Department of Surgery for 3 months led by Dr. Sunil Jiwanmall. It was absolutely life changing. Having faced the difficulties of further surgical training in UK, USA and India I was at a crossroads whether to pursue a surgical career at all. During those 3 months I was taken aback with the sheer number of surgeries done from head to toe and also the complexity of the cases done, for e.g. cholydochojejunostomy, nephrolithotomy, Roux-en-Y bypass surgeries done at ease with surgical skills at par with any western hospital and outcomes comparable to the advanced world, that too with limited resources and no intensive care back up. I witnessed how basic surgical skills like debridement in necrotising fasciitis, burns, diabetic ulcers etc. were saving lives. Having worked in the National Health Service (NHS) for more than 10 years in UK, I always believed that healthcare delivery is an expensive industry in terms of costly equipment, infrastructure, expertise etc., especially for our Indian population, and it would not be possible for an ordinary man to afford similar healthcare as in the NHS. It turned out to be a myth after this visit as there were only two slab packages: 30 pounds for minor surgery (haemorrhoidectomy) and 70 pounds for major surgery (for e.g. right hemicolectomy) which included all the costs of consultation, surgical charges, bed charges, dressings etc., with 70 inpatient surgical beds and around 150 to 200 outpatient visits managed by only two surgeons. Within 3 months I was equipped with enough surgical skills to practice surgery in India thanks to the willingness to teach, supervision and mentorship of Departmental head Dr. Sunil Jiwanmall. After returning to UK for 3 years I returned to CHB in Oct 2013 and stayed for 11 months learning the art of surgery under the guidance of Dr. Sunil, and was compelled to leave for a fellowship programme in Laparoscopic surgery in Aug 2014. It was a very enjoyable, worthwhile experience which has enabled me to embark on a surgical career for life. The campus is lively; there are always some volunteers, medical students, doctors from all over the world at any given point of time doing their part in service to the local population. While the terrain in and around the hospital up to 100 km radius is magnificent with rolling countryside, even the summits of mountains full of flora and fauna. CHB is conveniently well connected by rail and road to the nearest airport within 5 hours. Doctor colleagues are ever so friendly and social life is very pleasant with parties, potlucks and games. Enthusiastic basketball players and shuttlers can play at courts in front of the rather spacious doctors accommodations. I was lucky to be a part of numerous gala festivities during Christmas on both of my visits. If one wants to pay a visit to the Surgical Mecca, add this too.',
    rating: 5,
  },
]

function Testimonials() {
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

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

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="testimonials section section-alt" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-in">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">
            What Our Patients Say
          </h2>
          <p className="section-subtitle">
            The greatest reward is the trust our patients place in us.
            Here are some of their stories.
          </p>
        </div>

        <div className="testimonials-carousel animate-in" style={{ transitionDelay: '0.2s' }}>
          <button className="carousel-btn carousel-prev" onClick={prev} aria-label="Previous testimonial">
            <i className="fas fa-chevron-left" />
          </button>

          <div className="testimonial-card">
            <div className="testimonial-card-content" key={activeIndex}>
              <div className="testimonial-stars">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <i key={i} className="fas fa-star" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonials[activeIndex].text}"</p>
              <div className="testimonial-author">
                <img
                  src={testimonials[activeIndex].img}
                  alt={testimonials[activeIndex].name}
                  className="testimonial-avatar"
                />
                <div>
                  <h4 className="testimonial-name">{testimonials[activeIndex].name}</h4>
                  <span className="testimonial-role">{testimonials[activeIndex].role}</span>
                </div>
              </div>
            </div>
          </div>

          <button className="carousel-btn carousel-next" onClick={next} aria-label="Next testimonial">
            <i className="fas fa-chevron-right" />
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot${i === activeIndex ? ' active' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
