import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DeveloperTerminal from './components/DeveloperTerminal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ResumeModal from './components/ResumeModal';
import { portfolioConfig } from './config/portfolioConfig';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3200);
  };

  return (
    <div className="portfolio-app">
      {/* Custom Sleek Pointer/Cursor */}
      <CustomCursor />

      {/* Header & Sticky Navigation */}
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Content Sections: 1.Hero, 2.About, 3.Skills, 4.Projects, 5.Terminal, 6.Contact */}
      <main>
        <Hero />
        <About onOpenResumeModal={() => setResumeModalOpen(true)} />
        <Skills />
        <Projects />
        <DeveloperTerminal />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Comprehensive Resume Viewer Modal */}
      <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={() => setResumeModalOpen(false)} 
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notice" role="status">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
