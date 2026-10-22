import React from 'react';
import { portfolioConfig } from '../config/portfolioConfig';

export default function Skills() {
  const { programming, webDevelopment, databases, tools, additionalInterests } = portfolioConfig.skills;

  const categories = [
    {
      title: "Programming",
      description: "Core languages for algorithmic foundations & systems",
      skills: programming,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      title: "Web Development",
      description: "Frontend & interactive user interface building blocks",
      skills: webDevelopment,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    },
    {
      title: "Databases",
      description: "Relational storage & structured data querying",
      skills: databases,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      )
    },
    {
      title: "Tools & Technologies",
      description: "Version control & developer workflow environment",
      skills: tools,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      )
    },
    {
      title: "Additional Interests",
      description: "Exploration areas in data & intelligent systems",
      skills: additionalInterests,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">
          Things I <span className="highlight">work with</span>
        </h2>
        <p className="section-desc" style={{ marginBottom: '3rem' }}>
          A snapshot of the languages, web libraries, and tools I use to build projects.
        </p>

        <div className="skills-categories-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-category-header">
                <div className="skill-category-icon">{cat.icon}</div>
                <h3 className="skill-category-name">{cat.title}</h3>
              </div>

              <div className="skills-badge-list">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-badge">
                    <span className="skill-badge-dot"></span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
