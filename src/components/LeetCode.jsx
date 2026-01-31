const LEETCODE_USERNAME = 'faisin123'
const LEETCODE_URL = `https://leetcode.com/u/${LEETCODE_USERNAME}/`
const LINKEDIN_URL = 'https://www.linkedin.com/in/faisin-s-muhammed-/'
const STATS_IMAGE_URL = `https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=Outfit&ext=heatmap`

export default function LeetCode() {
    return (
        <section id="stats" className="section leetcode">
            <h2 className="section-title">Professional Stats</h2>
            <p className="section-subtitle">Code Activity & Network</p>

            <div className="stats-grid">
                {/* LeetCode Card */}
                <a href={LEETCODE_URL} target="_blank" rel="noopener noreferrer" className="leetcode-card stat-card">
                    <img
                        src={STATS_IMAGE_URL}
                        alt={`${LEETCODE_USERNAME}'s LeetCode Stats`}
                        className="leetcode-stats-img"
                    />
                    <div className="stat-overlay">
                        <span>View LeetCode &rarr;</span>
                    </div>
                </a>

                {/* LinkedIn Card */}
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="linkedin-card stat-card">
                    <div className="linkedin-content">
                        <div className="linkedin-header">
                            <span className="linkedin-icon">in</span>
                            <h3>Faisin S Muhammed</h3>
                        </div>
                        <p className="linkedin-role">Flutter Developer Intern</p>
                        <div className="linkedin-stats">
                            <div className="stat-item">
                                <strong>500+</strong>
                                <span>Connections</span>
                            </div>
                        </div>
                        <div className="btn btn-primary btn-sm">
                            Connect on LinkedIn
                        </div>
                    </div>
                    <div className="stat-overlay">
                        <span>View LinkedIn &rarr;</span>
                    </div>
                </a>
            </div>
        </section>
    )
}
