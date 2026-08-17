import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav className={classes.topbar}>
                <div className={classes.brand}>Creations Caplette</div>
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
                            to="/skills"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            Skills
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