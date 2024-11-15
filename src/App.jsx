import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AIList from './components/AIList';
import Terminologies from './components/Terminologies';
import Introduction from './components/Introduction';
import Sidebar from './components/Sidebar';
import TerminologiesSidebar from './components/TerminologiesSidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import './App.css';

function AppContent() {
  const location = useLocation();
  const hasSidebar = location.pathname === '/tools' || location.pathname === '/terminologies';
  
  return (
    <div className="App">
      <Navbar />
      {location.pathname === '/tools' ? <Sidebar /> : 
       location.pathname === '/terminologies' ? <TerminologiesSidebar /> : null}
      <div className={`main-content ${hasSidebar ? 'with-sidebar' : ''}`}>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/tools" element={<AIList />} />
          <Route path="/terminologies" element={<Terminologies />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
} 

