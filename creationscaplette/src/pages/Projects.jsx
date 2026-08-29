import { useState } from 'react'

import classes from './Projects.module.css';

import projects from '../data/projects.js';

const filters = [
    'All',
    ...new Set(projects.flatMap((project) => project.technologies)),
]

function ProjectsPage() {
    const [selectedTechnology, setSelectedTechnology] = useState('All')

    const filteredProjects = projects.filter((project) =>
        selectedTechnology === 'All'
            ? true
            : project.technologies.includes(selectedTechnology)
    )

    return (
        <div className='pageShell'>
            <header className='pageHeader'>
                <div className='pageHeaderTop'>
                    <h1>Projects</h1>
                    <h2>Different projects or studies to show what I can do and what I am interested in</h2>
                </div>
            </header>

            <main className='pageContent'>
                <nav className={classes.filters} aria-label="Filter projects by technology">
                    {filters.map((technology) => (
                        <button
                            key={technology}
                            type="button"
                            className={selectedTechnology === technology ? classes.activeFilter : ''}
                            onClick={() => setSelectedTechnology(technology)}
                            aria-pressed={selectedTechnology === technology}
                        >
                            {technology}
                        </button>
                    ))}
                </nav>

                <section className={classes.projectGrid} aria-live="polite">
                    {filteredProjects.map((project) => (
                        <article className={classes.projectCard} key={project.title}>
                            <div className={classes.imageWrapper}>
                                <img
                                    src={project.image}
                                    alt=""
                                    className={classes.projectImage}
                                />
                                <h3>{project.title}</h3>
                            </div>

                            <div className={classes.projectDetails}>
                                <p>{project.description}</p>

                                <ul className={classes.technologies}>
                                    {project.technologies.map((technology) => (
                                        <li key={technology}>{technology}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    )
}

export default ProjectsPage;