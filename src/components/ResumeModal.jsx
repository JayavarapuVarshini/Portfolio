import React from 'react';
import { portfolioConfig } from '../config/portfolioConfig';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { resumeData } = portfolioConfig.personal;

  const handleDownloadPdf = () => {
    window.print();
  };

  return (
    <div 
      className="modal-overlay resume-modal-overlay" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true"
    >
      <div 
        className="modal-content resume-modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar with Actions */}
        <div className="resume-modal-topbar">
          <div className="resume-modal-title-group">
            <span className="resume-badge">Curriculum Vitae</span>
            <span className="resume-person-name">{resumeData.fullName}</span>
          </div>

          <div className="resume-topbar-actions">
            <button 
              type="button" 
              className="btn btn-primary btn-sm btn-download-pdf"
              onClick={handleDownloadPdf}
              title="Print or Save as PDF"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download PDF</span>
            </button>

            <button 
              type="button" 
              className="modal-close-btn" 
              onClick={onClose}
              aria-label="Close dialog"
            >
              &times;
            </button>
          </div>
        </div>

        {/* Printable/Viewable Resume Sheet */}
        <div className="resume-paper" id="printable-resume">
          {/* Header */}
          <div className="resume-header">
            <h1 className="resume-name">{resumeData.fullName}</h1>
            <div className="resume-contact-line">
              <span>{resumeData.phone}</span>
              <span className="sep">|</span>
              <a href={`mailto:${resumeData.email}`} className="resume-link">{resumeData.email}</a>
              <span className="sep">|</span>
              <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="resume-link">Linkedin</a>
              <span className="sep">|</span>
              <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="resume-link">Github</a>
            </div>
          </div>

          {/* Objective */}
          <div className="resume-section">
            <h2 className="resume-section-title">OBJECTIVE</h2>
            <p className="resume-text">{resumeData.objective}</p>
          </div>

          {/* Education */}
          <div className="resume-section">
            <h2 className="resume-section-title">EDUCATION</h2>
            <div className="resume-row-split">
              <div>
                <strong>{resumeData.education.institution}</strong>
                <div>{resumeData.education.degree} - <em>{resumeData.education.cgpa}</em></div>
              </div>
              <div className="resume-row-right">
                <div>{resumeData.education.location}</div>
                <div>{resumeData.education.period}</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="resume-section">
            <h2 className="resume-section-title">TECHNICAL SKILLS</h2>
            <div className="resume-skills-table">
              <div className="resume-skill-row">
                <span className="skill-cat">Languages:</span>
                <span className="skill-vals">{resumeData.technicalSkills.languages}</span>
              </div>
              <div className="resume-skill-row">
                <span className="skill-cat">Web Development:</span>
                <span className="skill-vals">{resumeData.technicalSkills.webDevelopment}</span>
              </div>
              <div className="resume-skill-row">
                <span className="skill-cat">Databases:</span>
                <span className="skill-vals">{resumeData.technicalSkills.databases}</span>
              </div>
              <div className="resume-skill-row">
                <span className="skill-cat">Developer Tools:</span>
                <span className="skill-vals">{resumeData.technicalSkills.developerTools}</span>
              </div>
              <div className="resume-skill-row">
                <span className="skill-cat">Soft Skills:</span>
                <span className="skill-vals">{resumeData.technicalSkills.softSkills}</span>
              </div>
              <div className="resume-skill-row">
                <span className="skill-cat">Core concepts:</span>
                <span className="skill-vals">{resumeData.technicalSkills.coreConcepts}</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="resume-section">
            <h2 className="resume-section-title">EXPERIENCE</h2>
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="resume-entry">
                <strong className="resume-entry-title">{exp.role}</strong>
                <ul className="resume-bullets">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="resume-section">
            <h2 className="resume-section-title">CERTIFICATIONS</h2>
            <ul className="resume-bullets">
              {resumeData.certifications.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="resume-section">
            <h2 className="resume-section-title">PROJECTS</h2>
            {resumeData.projects.map((proj, idx) => (
              <div key={idx} className="resume-entry">
                <div className="resume-proj-header">
                  <strong>{proj.name}</strong>
                  <span className="resume-proj-tech">~{proj.tech}</span>
                </div>
                <ul className="resume-bullets">
                  {proj.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="resume-section" style={{ borderBottom: 'none' }}>
            <h2 className="resume-section-title">LANGUAGES</h2>
            <div className="resume-languages-list">
              {resumeData.languagesSpoken.map((lang, idx) => (
                <span key={idx} className="resume-lang-tag">{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
