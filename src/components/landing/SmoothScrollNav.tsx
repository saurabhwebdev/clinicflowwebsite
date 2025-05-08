
import React from 'react';
import NavBar from '@/components/landing/NavBar';
import { smoothScrollTo } from '@/utils/scrollUtils';

const SmoothScrollNav = () => {
  // Handle navigation link clicks
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    smoothScrollTo(sectionId);
  };
  
  // We're adding click handlers to the nav links via useEffect
  React.useEffect(() => {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          const sectionId = href.substring(1);
          smoothScrollTo(sectionId);
        }
      });
    });
    
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', (e) => {
          e.preventDefault();
        });
      });
    };
  }, []);

  return <NavBar />;
};

export default SmoothScrollNav;
