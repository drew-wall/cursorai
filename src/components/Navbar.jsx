import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import aiLogo from '../assets/ai-logo.svg';

export default function Navbar() {
  const location = useLocation();
  const isRoot = location.pathname === '/';

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <img src={aiLogo} alt="AI Logo" className={styles.logo} />
        <h1>Artificial Intelligence</h1>
        <div className={styles.navLinks}>
          <NavLink 
            to="/introduction" 
            className={({ isActive }) => 
              isActive || isRoot ? styles.activeLink : styles.link
            }
          >
            Introduction
          </NavLink>
          <NavLink 
            to="/tools" 
            className={({ isActive }) => 
              isActive ? styles.activeLink : styles.link
            }
          >
            Tools
          </NavLink>
          <NavLink 
            to="/terminologies" 
            className={({ isActive }) => 
              isActive ? styles.activeLink : styles.link
            }
          >
            Terminologies
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? styles.activeLink : styles.link
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
} 