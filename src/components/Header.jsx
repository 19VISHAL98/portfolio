import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => (
    <header>
        <nav className="nav">
            <NavLink to="/" className={({ isActive }) => isActive ? 'list-text active' : 'list-text'}>
                Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'list-text active' : 'list-text'}>
                About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'list-text active' : 'list-text'}>
                Contact
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'list-text active' : 'list-text'}>
                Projects
            </NavLink>
            <NavLink to="/skills" className={({ isActive }) => isActive ? 'list-text active' : 'list-text'}>
                Skills
            </NavLink>
            <NavLink to="/education" className={({ isActive }) => isActive ? 'list-text active' : 'list-text'}>
                Education
            </NavLink>
            <NavLink to="/experience" className={({ isActive }) => isActive ? 'list-text active' : 'list-text'}>
                Experience
            </NavLink>
        </nav>
    </header>
);

export default Header;
