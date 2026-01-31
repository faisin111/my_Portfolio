import { useState } from 'react'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <a href="#hero" className="nav-logo">FSM</a>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href} onClick={() => setOpen(false)}>{label}</a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="nav-toggle"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
