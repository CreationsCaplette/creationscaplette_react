import { FaGithub, FaLinkedin } from 'react-icons/fa'

import davidImg from './assets/david.jpg'
import './App.css'

function App() {
  return (
    <>
      <section id="header">
        <div className="mugshot">
          <img src={davidImg} className="base" width="200" height="200" alt="" />
        </div>
        <div className="introduction">
          <h1>David Caplette</h1>
          <p>
            Senior .NET Engineer with 20+ years of experience developing mobile, desktop, gaming, and enterprise applications across healthcare, industrial automation, telecommunications, and consumer software industries.
          </p>
          <p>
            Specialized in C#, .NET, Xamarin, and MAUI with strong expertise in cross-platform mobile development, software architecture, REST APIs, and device integration.
          </p>
          <p>
            Experienced working in international Agile teams across Europe and North America, delivering scalable solutions for both enterprise and consumer products.
          </p>
        </div>
      </section>

      <section id="skills">
        <div className="overview">
          <p>
            Senior .NET Engineer with 20+ years of experience developing mobile, desktop, gaming, and enterprise applications across healthcare, industrial automation, telecommunications, and consumer software industries.
          </p>
          <p>
            Specialized in C#, .NET, Xamarin, and MAUI with strong expertise in cross-platform mobile development, software architecture, REST APIs, and device integration.
          </p>
          <p>
            Experienced working in international Agile teams across Europe and North America, delivering scalable solutions for both enterprise and consumer products.
          </p>
        </div>
      </section>

      <section id="footer">
        <div id="social">
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
      </section>
    </>
  )
}

export default App
