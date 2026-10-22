import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor for pointer-fine desktop devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseEnterWindow = () => setIsVisible(true);
    const onMouseLeaveWindow = () => setIsVisible(false);

    // Track hover on interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.project-card') ||
        target.closest('.skill-category-card') ||
        target.closest('.contact-card') ||
        target.closest('.social-link')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseenter', onMouseEnterWindow);
    document.addEventListener('mouseleave', onMouseLeaveWindow);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseenter', onMouseEnterWindow);
      document.removeEventListener('mouseleave', onMouseLeaveWindow);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor-container" aria-hidden="true">
      {/* Precision Inner Dot */}
      <div 
        className={`custom-cursor-dot ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`
        }}
      />
      {/* Smooth Ambient Follower Ring */}
      <div 
        className={`custom-cursor-ring ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`
        }}
      />
    </div>
  );
}
