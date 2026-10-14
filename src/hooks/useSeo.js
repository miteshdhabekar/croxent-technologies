import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { company } from '../config/company'

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/** Sets a unique title, description, Open Graph tags and canonical URL per page. */
export default function useSeo({ title, description, noIndex = false }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title ? `${title} | ${company.name}` : `${company.name} | ${company.tagline}`
    const url = `${company.siteUrl.replace(/\/$/, '')}${pathname}`
    document.title = fullTitle
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:type', 'website')
    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')
    setCanonical(url)
  }, [title, description, pathname, noIndex])
}
