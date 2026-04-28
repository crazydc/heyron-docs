import Layout from '../components/layout/Layout'
import './Academy.css'

export default function Academy() {
  const courses = [
    { title: 'Heyron Fundamentals', level: 'Beginner', duration: '30 min', lessons: 5 },
    { title: 'Advanced Agent Customization', level: 'Intermediate', duration: '1 hour', lessons: 8 },
    { title: 'Building Custom Tools', level: 'Advanced', duration: '2 hours', lessons: 12 },
    { title: 'Productivity Masterclass', level: 'Beginner', duration: '45 min', lessons: 6 },
  ]

  const tips = [
    { title: '5 Ways to Get More from Your Agent', category: 'Tips' },
    { title: 'Memory Management Best Practices', category: 'Advanced' },
    { title: 'Integrating with Zapier', category: 'Tutorial' },
    { title: 'Voice & Personality Setup Guide', category: 'Guide' },
  ]

  return (
    <Layout>
      <div className="academy-page">
        <div className="academy-container">
          <h1>Academy</h1>
          <p className="academy-intro">Learn to get the most from your AI agent.</p>

          <section className="academy-section">
            <h2>Courses</h2>
            <div className="courses-grid">
              {courses.map((course, i) => (
                <div key={i} className="course-card">
                  <div className="course-level">{course.level}</div>
                  <h3>{course.title}</h3>
                  <div className="course-meta">
                    <span>{course.duration}</span>
                    <span>{course.lessons} lessons</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="academy-section">
            <h2>Latest Articles</h2>
            <div className="articles-list">
              {tips.map((tip, i) => (
                <a key={i} href="#" className="article-item">
                  <span className="article-category">{tip.category}</span>
                  <h3>{tip.title}</h3>
                </a>
              ))}
            </div>
          </section>

          <section className="academy-section">
            <h2>Coming Soon</h2>
            <div className="coming-soon">
              <div className="coming-soon-card">
                <span className="coming-soon-icon">🎓</span>
                <h3>Certification Program</h3>
                <p>Earn recognition for your Heyron expertise.</p>
              </div>
              <div className="coming-soon-card">
                <span className="coming-soon-icon">🎥</span>
                <h3>Video Masterclasses</h3>
                <p>In-depth video courses from the team.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}