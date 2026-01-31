const LINKEDIN = 'https://www.linkedin.com/in/faisin-s-muhammed-/'
const GITHUB = 'https://github.com/faisin111'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Faisin S Muhammed</h1>
        <p className="hero-tagline">
          Flutter Developer Intern at Bridgeon Solutions | Building responsive, user-friendly mobile apps with Dart, Firebase & Supabase.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
          <a href="#services" className="btn btn-secondary">View Services</a>
        </div>
        <div className="hero-social">
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
        </div>
      </div>
    </section>
  )
}
