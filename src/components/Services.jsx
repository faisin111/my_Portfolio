const services = [
  { title: 'Cross-Platform Apps', desc: 'Single codebase for iOS, Android, and Web — fast, consistent, and maintainable.' },
  { title: 'UI Development', desc: 'Beautiful, responsive interfaces with smooth animations and modern design patterns.' },
  { title: 'Backend & APIs', desc: 'Firebase, REST/GraphQL integration, and scalable app architecture.' },
  { title: 'Maintenance & Optimization', desc: 'Performance tuning, bug fixes, and long-term support for existing Flutter apps.' },
]

export default function Services() {
  return (
    <section id="services" className="section services">
      <h2 className="section-title">Services</h2>
      <p className="section-subtitle">What I can build for you</p>
      <div className="services-grid">
        {services.map(({ title, desc }) => (
          <div key={title} className="service-card">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
