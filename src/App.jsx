import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:appId/privacy" element={<PrivacyPage />} />
        <Route path="/:appId/terms" element={<TermsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
