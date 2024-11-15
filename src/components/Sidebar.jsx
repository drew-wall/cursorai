import styles from './Sidebar.module.css';
import { aiData } from '../data/aiData';
import { useState } from 'react';

export default function Sidebar() {
  const categories = [...new Set(aiData.map(item => item.category))].sort();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scrollToItem = (url) => {
    setTimeout(() => {
      const element = document.getElementById(url.replace(/[^\w\s]/g, ''));
      if (element) {
        document.querySelectorAll('.ai-item').forEach(item => {
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

  const scrollToCategory = (category) => {
    const element = document.getElementById(`category-${category.replace(/\s+/g, '-')}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsDropdownOpen(false);
  };

  return (
    <nav className={styles.sidebar}>
      <div className={styles.headerContainer}>
        <h2 style={{ textAlign: 'left' }}>AI Tools - By Category</h2>
        <div className={styles.dropdown}>
          <button 
            className={styles.dropdownButton}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            ▼
          </button>
          {isDropdownOpen && (
            <ul className={styles.dropdownMenu}>
              {categories.map(category => (
                <li 
                  key={category}
                  onClick={() => scrollToCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className={styles.categoriesContainer}>
        {categories.map(category => (
          <div 
            key={category} 
            className={styles.category}
            id={`category-${category.replace(/\s+/g, '-')}`}
          >
            <h2 className={styles.categoryTitle}>{category}</h2>
            <ul className={styles.linkList}>
              {aiData
                .filter(item => item.category === category)
                .sort((a, b) => a.url.localeCompare(b.url))
                .map(item => (
                  <li key={item.url}>
                    <a 
                      href={`#${item.url.replace(/[^\w\s]/g, '')}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToItem(item.url);
                      }}
                    >
                      {item.url}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
} 