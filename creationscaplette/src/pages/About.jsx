import { Link } from 'react-router-dom';

import classes from './About.module.css';

import davidImg from '../assets/david.jpg'

import skills from '../data/skills.js';

function AboutPage() {
    return (
        <div className='pageShell'>
            <header className='pageHeader'>
                <div className='pageHeaderInner'>
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
                            <Link to="/contact" className='btn btnPrimary'>
                                Contact Me
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <main className='pageContent'>
                <section className='sectionBlock'>
                    <div className='sectionHeading'>
                        <h2>Skills Overview</h2>
                        <p>
                            I have more than 20 years&apos; experience building reliable software for healthcare, industrial automation, telecommunications, and consumer products.
                        </p>
                        <Link to="/resume">
                            Check out my online resume.
                        </Link>
                    </div>

                    <div className={classes.skillsGrid}>
                        {skills.map((group) => (
                            <article key={group.title} className={classes.skillCard}>
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

            <footer className='pageFooter'>
                <p className='footerCopyrights'>Copyright © CreationsCaplette</p>
            </footer>
        </div>
    )
}

export default AboutPage;