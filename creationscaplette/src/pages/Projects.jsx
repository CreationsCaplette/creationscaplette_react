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
        <div className={classes.pageshell}>
            <header className={classes.header}>
                <div className={classes.headertop}>
                    <h1>Projects</h1>
                    <h2>Different projects or studies to show what I can do and what I am interested in</h2>
                </div>
            </header>

            <main className={classes.content}>
                <nav className={classes.filters} aria-label="Filter projects by technology">
                    {filters.map((technology) => (
                        <button
                            key={technology}
                            type="button"
                            className={selectedTechnology === technology ? classes.activefilter : ''}
                            onClick={() => setSelectedTechnology(technology)}
                            aria-pressed={selectedTechnology === technology}
                        >
                            {technology}
                        </button>
                    ))}
                </nav>

                <section className={classes.projectgrid} aria-live="polite">
                    {filteredProjects.map((project) => (
                        <article className={classes.projectcard} key={project.title}>
                            <img
                                src={project.image}
                                alt=""
                                className={classes.projectimage}
                            />

                            <div className={classes.projectdetails}>
                                <h3>{project.title}</h3>
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