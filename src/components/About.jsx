
export default function About() {
    return (
        <section id="about" className="section about">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Get to know me better</p>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        I am a <strong>Passionate Flutter Developer</strong> with hands-on experience in building responsive and user-friendly mobile applications using Flutter and Dart. Currently working as a <strong>Flutter Intern at Bridgeon Solutions LLP</strong>.
                    </p>
                    <p>
                        I have a strong foundation in UI design, local storage (Hive), and backend integration using Firebase and Supabase. I am eager to learn new technologies, write clean code, and contribute to real-world mobile applications.
                    </p>

                    <div className="education-box" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                        <h3 style={{ color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Education</h3>
                        <p style={{ color: 'var(--text)' }}>Higher Secondary in Computer Science</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Ma’din HSS, Malappuram | 2023 - 2025</p>
                    </div>

                    <div className="about-details">
                        <div className="detail-item">
                            <span>Experience</span>
                            <strong>Intern</strong>
                        </div>
                        <div className="detail-item">
                            <span>Projects</span>
                            <strong>5+ Real-world</strong>
                        </div>
                        <div className="detail-item">
                            <span>Looking for</span>
                            <strong>Opportunities</strong>
                        </div>
                    </div>
                </div>
                <div className="about-image">
                    <img src="/logo.png" alt="FSM Logo" className="profile-img" />
                </div>
            </div>
        </section>
    )
}

