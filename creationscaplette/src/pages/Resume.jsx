import classes from './Resume.module.css';

import { FaEnvelope, FaGithub, FaLinkedin, FaCode, FaGlobe } from 'react-icons/fa';

import davidImg from '../assets/david.jpg';

import educations from '../data/educations.js';
import languages from '../data/languages.js';
import experiences from '../data/experiences.js';

function ResumePage() {
    return (
        <div className={classes.pageshell}>
            <header className={classes.header}>
                <div className={classes.headertop}>
                    <h1>Resume</h1>
                    <a
                        href="/public/files/David_Caplette_CV.pdf"
                        download
                        className={`${classes.btn} ${classes.btnprimary}`}
                    >
                        Download PDF Version
                    </a>
                </div>
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

                <section className={classes.education}>
                    <h2>EDUCATION</h2>
                    <ul>
                        {educations.map((education) => (
                            <li key={education.degree}>
                                <p className={classes.degree}>{education.degree}</p>
                                <p className={classes.school}>{education.school}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className={classes.languages}>
                    <h2>LANGUAGES</h2>
                    <ul>
                        {languages.map((language) => (
                            <li key={language}>{language}</li>
                        ))}
                    </ul>
                </section>

                <section className={classes.experience}>
                    <h2>PROFESSIONAL EXPERIENCE</h2>
                    <ul>
                        {experiences.map((experience) => (
                            <li key={experience.when}>
                                <p className={classes.company}>{experience.company}</p>
                                <p className={classes.position}>{experience.position}</p>
                                <p className={classes.when}>{experience.when}</p>
                                <ul>
                                    {experience.what.map((what) => (
                                        <li key={what}>{what}</li>
                                    ))}
                                </ul>
                                <ul>
                                    <li key="technologies">Technologies</li>
                                    {experience.techs.map((tech) => (
                                        <li key={tech}>{tech}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>

        </div>
    )
}

export default ResumePage;