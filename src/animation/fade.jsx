import React from 'react';
import { useState, useEffect, useRef } from 'react';

const FadeInUp = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  const className = `fade-in-up ${isVisible ? 'visible' : ''}`;

  return (
    <div ref={targetRef} className={className}>
      {children}
    </div>
  );
}

export default FadeInUp