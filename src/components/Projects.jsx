
const projects = [
    {
        title: 'Sports Eventer App',
        category: 'Flutter / Firebase / Supabase',
        image: '⚽',
        desc: 'Admin-driven app with real-time event updates, user auth, and cloud storage. Clean, intuitive interface.',
        link: 'https://github.com/faisin111/Sports-eventer'
    },
    {
        title: 'Netflix UI Clone',
        category: 'Flutter / TMDB API',
        image: '🎬',
        desc: 'A complete recreation of the Netflix interface fetching real-time movie & TV show data using the TMDB API.',
        link: 'https://github.com/faisin111/Netflix-clone'
    },
    {
        title: 'Weather App',
        category: 'Flutter / Weather API',
        image: '☁️',
        desc: 'Real-time weather updates with location tracking, detailed forecasts, and beautiful dynamic backgrounds.',
        link: 'https://github.com/faisin111/Weather_api_app'
    },
    {
        title: 'Personal Money Manager',
        category: 'Flutter / Hive',
        image: '💰',
        desc: 'Responsive expense tracker using Hive for local storage. Features add/update/delete & separate user data.',
        link: 'https://github.com/faisin111/Monify_MoneyManager'
    },
    {
        title: 'Flipkart UI Clone',
        category: 'Flutter UI',
        image: '🛍️',
        desc: 'Pixel-perfect UI clone using GridView, ListView, and custom widgets. Fully responsive design.',
        link: 'https://github.com/faisin111/flutter-flipkartUI-project'
    }
]

export default function Projects() {
    return (
        <section id="projects" className="section projects">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">A selection of my recent work</p>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-image">
                            <span>{project.image}</span>
                        </div>
                        <div className="project-info">
                            <span className="project-category">{project.category}</span>
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub &rarr;</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
