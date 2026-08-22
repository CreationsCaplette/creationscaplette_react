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

            <main className={classes.content}>
                <section className={classes.sectionblock}>
                    <h2>PROFESSIONAL SUMMARY</h2>
                    <p>
                        Senior .NET Engineer with 20+ years of experience developing mobile, desktop, gaming, and
                        enterprise applications across healthcare, industrial automation, telecommunications, and
                        consumer software industries. Specialized in C#, .NET, Xamarin, and MAUI with strong expertise
                        in cross-platform mobile development, software architecture, REST APIs, and device integration.
                        Experienced working in international Agile teams across Europe and North America, delivering
                        scalable solutions for both enterprise and consumer products.
                    </p>
                </section>

                <section className={classes.sectionblock}>
                    <h2>TECHNICAL SKILLS</h2>
                    <p>
                        C#, .NET, .NET Core, ASP.NET Core, MAUI, Xamarin, Blazor, React, SQL Server, SQLite, REST APIs,
                        Android, iOS, C++, JavaScript, Agile, SCRUM, SAFe, Visual Studio, Rider
                    </p>
                </section>

                <section className={classes.experience}>
                    <h2>PROFESSIONAL EXPERIENCE</h2>

                    <ul>
                        <li>
                            <p className={classes.company}>Demant Polska, Warsaw, Poland</p>
                            <p className={classes.position}>Senior Software Engineer</p>
                            <p className={classes.when}>Nov. 2023 - Present</p>
                        </li>
                        <li>
                            <p className={classes.company}>EPAM Systems, Wroclaw, Poland</p>
                            <p className={classes.position}>Senior Software Engineer</p>
                            <p className={classes.when}>Oct. 2021 - Oct. 2023</p>
                        </li>

                    </ul>
                </section>
            </main>

        </div>
    )
}

export default ResumePage;