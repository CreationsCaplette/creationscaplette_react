import classes from './Resume.module.css';

import { FaEnvelope, FaGithub, FaLinkedin, FaCode, FaGlobe } from 'react-icons/fa'

import davidImg from '../assets/david.jpg'

function ResumePage() {
    return (
        <div className={classes.pageshell}>
            <header className={classes.header}>
                <div className={classes.headerinner}>
                    <div className={classes.mugshot}>
                        <img src={davidImg} alt="David Caplette" />
                    </div>

                    <div className={classes.maininfo}>
                        <h1>David Caplette</h1>
                        <h2>Senior Software Developer</h2>
                        <ul>
                            <li>
                                <a href="mailto:david.caplette@gmail.com">
                                    <FaEnvelope size={18} />
                                    david.caplette@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={classes.contactlinks}>
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
                            <li>
                                <a href="https://dev.to/david_caplette" target="_blank" rel="noreferrer">
                                    <FaCode size={18} />
                                    dev.to/david_caplette
                                </a>
                            </li>
                            <li>
                                <a href="https://creationscaplette.com" target="_blank" rel="noreferrer">
                                    <FaGlobe size={18} />
                                    creationscaplette.com
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default ResumePage;