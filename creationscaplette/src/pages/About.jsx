import { FaGithub, FaLinkedin } from 'react-icons/fa'

import classes from './About.module.css';

import davidImg from '../assets/david.jpg'

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

function AboutPage() {
    return (
        <div className={classes.pageshell}>
            <header className={classes.header}>
                <div className={classes.headerinner}>
                    <div className={classes.mugshot}>
                        <img src={davidImg} alt="David Caplette" />
                    </div>

                    <div className={classes.introduction}>
                        <p className={classes.eyebrow}>Hello, my name is</p>
                        <h1>David Caplette</h1>
                        <p className={classes.lead}>
                            I&apos;m a senior software developer specialised in building robust, scalable, cross-platform applications for modern businesses.
                        </p>
                        <div className={classes.actions}>
                            <a href="#contact" className={`${classes.btn} ${classes.btnprimary}`}>
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <main className={classes.content}>
                <section className={classes.sectionblock}>
                    <div className={classes.sectionheading}>
                        <h2>Skills Overview</h2>
                        <p>
                            I have more than 20 years&apos; experience building reliable software for healthcare, industrial automation, telecommunications, and consumer products.
                            <a href="#resume">Check out my online resume</a>.
                        </p>
                    </div>

                    <div className={classes.skillsgrid}>
                        {skills.map((group) => (
                            <article key={group.title} className={classes.skillcard}>
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

            <footer className={classes.footer}>
                <div className={classes.footerinner}>
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

export default AboutPage;