
import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 47, suffix: '%', label: 'Reduction in Admin Work' },
  { value: 30, suffix: '%', label: 'Fewer No-Shows' },
  { value: 100, suffix: '%', label: 'Lifetime Ownership' },
  { value: 15, suffix: 'min', label: 'Setup Time' },
];

const StatsBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-12 bg-gradient-to-r from-clinic-600 to-teal-600 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease, transform 0.6s ease`,
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {isVisible ? <CountUp end={stat.value} /> : '0'}{stat.suffix}
              </div>
              <p className="text-clinic-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Simple CountUp animation component
const CountUp = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // 2 seconds
  const frameRate = 30; // frames per second
  const framesTotal = (duration / 1000) * frameRate;
  
  useEffect(() => {
    let frame = 0;
    const increment = end / framesTotal;
    
    const counter = setInterval(() => {
      frame++;
      const newCount = Math.min(Math.floor(frame * increment), end);
      setCount(newCount);
      
      if (frame === framesTotal) {
        clearInterval(counter);
      }
    }, 1000 / frameRate);
    
    return () => clearInterval(counter);
  }, [end]);
  
  return <>{count.toLocaleString()}</>;
};

export default StatsBanner;
