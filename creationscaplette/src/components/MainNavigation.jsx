import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav className={classes.topBar}>
                <ul className={classes.list}>
                    <a href="https://linkedin.com/in/davidcaplette" target="_blank" rel="noreferrer">
                        <FaLinkedin size={18} />
                    </a>
                    <a href="https://github.com/CreationsCaplette" target="_blank" rel="noreferrer">
                        <FaGithub size={18} />
                    </a>
                </ul>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                            end
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/resume"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            Resume
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;