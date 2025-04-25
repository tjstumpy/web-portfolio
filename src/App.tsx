import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Screens/Homepage/Homepage.tsx';
import ProjectPage from './components/Screens/ProjectPage/ProjectPage.tsx';
import ScrollToTop from './components/Util/ScrollToTop.tsx';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects/:projectName" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
