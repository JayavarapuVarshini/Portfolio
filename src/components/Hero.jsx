import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../config/portfolioConfig';
import heroIllustration from '../assets/developer-hero.png';

export default function Hero() {
  const { fullName, introLabel, bioIntro, roles, contact } = portfolioConfig.personal;
  const heroImageSrc = portfolioConfig.personal.heroImage || heroIllustration;

  // Typing animation state
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    let timer;

    if (!isDeleting) {
      // Typing phase
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, 85);
      } else {
        // Pause at full word
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      // Deleting phase
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        }, 45);
      } else {
        // Move to next word
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Introduction, Name, Typing Roles, Bio */}
          <div className="hero-left">
            <div className="hero-intro-label">{introLabel}</div>
            
            <h1 className="hero-name">{fullName}</h1>

            {/* Smooth Typing Animation */}
            <div className="hero-roles-wrapper" aria-label={`Current focus: ${roles[currentRoleIndex]}`}>
              <span className="typed-text">{currentText}</span>
              <span className="typing-cursor" aria-hidden="true"></span>
            </div>

            <p className="hero-bio">{bioIntro}</p>
          </div>

          {/* Right Column: Unified Developer Illustration with floating badges (BUILD, ANALYZE, CREATE, SOLVE) */}
          <div className="hero-right">
            <div className="hero-illustration-card">
              <img
                src={heroImageSrc}
                alt={`${fullName} - Developer Illustration`}
                className="hero-illustration-img"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons positioned on the bottom-left */}
      <div className="hero-socials-left">
        {contact.linkedin && (
          <a 
            href={contact.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        )}

        {contact.github && (
          <a 
            href={contact.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        )}

        {contact.email && (
          <a 
            href={`mailto:${contact.email}`} 
            className="social-link"
            aria-label="Direct Email"
            title={`Email ${contact.email}`}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        )}
      </div>

      {/* Scroll Down Indicator (Centered) */}
      <button 
        type="button" 
        className="hero-scroll-down"
        onClick={(e) => scrollToSection(e, 'about')}
        aria-label="Scroll down to About section"
      >
        <div className="scroll-mouse-icon">
          <div className="scroll-mouse-dot"></div>
        </div>
        <span>SCROLL DOWN</span>
      </button>
    </section>
  );
}
