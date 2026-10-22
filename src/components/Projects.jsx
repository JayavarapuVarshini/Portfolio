import React from 'react';
import { portfolioConfig } from '../config/portfolioConfig';

export default function Projects() {
  const { projects } = portfolioConfig;

  // Render a clean, subtle CSS-based preview placeholder for each project
  const renderProjectVisual = (project) => {
    if (project.id === 'handloom-app') {
      return (
        <div className="project-preview-mock" style={{ borderColor: 'rgba(196, 181, 253, 0.25)' }}>
          <div className="mock-window-bar">
            <span className="mock-dot" style={{ backgroundColor: '#ef4444' }}></span>
            <span className="mock-dot" style={{ backgroundColor: '#f59e0b' }}></span>
            <span className="mock-dot" style={{ backgroundColor: '#10b981' }}></span>
            <span style={{ fontSize: '0.62rem', color: '#94a3b8', marginLeft: '6px', fontFamily: 'monospace' }}>
              handloom-showcase.local
            </span>
          </div>
          <div className="mock-window-content">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ height: '6px', width: '70px', background: 'var(--accent-lavender)', borderRadius: '3px' }}></div>
              <div style={{ display: 'flex', gap: '4px' }}>
                <span style={{ width: '16px', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }}></span>
                <span style={{ width: '16px', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }}></span>
              </div>
            </div>
            {/* Subtle Loom Weave Pattern Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', flex: 1, alignItems: 'center' }}>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{ background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(196, 181, 253, 0.2)', borderRadius: '4px', height: '54px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '4px' }}>
                  <div style={{ height: '3px', width: '80%', background: 'var(--accent-lavender-light)', borderRadius: '2px', marginBottom: '3px' }}></div>
                  <div style={{ height: '2px', width: '50%', background: 'rgba(255,255,255,0.3)', borderRadius: '1px' }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Default & global-loom visual placeholder
    return (
      <div className="project-preview-mock" style={{ borderColor: 'rgba(129, 140, 248, 0.25)' }}>
        <div className="mock-window-bar">
          <span className="mock-dot" style={{ backgroundColor: '#ef4444' }}></span>
          <span className="mock-dot" style={{ backgroundColor: '#f59e0b' }}></span>
          <span className="mock-dot" style={{ backgroundColor: '#10b981' }}></span>
          <span style={{ fontSize: '0.62rem', color: '#94a3b8', marginLeft: '6px', fontFamily: 'monospace' }}>
            globalloom-collective.store
          </span>
        </div>
        <div className="mock-window-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ height: '5px', width: '50px', background: 'var(--accent-lavender)', borderRadius: '2px' }}></span>
            <span style={{ height: '5px', width: '20px', background: 'rgba(255,255,255,0.4)', borderRadius: '2px' }}></span>
          </div>
          <div style={{ display: 'flex', gap: '8px', flex: 1, alignItems: 'center' }}>
            <div style={{ flex: 1, height: '54px', background: 'rgba(196, 181, 253, 0.08)', borderRadius: '4px', border: '1px solid rgba(196, 181, 253, 0.15)', padding: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ width: '40%', height: '3px', background: 'var(--accent-lavender)' }}></div>
              <div style={{ width: '70%', height: '2px', background: 'rgba(255,255,255,0.2)' }}></div>
            </div>
            <div style={{ flex: 1, height: '54px', background: 'rgba(196, 181, 253, 0.08)', borderRadius: '4px', border: '1px solid rgba(196, 181, 253, 0.15)', padding: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ width: '40%', height: '3px', background: 'var(--accent-lavender)' }}></div>
              <div style={{ width: '70%', height: '2px', background: 'rgba(255,255,255,0.2)' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">
          Featured <span className="highlight">Projects</span>
        </h2>
        <p className="section-desc" style={{ marginBottom: '3.5rem' }}>
          Selected web applications and digital concepts built with clean, purposeful code.
        </p>

        <div className="projects-grid">
          {projects.map((project) => {
            const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl.trim() !== '');
            const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl.trim() !== '');

            return (
              <div key={project.id} className="project-card">
                {/* Custom CSS Wireframe Preview */}
                <div className="project-preview-frame">
                  {renderProjectVisual(project)}
                </div>

                <div className="project-content">
                  <div className="project-meta-row">
                    <span className="project-category">{project.category}</span>
                    <div className="project-meta-badges">
                      {project.role && (
                        <span className="project-role-badge">Role: {project.role}</span>
                      )}
                      <span className="project-status-badge">
                        <span className="status-dot-pulse"></span>
                        {project.status || 'In Development'}
                      </span>
                    </div>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.shortDescription}</p>

                  <div className="project-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  {/* Links: Only displayed when verified URLs are provided */}
                  {(hasLiveUrl || hasGithubUrl) && (
                    <div className="project-actions">
                      {hasLiveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link-btn"
                          aria-label={`Live Demo for ${project.title}`}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                          <span>Live Demo</span>
                        </a>
                      )}

                      {hasGithubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link-btn"
                          aria-label={`GitHub Repository for ${project.title}`}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
