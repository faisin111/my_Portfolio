const skills = [
  { icon: '📱', title: 'Flutter & Dart', desc: 'Responsive UI, Custom Widgets, Material & Cupertino, UI Optimization.' },
  { icon: '🏗️', title: 'State Management', desc: 'Expertise in Riverpod, Provider, and BLoC for scalable app architecture.' },
  { icon: '🔥', title: 'Backend & Cloud', desc: 'Firebase, Supabase, REST APIs, Auth, & Cloud Storage.' },
  { icon: '💾', title: 'Local Storage', desc: 'Hive and Shared Preferences for offline data persistence.' },
  { icon: '🛠️', title: 'Tools', desc: 'Git, GitHub, VS Code, Android Studio, Postman.' },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">Technologies & tools I work with</p>
      <div className="skills-grid">
        {skills.map(({ icon, title, desc }) => (
          <div key={title} className="skill-card">
            <span className="skill-icon">{icon}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
