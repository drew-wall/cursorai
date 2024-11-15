import styles from './Sidebar.module.css';
import { aiTerminologies } from '../data/aiTerminologies';

export default function TerminologiesSidebar() {
  const scrollToTerm = (term) => {
    setTimeout(() => {
      const element = document.getElementById(term.replace(/\s+/g, '-'));
      if (element) {
        document.querySelectorAll('.terminology-item').forEach(item => {
          item.classList.remove('active');
        });
        element.classList.add('active');
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, 100);
  };

  return (
    <nav className={styles.sidebar}>
      <h2 style={{ textAlign: 'left' }}>Terms</h2>
      <ul className={styles.linkList}>
        {aiTerminologies
          .sort((a, b) => a.term.localeCompare(b.term))
          .map(item => (
            <li key={item.term}>
              <a 
                href={`#${item.term.replace(/\s+/g, '-')}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTerm(item.term);
                }}
              >
                {item.term}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
} 