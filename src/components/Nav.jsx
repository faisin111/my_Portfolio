import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const toggleMenu = () => {
    const newState = !open
    setOpen(newState)
    if (newState) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
  }

  return (
    <nav className="nav">
      <a href="#hero" className="nav-logo">FSM</a>

      <div className={`nav-menu ${open ? 'open' : ''}`}>
        <ul className="nav-links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={() => {
                setOpen(false)
                document.body.classList.remove('menu-open')
              }}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <ThemeToggle />
        </div>
      </div>

      <button
        type="button"
        className="nav-toggle"
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}


