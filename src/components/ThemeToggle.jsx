import { useState, useEffect } from 'react'

export default function ThemeToggle() {
    const [isLight, setIsLight] = useState(false)

    useEffect(() => {
        if (isLight) {
            document.body.classList.add('light-theme')
        } else {
            document.body.classList.remove('light-theme')
        }
    }, [isLight])

    return (
        <button
            className="theme-toggle"
            onClick={() => setIsLight(!isLight)}
            aria-label="Toggle theme"
        >
            {isLight ? '🌙' : '☀️'}
            <style jsx>{`
        .theme-toggle {
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-primary);
          padding: 0.5rem;
          border-radius: 50%;
          cursor: pointer;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: var(--transition);
        }
        .theme-toggle:hover {
          transform: scale(1.1) rotate(15deg);
          border-color: var(--accent);
          box-shadow: 0 0 10px var(--accent-dim);
        }
      `}</style>
        </button>
    )
}
