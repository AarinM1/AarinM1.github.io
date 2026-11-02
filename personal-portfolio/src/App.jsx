import { useEffect, useState } from 'react'
import history from './data/history.json'
import './terminal.css'

const sections = ['About', 'Experience', 'Project', 'Skills', 'Education', 'Contact']
const toolkit = [
  ['Languages & data', 'Java, TypeScript, JavaScript, Python, C, C++, PostgreSQL, CassandraDB'],
  ['Frameworks', 'Spring, Angular, React, Flask, Django, Pandas, NumPy, TensorFlow, Tailwind'],
  ['AWS services', 'EC2, ECS, CloudWatch, Batch, Glue, IAM, Secrets Manager'],
  ['Cloud & engineering', 'AWS, GCP, Databricks, Docker, Kafka, Git, Linux, Jenkins, JUnit, Mockito'],
]
export default function App() {
  const [section, setSection] = useState('About')
  const [theme, setTheme] = useState('amber')
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])
  function selectSection(next) {
    setSection(next)
    const output = document.getElementById('details')
    if (output) output.scrollTop = 0
  }
  return <>
    <a className="skip" href="#details">Skip to details</a>
    <header className="masthead"><a className="home" href="#" onClick={event => { event.preventDefault(); selectSection('About') }} aria-label="Aarin Mhashelkar home"><img className="home-logo" src="/favicon.jpg" alt="" width="48" height="48" /></a><button className="theme-toggle" onClick={() => setTheme(theme === 'amber' ? 'paper' : 'amber')}>{theme === 'amber' ? 'Day mode ☀' : 'Night mode ☾'}</button></header>
    <main className="terminal-window">
      <div className="window-bar"><span className="window-dots" aria-hidden="true"><i/><i/><i/></span><span>portfolio_page</span><span className="window-note">Software Engineer</span></div>
      <div className="terminal-body">
        <div className="identity"><p className="welcome">~/.zshrc</p><h1>Aarin Mhashelkar<span aria-hidden="true">_</span></h1><p className="subtitle">Software Engineer</p></div>
        <nav className="section-buttons" aria-label="Portfolio sections">{sections.map(name => <button key={name} aria-pressed={section === name} aria-controls="details" onClick={() => selectSection(name)}>{name}</button>)}</nav>
        <section id="details" className="details" tabIndex="0" aria-label={`${section} details`}>
          <p className="path" aria-hidden="true">~/portfolio/{section.toLowerCase()}</p>
          <div key={section} className="section-content">
            <h2>{section === 'Project' ? 'Release Detective' : section}</h2>
            {section === 'About' && <><p>I’m a software engineer at Capital One.</p><p>I'm interested in Software Engineering opportunities focused on AI/ML infrastructure, backend engineering, distributed systems, and cloud infrastructure. I'm particularly passionate about building scalable backend systems, ML platforms, LLM-powered applications, AI agents, RAG systems, and high-performance APIs. I'm also interested in working with event-driven architectures, microservices, and developer tools to solve complex engineering challenges.</p></>}
            {section === 'Experience' && <div className="entries">{history.map(item => <article key={item.organisation}><div className="entry-heading"><h3>{item.organisation}</h3><span>{item.startDate} — {item.endDate}</span></div><p className="role">{item.role}</p>{item.experiences.map(text => <p key={text}>{text}</p>)}</article>)}</div>}
            {section === 'Project' && <><p className="role">Incident investigation & release validation</p><p>A developer tool that brings together information to support incident investigation and release validation. It uses AI-assisted analysis to help engineers understand issues and review changes.</p></>}
            {section === 'Skills' && <div className="entries">{toolkit.map(([title, tools]) => <article key={title}><h3>{title}</h3><p>{tools}</p></article>)}</div>}
            {section === 'Education' && <div className="entries"><article><h3>The University of Texas at Austin</h3><p>B.S. in Electrical and Computer Engineering<br/>2021–2025</p><p>Graduated with Honors · Engineering Honors Program</p></article><article><h3>AWS Certified Solutions Architect</h3><p>Associate</p></article></div>}
            {section === 'Contact' && <><p>Find me on GitHub or connect on LinkedIn.</p><div className="contact-links"><a href="https://github.com/AarinM1" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/aarinmhashelkar" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></>}
          </div>
        </section>
      </div>
      <div className="window-footer"><span role="status" aria-live="polite"><span className="status-dot" aria-hidden="true"/> {section}</span><span>Select a section to explore</span></div>
    </main>
    <footer className="site-footer">© {new Date().getFullYear()} Aarin Mhashelkar</footer>
  </>
}
