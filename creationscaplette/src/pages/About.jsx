import { Link } from 'react-router-dom';

import { FaGithub, FaLinkedin } from 'react-icons/fa'

import classes from './About.module.css';

import davidImg from '../assets/david.jpg'

import skills from '../data/skills.js';

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
                            <Link to="/contact" className={`${classes.btn} ${classes.btnprimary}`}>
                                Contact Me
                            </Link>
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
                        </p>
                        <Link to="/resume">
                            Check out my online resume.
                        </Link>
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