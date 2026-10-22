import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../config/portfolioConfig';

export default function Navbar({ onOpenResumeModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { monogram, fullName, contact } = portfolioConfig.personal;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section Observer for Active Nav link
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'terminal', 'contact'];
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    onOpenResumeModal();
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Monogram Logo */}
        <a 
          href="#home" 
          className="monogram-logo" 
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label={`${fullName} Home`}
        >
          <div className="vj-badge">{monogram}</div>
        </a>

        {/* Navigation Links */}
        <nav>
          <ul className={`nav-links-list ${mobileMenuOpen ? 'open' : ''}`}>
            <li className="nav-link-item">
              <a 
                href="#home" 
                className={activeSection === 'home' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li className="nav-link-item">
              <a 
                href="#about" 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About
              </a>
            </li>
            <li className="nav-link-item">
              <a 
                href="#skills" 
                className={activeSection === 'skills' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'skills')}
              >
                Skills
              </a>
            </li>
            <li className="nav-link-item">
              <a 
                href="#projects" 
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'projects')}
              >
                Projects
              </a>
            </li>
            <li className="nav-link-item">
              <a 
                href="#terminal" 
                className={activeSection === 'terminal' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'terminal')}
              >
                Terminal
              </a>
            </li>
            <li className="nav-link-item">
              <a 
                href="#contact" 
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="header-actions">
          <button 
            type="button" 
            className="btn-resume" 
            onClick={handleResumeClick}
            title={contact.resumeUrl ? "View Resume" : "Resume Details"}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
            <span>Resume</span>
          </button>

          <button 
            type="button" 
            className="mobile-nav-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
