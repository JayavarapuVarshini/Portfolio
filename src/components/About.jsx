import React from 'react';
import { portfolioConfig } from '../config/portfolioConfig';

export default function About({ onOpenResumeModal }) {
  const { about } = portfolioConfig.personal;

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">
          About <span className="highlight">Me</span>
        </h2>

        <div className="about-single-wrapper">
          <div className="about-body">
            {about.paragraphs.map((p, idx) => (
              <p key={idx} className="about-lead-text">{p}</p>
            ))}

            {/* Resume button in About Me section */}
            <div className="about-actions-row" style={{ marginTop: '1.75rem' }}>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={onOpenResumeModal}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <span>View Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
