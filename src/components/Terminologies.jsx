import { aiTerminologies } from '../data/aiTerminologies';
import './Terminologies.css';

export default function Terminologies() {
  return (
    <div className="terminologies-container">
      <h2 style={{ textAlign: 'Left' }}>AI Terminologies</h2>
      <div className="terminologies-list" style={{ width: '45vw', marginLeft: '20px', textAlign: 'left' }}>
        {aiTerminologies
          .sort((a, b) => a.term.localeCompare(b.term))
          .map((item) => (
          <div 
            key={item.term} 
            id={item.term.replace(/\s+/g, '-')}
            className="terminology-item"
          >
            <h3 style={{ textAlign: 'left' }}>{item.term}</h3>
            <p style={{ fontSize: '1.2em', textAlign: 'left', marginTop: '-18px', paddingLeft: '10px' }}>
              {item.definition}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
} 