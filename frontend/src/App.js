import React, { useState } from 'react';
import './App.css';
import BorderGlow from './components/BorderGlow';
import ResumeUploader from './components/ResumeUploader';
import PastResumesTable from './components/PastResumesTable';
import ResumeDetails from './components/ResumeDetails';

function App() {
  const [activeTab, setActiveTab] = useState('upload');
  const [selectedResume, setSelectedResume] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewDetails = (resume) => {
    setSelectedResume(resume);
    setShowModal(true);
  };

  return (
    <div className="App">
      <BorderGlow
        edgeSensitivity={30}
        glowColor="18 32 96"
        backgroundColor="#040816"
        borderRadius={28}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated={false}
        colors={['#020617', '#0f172a', '#1e3a8a']}
      >
        <div className="app-shell">
          <header className="app-header">
            <h1>CVision</h1>
            <nav className="tab-navigation">
              <button 
                className={activeTab === 'upload' ? 'active' : ''}
                onClick={() => setActiveTab('upload')}
              >
                Resume Analysis
              </button>
              <button 
                className={activeTab === 'history' ? 'active' : ''}
                onClick={() => setActiveTab('history')}
              >
                Historical Viewer
              </button>
            </nav>
          </header>

          <main className="app-main">
            {activeTab === 'upload' && <ResumeUploader />}
            {activeTab === 'history' && (
              <PastResumesTable onViewDetails={handleViewDetails} />
            )}
          </main>
        </div>

        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
              <ResumeDetails resume={selectedResume} />
            </div>
          </div>
        )}
      </BorderGlow>
    </div>
  );
}

export default App;
