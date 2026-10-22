import React from 'react';
import { portfolioConfig } from '../config/portfolioConfig';

export default function Footer() {
  const { fullName, monogram } = portfolioConfig.personal;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="vj-badge" style={{ width: '28px', height: '28px', fontSize: '0.8rem' }}>
            {monogram}
          </div>
          <span>&copy; {new Date().getFullYear()} {fullName}. All rights reserved.</span>
        </div>

        <button 
          type="button" 
          className="back-to-top" 
          onClick={scrollToTop}
          aria-label="Back to top of page"
        >
          <span>Back to Top</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      </div>
    </footer>
  );
}
