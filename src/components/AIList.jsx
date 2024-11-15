import { aiData } from '../data/aiData';
import './AIList.css';  // We'll add styles here

export default function AIList() {
  const sortedData = [...aiData].sort((a, b) => a.url.localeCompare(b.url));

  return (
    <div className="ai-list">
      <h2 style={{ textAlign: 'Left' }}>AI Tools</h2>
      {sortedData.map((item) => (
        <div 
          key={item.url}
          id={item.url.replace(/[^\w\s]/g, '')}
          className="ai-item"
        >
          <h3 style={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
            <a href={`https://${item.url}`} target="_blank" rel="noopener noreferrer">
              {item.url}
            </a>
            <span style={{ marginLeft: '15px', fontSize: '0.8em' }}>{item.category}</span>
            <span style={{ marginLeft: '15px', fontSize: '0.8em' }}>({item.pricing})</span>
          </h3>
          <span style={{ display: 'block', width: '50vw', fontSize: '1.2em', textAlign: 'left', marginTop: '-18px', paddingLeft: '10px' }}>{item.description}</span>
        </div>
      ))}
    </div>
  );
}