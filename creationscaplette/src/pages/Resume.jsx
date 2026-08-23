import classes from './Resume.module.css';

import { FaEnvelope, FaGithub, FaLinkedin, FaCode, FaGlobe } from 'react-icons/fa'

import davidImg from '../assets/david.jpg'

const educations = [
    {
        degree: 'Bachelor’s Degree in Computer Science - 2005',
        school: 'Université du Québec à Trois-Rivières',
    },
    {
        degree: 'Computer Science (semester abroad) - 2005',
        school: 'Université Grenoble Alpes, Grenoble, France',
    },
    {
        degree: 'Technical College Degree in Computer Science - 2002',
        school: 'Cégep de Sorel-Tracy, Canada',
    },
]

const languages = [
    'French - native proficiency',
    'English - bilingual proficiency',
    'German - limited working proficiency',
    'Polish - limited working proficiency',
    'Russian - elementary proficiency',
]

const experiences = [
    {
        company: 'Demant Polska, Warsaw, Poland',
        position: 'Senior Software Engineer',
        when: 'Nov. 2023 - Present',
        what: [
            'Build and maintain MAUI mobile applications for healthcare - related products using C# and .NET',
            'Integrate Bluetooth hearing aid connectivity and Auracast features into mobile solutions',
            'Preserve application architecture quality while introducing new functionality and improvements',
            'Write unit tests and support code quality initiatives',
            'Collaborate within SAFe Agile teams across multiple departments',
        ],
        techs: ['C#', 'MAUI', 'Android', 'iOS', '.NET Core', 'xUnit'],
    },
    {
        company: 'EPAM Systems, Wroclaw, Poland',
        position: 'Senior Software Engineer',
        when: 'Oct. 2021 - Oct. 2023',
        what: [
            'Built Xamarin Native Android applications in C# for enterprise mobile solutions',
            'Integrated REST APIs and implemented local data caching with SQLite',
            'Wrote unit tests using NUnit and NSubstitute',
            'Supported Blazor and ASP.NET Core backend teams in full - stack development efforts',
            'Participated in Agile SCRUM ceremonies and cross - functional collaboration',
        ],
        techs: ['C#', 'Xamarin Native Android', 'ASP.NET Core', 'Blazor', 'REST API', 'SQLite', 'NUnit'],
    },
    {
        company: 'Qualitech LM - Alcoa, Deschambault, Canada',
        position: 'System Analyst',
        when: 'Apr. 2018 - Aug. 2021',
        what: [
            'Built desktop and web applications supporting aluminum production operations and industrial workflows',
            'Integrated SQL databases, cloud APIs, and enterprise services into operational systems',
            'Automated business workflows and data processing using HelpSystems Automate',
            'Created data collection and reporting solutions connected to Power BI and OSISoft PI systems',
            'Collaborated directly with plant workers and stakeholders to improve operational efficiency',
        ],
        techs: ['C#', 'JavaScript', 'React', 'SQL Server', 'Power BI', 'OSISoft PI'],
    },
    {
        company: 'Progi, Trois-Rivières, Canada',
        position: 'Software Developer',
        when: 'Sept. 2017 - Feb. 2018',
        what: [
            'Enhanced a web-based appointment management platform for the automotive repair industry',
        ],
        techs: ['PHP', 'Symfony', 'MySQL', 'JavaScript'],
    },
    {
        company: 'Cleio, Trois-Rivières, Canada',
        position: 'Software Developer',
        when: 'Aug. 2015 - Aug. 2017',
        what: [
            'Contributed to the FreeO2 medical platform that automatically adjusted oxygen delivery based on patient condition and oxygen saturation levels',
            'Built Xamarin mobile applications for Android and iOS used to manage fire systems in large buildings',
            'Implemented real-time communication and device integration features',
        ],
        techs: ['C#', 'Xamarin', 'Android', 'iOS', 'Linux', 'WebSockets'],
    },
    {
        company: 'CGI, Shawinigan, Canada',
        position: 'Consultant',
        when: 'Feb. 2015 - Aug. 2015',
        what: [
            'Contributed to enterprise software for electrical network and workforce management',
        ],
        techs: ['C#', 'JavaScript', 'Oracle'],
    },
    {
        company: 'Cleio, Trois-Rivières, Canada',
        position: 'Software Developer',
        when: 'Dec. 2014 - Jan. 2015',
        what: [
            'Built software components for an automated commercial coffee machine platform',
            'Implemented communication between frontend applications, backend services, and embedded firmware systems',
        ],
        techs: ['C#', 'WCF', 'JavaScript', 'AngularJS', 'HTML5', 'CSS'],
    },
    {
        company: '6i, Trois-Rivières, Canada',
        position: 'Analyst Programmer',
        when: 'Apr. 2013 - Nov. 2014',
        what: [
            'Maintained and enhanced business management software for the steel manufacturing industry',
        ],
        techs: ['C#', 'VB.NET', 'SQL Server'],
    },
    {
        company: 'Dakis, Montréal, Canada',
        position: 'Analyst Programmer',
        when: 'Jun. 2011 - Apr. 2013',
        what: [
            'Built photo kiosk software used in retail locations across Canada and internationally',
        ],
        techs: ['C#', 'WPF'],
    },
    {
        company: 'Nokia, Berlin, Germany',
        position: 'Software Engineer',
        when: 'Jun. 2007 - May 2011',
        what: [
            'Worked on mobile frameworks, GPS navigation software, multiplayer mobile games, and device APIs for Symbian and Nokia N900 platforms within international Agile teams',
        ],
        techs: ['C++', 'Symbian', 'C#', 'Java', 'J2ME', 'JavaScript', 'CSS'],
    },
    {
        company: 'Acony Games, Villingen-Schwenningen, Germany',
        position: 'Game Programmer',
        when: 'Sept. 2006 - Jun. 2007',
        what: [
            'Implemented gameplay mechanics and interactive object behavior for the first-person shooter game Parabellum',
        ],
        techs: ['C++', 'Unreal Script'],
    },
    {
        company: 'Beenox, Québec City, Canada',
        position: '3D Programmer',
        when: 'Nov. 2005 - Aug. 2006',
        what: [
            'Adapted console games including Marvel Ultimate Alliance and X-Men: The Official Game for PC platforms',
        ],
        techs: ['C++', 'DirectX', '3D Studio Max'],
    },
    {
        company: 'EA Mobile, Montréal, Canada',
        position: 'Porting Programmer',
        when: 'Jul. 2004 - Nov. 2005',
        what: [
            'Ported and customized mobile games for multiple devices and service providers',
        ],
        techs: ['C++', 'Java (J2ME)'],
    },
    {
        company: 'Finkl Steel, Sorel-Tracy, Canada',
        position: 'Programmer',
        when: 'Mar. 2002 - Aug. 2003',
        what: [
            'Built production scheduling software supporting steel manufacturing operations',
        ],
        techs: ['VB 6', 'VB.NET', 'Crystal Reports', 'SQL Server'],
    },
]

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