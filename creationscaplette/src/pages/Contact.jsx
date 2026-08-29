import { Link } from 'react-router-dom';

import { FaGithub, FaLinkedin } from 'react-icons/fa'

import classes from './Contact.module.css';
import davidImg from '../assets/david.jpg'

function ContactPage() {
    return (
        <div className='pageShell'>
            <header className='pageHeader'>
                <div className='pageHeaderTop'>
                    <h1>Contact</h1>
                </div>
            </header>

            <main>
                <div className={classes.mugshot}>
                    <img src={davidImg} alt="David Caplette" />
                </div>

                <div className={classes.pageContent}>
                    <p className={classes.introduction}>
                        Check out my <Link to="/projects">projects</Link> and <Link to="/resume">resume.</Link>
                        You can also get in touch with me using the form below.
                    </p>

                    <h2>You can also find me on the following channels</h2>

                    <ul className={classes.socialLinks}>
                        <li>
                            <a
                                href="https://linkedin.com/in/davidcaplette"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={28} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/CreationsCaplette"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub size={28} />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={classes.pageContent}>
                    <form className={classes.contactForm}>
                        <h2>Get In Touch</h2>

                        <div className={classes.formRow}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                aria-label="Name"
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                aria-label="Email"
                                required
                            />
                        </div>

                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            aria-label="Message"
                            rows="5"
                            required
                        />

                        <button type="submit">Send It</button>
                    </form>
                </div>
            </main>

            <footer className='pageFooter'>
                <p className='footerCopyrights'>Copyright © CreationsCaplette</p>
            </footer>
        </div>
    )
}

export default ContactPage;