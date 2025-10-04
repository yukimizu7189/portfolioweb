import React from 'react';
import { useState, useEffect, useRef } from 'react';

const FadeInUp = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const targetRef = useRef(null);

  useEffect(() => {

    const currentElement = targetRef.current;

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
    
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
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