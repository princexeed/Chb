import { useEffect } from 'react'

const SITE = 'https://chbmck.org'

// Default fallback for homepage
const defaults = {
  title: 'Christian Hospital Bissamcuttack | Compassionate Healthcare',
  description: 'Christian Hospital Bissamcuttack - A 200-bedded faith-based community hospital serving southern and western Odisha since 1954 through cost-effective healthcare, holistic nursing training and quality education.',
}

const seoConfig = {
  '/': {
    title: 'Christian Hospital Bissamcuttack | Compassionate Healthcare',
    description: 'Christian Hospital Bissamcuttack - A 200-bedded faith-based community hospital serving southern and western Odisha since 1954 through compassionate, cost-effective healthcare, nursing training and quality education.',
    canonical: `${SITE}/`,
  },
  '/about': {
    title: 'About Us | Christian Hospital Bissamcuttack',
    description: 'Our story from a church verandah in 1954 to a 200-bed mission hospital - history, leaders, and legacy of Christian Hospital Bissamcuttack.',
    canonical: `${SITE}/about`,
  },
  '/services': {
    title: 'Medical Services | Christian Hospital Bissamcuttack',
    description: 'Explore 14 departments - General Medicine, Pediatrics, Surgery, Ophthalmology, Lab, Radiology, Blood Bank and Community Health (MITRA) serving southern Odisha.',
    canonical: `${SITE}/services`,
  },
  '/schools': {
    title: 'Our Schools | Christian Hospital Bissamcuttack',
    description: 'NLEM English Medium School, Mitra Residential Tribal School & Creche - quality education from early learning to secondary schooling.',
    canonical: `${SITE}/schools`,
  },
  '/training': {
    title: 'Nursing & Health Training | Christian Hospital Bissamcuttack',
    description: 'School of Nursing, GNM and community health training programmes preparing compassionate healthcare professionals since 1978.',
    canonical: `${SITE}/training`,
  },
  '/support': {
    title: 'Support Us | Christian Hospital Bissamcuttack',
    description: 'Partner with CHB - support healthcare, education and tribal outreach in southern Odisha.',
    canonical: `${SITE}/support`,
  },
  '/donate': {
    title: 'Donate to CHB | Christian Hospital Bissamcuttack',
    description: 'Donate securely to Christian Hospital Bissamcuttack via Razorpay - support healthcare for tribal communities in Odisha.',
    canonical: `${SITE}/`,
    noindex: true,
  },
  '/contact': {
    title: 'Contact Us | Christian Hospital Bissamcuttack',
    description: 'Contact CHB in Rayagada, Odisha - address, phone +91-8118060163, email chb.orissa@gmail.com, timings and location.',
    canonical: `${SITE}/contact`,
  },
  '/reports': {
    title: 'Reports & Publications | Christian Hospital Bissamcuttack',
    description: 'Annual reports, financials and CHB at a Glance - transparency from Christian Hospital Bissamcuttack.',
    canonical: `${SITE}/reports`,
  },
  '/stories': {
    title: 'Patient Stories | Christian Hospital Bissamcuttack',
    description: 'Stories of healing and hope from Christian Hospital Bissamcuttack - patient testimonies from tribal Odisha.',
    canonical: `${SITE}/stories`,
  },
}

function getSEOForPath(pathname) {
  if (seoConfig[pathname]) return seoConfig[pathname]
  if (pathname.startsWith('/stories/')) {
    const slug = pathname.split('/').pop()
    const pretty = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    return {
      title: `${pretty} | Christian Hospital Bissamcuttack`,
      description: `Read the story: ${pretty} - from Christian Hospital Bissamcuttack.`,
      canonical: `${SITE}${pathname}`,
    }
  }
  // Strip query/hash for canonical lookup
  const clean = pathname.split('?')[0].split('#')[0]
  if (seoConfig[clean]) return seoConfig[clean]
  return {
    title: defaults.title,
    description: defaults.description,
    canonical: `${SITE}${pathname}`,
  }
}

function upsertMeta(selector, create) {
  let el = document.querySelector(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  return el
}

export default function SEO({ pathname }) {
  useEffect(() => {
    const { title, description, canonical, noindex } = getSEOForPath(pathname)

    // Title
    document.title = title

    // Meta description
    const descTag = document.querySelector('meta[name="description"]')
    if (descTag) descTag.setAttribute('content', description)

    // Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonical)

    // og:url
    const ogUrl = upsertMeta('meta[property="og:url"]', () => {
      const m = document.createElement('meta')
      m.setAttribute('property', 'og:url')
      return m
    })
    ogUrl.setAttribute('content', canonical)

    // og:title
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)

    // og:description
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description)

    // twitter:title
    const twTitle = document.querySelector('meta[name="twitter:title"]')
    if (twTitle) twTitle.setAttribute('content', title)

    // twitter:description
    const twDesc = document.querySelector('meta[name="twitter:description"]')
    if (twDesc) twDesc.setAttribute('content', description)

    // robots noindex for hidden pages (e.g. /donate)
    let robots = document.querySelector('meta[name="robots"]')
    if (noindex) {
      if (!robots) {
        robots = document.createElement('meta')
        robots.setAttribute('name', 'robots')
        document.head.appendChild(robots)
      }
      robots.setAttribute('content', 'noindex, follow')
    } else if (robots) {
      robots.setAttribute('content', 'index, follow')
    }

    // twitter:url via og? not needed
  }, [pathname])

  return null
}

export { getSEOForPath }
