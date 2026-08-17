import { FaGithub, FaLinkedin } from 'react-icons/fa'

import davidImg from './assets/david.jpg'
import './App.css'

const skills = [
  {
    title: 'Frontend',
    items: ['C# / .NET', 'Xamarin', 'MAUI', 'Blazor', 'ASP.NET Core'],
  },
  {
    title: 'Backend',
    items: ['REST APIs', 'Architecture', 'Database Design', 'Integration', 'Cloud'],
  },
  {
    title: 'Other',
    items: ['Agile Teams', 'DevOps', 'Testing', 'UI/UX', 'Leadership'],
  },
]

function App() {
  return (
    <div className="page-shell">
      <header id="header">
        <div className="topbar">
          <div className="brand">David Caplette</div>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="header-inner">
          <div className="mugshot">
            <img src={davidImg} alt="David Caplette" />
          </div>

          <div className="introduction">
            <p className="eyebrow">Hello, my name is</p>
            <h1>David Caplette</h1>
            <p className="lead">
              I&apos;m a senior software developer specialised in building robust, scalable, cross-platform applications for modern businesses.
            </p>
            <div className="actions">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <section id="skills" className="section-block">
          <div className="section-heading">
            <h2>Skills Overview</h2>
            <p>
              I have more than 20 years&apos; experience building reliable software for healthcare, industrial automation, telecommunications, and consumer products.
              <a href="#resume">Check out my online resume</a>.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((group) => (
              <article key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="footer">
        <div id="social" className="footer-inner">
          <h2>Connect with me</h2>
          <ul>
            <li>
              <a href="https://linkedin.com/in/davidcaplette" target="_blank" rel="noreferrer">
                <FaLinkedin size={18} />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/CreationsCaplette" target="_blank" rel="noreferrer">
                <FaGithub size={18} />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default App
