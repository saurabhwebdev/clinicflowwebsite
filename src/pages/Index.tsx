import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SmoothScrollNav from '@/components/landing/SmoothScrollNav';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import StatsBanner from '@/components/landing/StatsBanner';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import PricingSection from '@/components/landing/PricingSection';
import ContactSection from '@/components/landing/ContactSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Update title
    document.title = "ClinicFlow | Modern Clinic Management Software";
    
    // Add intersection observer for animation effects
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      section.classList.add('section-animated');
      observer.observe(section);
    });

    // Check if we need to scroll to a section (coming from About Us page)
    if (location.state && location.state.scrollToSection) {
      const sectionId = location.state.scrollToSection;
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <SmoothScrollNav />
      <main className="flex-grow pt-16">
        <div id="home">
          <HeroSection />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="stats">
          <StatsBanner />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="pricing">
          <PricingSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <div>
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
