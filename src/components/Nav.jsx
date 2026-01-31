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
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <a href="#hero" className="nav-logo">FSM</a>

      <div className={`nav-menu ${open ? 'open' : ''}`}>
        <ul className="nav-links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>{label}</a>
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
        onClick={() => setOpen(!open)}
      >
        <span /><span /><span />
      </button>

      <style jsx>{`
        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }
        .nav-actions {
          display: flex;
          align-items: center;
        }
        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            top: 64px;
            left: 0;
            right: 0;
            flex-direction: column;
            padding: 2rem;
            background: var(--bg);
            border-bottom: 1px solid var(--border);
            transform: translateY(-150%);
            transition: transform 0.3s ease;
            align-items: center;
            gap: 1.5rem;
          }
          .nav-menu.open {
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  )
}

